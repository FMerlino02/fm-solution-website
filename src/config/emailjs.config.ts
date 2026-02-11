// EmailJS Configuration
// Sign up at https://www.emailjs.com/ to get your credentials

export const emailJsConfig = {
  // Your EmailJS Service ID
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',

  // Your EmailJS Template ID
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',

  // Your EmailJS Public Key (User ID)
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
};

// Instructions to set up EmailJS:
// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Add an email service (Gmail, Outlook, etc.)
// 3. Create an email template with these variables:
//    - {{from_name}} - sender's name
//    - {{from_email}} - sender's email
//    - {{phone}} - sender's phone (optional)
//    - {{company}} - sender's company (optional)
//    - {{message}} - the message content
// 4. Get your Service ID, Template ID, and Public Key
// 5. Add them to your .env file:
//    VITE_EMAILJS_SERVICE_ID=your_service_id
//    VITE_EMAILJS_TEMPLATE_ID=your_template_id
//    VITE_EMAILJS_PUBLIC_KEY=your_public_key
