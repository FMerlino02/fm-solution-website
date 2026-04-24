import { Handler, HandlerEvent } from '@netlify/functions';
import * as multipart from 'lambda-multipart-parser';

// Generate a random ticket ID
const generateTicketId = (): string => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let ticketId = 'TKT-';
  for (let i = 0; i < 8; i++) {
    ticketId += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return ticketId;
};

// Format timestamp
const formatTimestamp = (): string => {
  const now = new Date();
  return now.toISOString().replace('T', ' ').substring(0, 19) + ' UTC';
};

export const handler: Handler = async (event: HandlerEvent) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ success: false, error: 'Method not allowed' }),
    };
  }

  try {
    // Parse multipart form data
    const result = await multipart.parse(event);

    // Extract form fields
    const name = result.name as string;
    const email = result.email as string;
    const software = result.software as string;
    const description = result.description as string;
    const images = result.images || [];

    // Validate required fields
    if (!name || !email || !software || !description) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          success: false,
          error: 'Missing required fields: name, email, software, or description',
        }),
      };
    }

    // Get Discord webhook URL from environment
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
    if (!webhookUrl) {
      console.error('DISCORD_WEBHOOK_URL is not configured');
      return {
        statusCode: 500,
        body: JSON.stringify({
          success: false,
          error: 'Discord webhook is not configured',
        }),
      };
    }

    // Generate ticket ID
    const ticketId = generateTicketId();
    const timestamp = formatTimestamp();

    // Create Discord embed message
    const embed = {
      title: '🎫 New Support Ticket',
      color: 3447003, // Blue color
      fields: [
        {
          name: '🆔 Ticket ID',
          value: ticketId,
          inline: true,
        },
        {
          name: '👤 Name',
          value: name,
          inline: true,
        },
        {
          name: '📧 Email',
          value: email,
          inline: false,
        },
        {
          name: '💻 Software/Product',
          value: software,
          inline: false,
        },
        {
          name: '📝 Description',
          value: description.length > 1024 ? description.substring(0, 1021) + '...' : description,
          inline: false,
        },
        {
          name: '🕒 Submitted At',
          value: timestamp,
          inline: false,
        },
      ],
      footer: {
        text: 'Support Ticket System',
      },
      timestamp: new Date().toISOString(),
    };

    // Prepare the Discord message payload
    const formData = new FormData();

    // Add the embed as JSON payload
    const payload = {
      embeds: [embed],
    };
    formData.append('payload_json', JSON.stringify(payload));

    // Attach images if any
    const imageArray = Array.isArray(images) ? images : [images];
    imageArray.forEach((image: any, index: number) => {
      if (image && image.content) {
        const blob = new Blob([image.content], { type: image.contentType });
        formData.append(`file${index}`, blob, image.filename);
      }
    });

    // Send to Discord webhook
    const discordResponse = await fetch(webhookUrl, {
      method: 'POST',
      body: formData,
    });

    if (!discordResponse.ok) {
      const errorText = await discordResponse.text();
      console.error('Discord API error:', errorText);
      return {
        statusCode: 500,
        body: JSON.stringify({
          success: false,
          error: 'Failed to send ticket to Discord',
        }),
      };
    }

    // Return success response
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        ticketId: ticketId,
        message: 'Support ticket submitted successfully',
      }),
    };
  } catch (error) {
    console.error('Error processing ticket:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : 'Internal server error',
      }),
    };
  }
};
