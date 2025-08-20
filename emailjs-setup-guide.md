# EmailJS Setup Guide for Agape Studios Contact Form

## Overview
Your contact form is now integrated with EmailJS, which will send emails directly from your website without needing a backend server. Follow these steps to complete the setup.

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account (allows 200 emails/month)
3. Verify your email address

## Step 2: Connect Email Service
1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider:
   - **Gmail** (recommended for personal use)
   - **Outlook/Hotmail**
   - **Yahoo**
   - **Custom SMTP** (for business emails)
4. Follow the connection instructions
5. **Copy your Service ID** (looks like `service_xxxxxxx`)

## Step 3: Create Email Template
1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template content:

```
Subject: New 3D Virtual Tour Inquiry from {{from_name}}

Hello Agape Studios,

You have received a new inquiry for 3D virtual tour services.

CONTACT INFORMATION:
- Name: {{from_name}}
- Email: {{from_email}}
- Phone: {{phone}}
- Company: {{company}}

PROPERTY DETAILS:
- Address: {{property_address}}
- Type: {{property_type}}
- Size: {{property_size}}

SERVICE REQUIREMENTS:
- Service Type: {{service_type}}
- Timeline: {{deadline}}
- Budget: {{budget}}

MESSAGE:
{{message}}

Submitted on: {{submission_date}}

Please respond to this inquiry promptly.

Best regards,
Agape Studios Website
```

4. **Copy your Template ID** (looks like `template_xxxxxxx`)

## Step 4: Get Public Key
1. Go to **Account** > **General**
2. Find your **Public Key** (looks like `xxxxxxxxxxxxxxxxx`)
3. Copy this key

## Step 5: Update Environment Variables
1. Open the `.env.local` file in your project root
2. Replace the placeholder values with your actual keys:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_actual_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_actual_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

## Step 6: Update Business Email
1. Open `src/lib/emailjs.ts`
2. Change this line:
```typescript
to_email: 'info@agapestudios.co.uk', // Replace with your business email
```
3. Replace with your actual business email address

## Step 7: Test the Form
1. Restart your development server: `npm run dev`
2. Go to `http://localhost:3000/contact`
3. Fill out and submit the test form
4. Check your email inbox for the inquiry

## Step 8: Set Up Email Auto-Reply (Optional)
You can create a second template to send an automatic confirmation email to customers:

1. Create another template with subject: "Thank you for your inquiry - Agape Studios"
2. Create a second EmailJS service call in the code to send to the customer

## Troubleshooting

### Form Not Sending
- Check browser console for errors
- Verify all environment variables are set correctly
- Ensure EmailJS service is properly connected

### Emails Not Received
- Check spam/junk folder
- Verify email template is correctly configured
- Test with a different email address

### Rate Limits
- Free tier allows 200 emails/month
- Upgrade to paid plan for higher limits

## Security Notes
- EmailJS keys are safe to use in frontend code
- The `NEXT_PUBLIC_` prefix makes variables available to the browser
- No sensitive server credentials are exposed

## Next Steps After Setup
1. Test thoroughly with different form submissions
2. Customize email template styling if needed
3. Consider upgrading EmailJS plan for production use
4. Monitor email delivery rates

---

**Contact Form Features:**
- ✅ Real-time form validation
- ✅ Professional email formatting
- ✅ Error handling and user feedback
- ✅ Mobile-responsive design
- ✅ Spam protection through EmailJS
- ✅ Beautiful background image
- ✅ Professional success message

Your contact form is ready for production once EmailJS is configured!
