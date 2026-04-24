# Support Ticket System Documentation

## Overview

A lightweight support ticket system for React (TypeScript) websites hosted on Netlify. Users can submit support tickets with attachments that are sent directly to Discord via webhook.

## Features

- ✅ Modern, responsive form UI
- ✅ Drag-and-drop image upload
- ✅ Image preview with remove functionality
- ✅ Client-side form validation
- ✅ Discord webhook integration
- ✅ Automatic ticket ID generation
- ✅ Success/Error feedback
- ✅ Dark mode support
- ✅ TypeScript support

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Hosting**: Netlify
- **Backend**: Netlify Serverless Functions
- **Integration**: Discord Webhooks

## Project Structure

```
/src/app/pages/
  Support.tsx                    # Support form page component

/netlify/functions/
  submit-ticket.ts              # Netlify serverless function

netlify.toml                    # Netlify configuration
.env.example                    # Environment variables template
```

## Setup Instructions

### 1. Discord Webhook Setup

1. Go to your Discord server
2. Navigate to **Server Settings** → **Integrations** → **Webhooks**
3. Click **New Webhook** (or use an existing one)
4. Configure the webhook:
   - Name: `Support Tickets` (or your preferred name)
   - Channel: Select the channel where tickets should be posted
5. Click **Copy Webhook URL**

### 2. Environment Configuration

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Add your Discord webhook URL to `.env`:
   ```env
   DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/YOUR_WEBHOOK_ID/YOUR_WEBHOOK_TOKEN
   ```

3. In Netlify Dashboard:
   - Go to **Site Settings** → **Environment Variables**
   - Add `DISCORD_WEBHOOK_URL` with your webhook URL

### 3. Install Dependencies

The following dependencies are required:

```bash
npm install @netlify/functions lambda-multipart-parser
```

These have already been installed if you ran the setup.

### 4. Local Development

To test locally with Netlify functions:

```bash
# Install Netlify CLI globally (if not already installed)
npm install -g netlify-cli

# Run local development server with functions
netlify dev
```

This will start the Vite dev server and Netlify functions at:
- Frontend: `http://localhost:8888`
- Functions: `http://localhost:8888/.netlify/functions/`

### 5. Deploy to Netlify

#### Option A: Continuous Deployment (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket
2. Connect your repository to Netlify
3. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Functions directory**: `netlify/functions`
4. Add environment variable `DISCORD_WEBHOOK_URL` in Netlify dashboard
5. Deploy!

#### Option B: Manual Deployment

```bash
# Build the project
npm run build

# Deploy using Netlify CLI
netlify deploy --prod
```

## Usage

### Accessing the Support Page

Once deployed, users can access the support form at:
```
https://your-site.netlify.app/support
```

### Form Fields

- **Name** (required) - User's full name
- **Email** (required) - Contact email address
- **Software/Product** (required) - Which product they need help with
- **Description** (required) - Detailed description of the issue
- **Attachments** (optional) - Image attachments (drag & drop or click to upload)

### What Happens When a Ticket is Submitted

1. Form is validated on the client side
2. Data is sent to Netlify function via `FormData`
3. Function generates a unique ticket ID (format: `TKT-XXXXXXXX`)
4. A Discord embed is created with:
   - Ticket ID
   - User's name and email
   - Software/Product name
   - Issue description
   - Timestamp
5. Images are attached to the Discord message
6. Success response is returned to the user with their ticket ID

### Discord Message Format

The support ticket appears in Discord as a rich embed:

```
🎫 New Support Ticket

🆔 Ticket ID: TKT-ABC12345
👤 Name: John Doe
📧 Email: john@example.com
💻 Software/Product: Product Name
📝 Description: Issue description here...
🕒 Submitted At: 2026-04-24 12:34:56 UTC

[Attached images appear below the embed]
```

## API Reference

### POST `/.netlify/functions/submit-ticket`

**Request:**
- Content-Type: `multipart/form-data`
- Body:
  - `name` (string, required)
  - `email` (string, required)
  - `software` (string, required)
  - `description` (string, required)
  - `images` (File[], optional)

**Response:**

Success (200):
```json
{
  "success": true,
  "ticketId": "TKT-ABC12345",
  "message": "Support ticket submitted successfully"
}
```

Error (400/500):
```json
{
  "success": false,
  "error": "Error message here"
}
```

## Customization

### Styling

The component uses Tailwind CSS classes and follows the existing design system. To customize:

1. Modify classes in [Support.tsx](src/app/pages/Support.tsx)
2. Adjust colors, spacing, and layout as needed
3. The form is fully responsive and supports dark mode

### Discord Embed

To customize the Discord embed appearance, edit the `embed` object in [submit-ticket.ts](netlify/functions/submit-ticket.ts:62):

```typescript
const embed = {
  title: '🎫 New Support Ticket',
  color: 3447003, // Change color (decimal format)
  fields: [
    // Add, remove, or modify fields
  ],
  footer: {
    text: 'Your Custom Footer',
  },
};
```

### Ticket ID Format

To change the ticket ID format, modify the `generateTicketId()` function in [submit-ticket.ts](netlify/functions/submit-ticket.ts:5):

```typescript
const generateTicketId = (): string => {
  // Your custom logic here
  return 'CUSTOM-FORMAT';
};
```

## Troubleshooting

### Issue: Function returns 500 error

**Solution:**
- Check that `DISCORD_WEBHOOK_URL` is set in Netlify environment variables
- Verify the webhook URL is valid and the webhook still exists in Discord
- Check Netlify function logs for detailed error messages

### Issue: Images not uploading

**Solution:**
- Ensure files are actual images (MIME type starts with `image/`)
- Check file size limits (Discord has a 10MB limit per file)
- Verify the multipart parser is correctly handling files

### Issue: Form validation not working

**Solution:**
- Check browser console for JavaScript errors
- Ensure all required fields have the `required` attribute
- Verify email regex pattern is working correctly

### Issue: Netlify function not found (404)

**Solution:**
- Verify `netlify.toml` is in the root directory
- Check that the `functions` path is set to `netlify/functions`
- Ensure the function file is named `submit-ticket.ts`
- Redeploy the site

## Security Considerations

1. **Never commit `.env` file** - Always use `.env.example` for templates
2. **Keep webhook URL secret** - Never expose in client-side code
3. **Validate input** - Both client and server-side validation are implemented
4. **Rate limiting** - Consider adding rate limiting to prevent abuse
5. **File type validation** - Only image files are accepted
6. **CORS** - Netlify functions handle CORS automatically

## File Size Limits

- **Discord**: 10MB per file (for free tier)
- **Netlify Functions**: 10MB payload limit
- Consider adding client-side file size validation if needed

## Browser Support

The support form works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Dependencies

### Frontend
- `react` - UI library
- `react-router` - Routing
- `lucide-react` - Icons
- `tailwindcss` - Styling

### Backend (Netlify Functions)
- `@netlify/functions` - Netlify function types
- `lambda-multipart-parser` - Parse multipart form data

## Additional Resources

- [Netlify Functions Documentation](https://docs.netlify.com/functions/overview/)
- [Discord Webhook Documentation](https://discord.com/developers/docs/resources/webhook)
- [React Documentation](https://react.dev/)

## License

This support ticket system is part of your FM Solution website project.

## Support

If you need help with this system, please contact your development team or refer to the documentation above.
