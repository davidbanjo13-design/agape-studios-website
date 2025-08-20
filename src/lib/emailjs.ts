import emailjs from '@emailjs/browser'

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!

export interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  company?: string
  propertyAddress: string
  propertyType: string
  propertySize?: string
  serviceType: string
  projectScope?: string[]
  tourType?: string[]
  deadline: string
  budget: string
  hasFloorPlans?: boolean
  additionalRequests?: string
  preferredContactMethod?: string
  hearAboutUs?: string
  message?: string
}

export const sendContactEmail = async (formData: ContactFormData): Promise<void> => {
  try {
    // Initialize EmailJS (call init with PUBLIC_KEY)
    emailjs.init(PUBLIC_KEY)

    // Format the data for the email template
    const templateParams = {
      to_email: 'info@agapestudios.co.uk', // Replace with your business email
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      phone: formData.phone,
      company: formData.company || 'Not provided',
      property_address: formData.propertyAddress,
      property_type: formData.propertyType,
      property_size: formData.propertySize || 'Not specified',
      service_type: formData.serviceType,
      project_scope: formData.projectScope?.join(', ') || 'Not specified',
      tour_type: formData.tourType?.join(', ') || 'Not specified',
      deadline: formData.deadline,
      budget: formData.budget,
      has_floor_plans: formData.hasFloorPlans ? 'Yes' : 'No',
      additional_requests: formData.additionalRequests || 'None',
      preferred_contact: formData.preferredContactMethod || 'Not specified',
      hear_about_us: formData.hearAboutUs || 'Not specified',
      message: formData.message || 'No additional message',
      submission_date: new Date().toLocaleDateString('en-GB', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    }

    const result = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams)
    
    if (result.status !== 200) {
      throw new Error(`EmailJS returned status ${result.status}`)
    }

    console.log('Email sent successfully:', result)
  } catch (error) {
    console.error('Failed to send email:', error)
    throw new Error('Failed to send email. Please try again or contact us directly.')
  }
}

// Email template that you'll need to create in EmailJS dashboard
export const EMAIL_TEMPLATE_SAMPLE = `
Subject: New 3D Virtual Tour Inquiry from {{from_name}}

Hello Agape Studios,

You have received a new inquiry for 3D virtual tour services.

CONTACT INFORMATION:
- Name: {{from_name}}
- Email: {{from_email}}
- Phone: {{phone}}
- Company: {{company}}
- Preferred Contact Method: {{preferred_contact}}

PROPERTY DETAILS:
- Address: {{property_address}}
- Type: {{property_type}}
- Size: {{property_size}}

SERVICE REQUIREMENTS:
- Service Type: {{service_type}}
- Project Scope: {{project_scope}}
- Tour Type: {{tour_type}}
- Timeline: {{deadline}}
- Budget: {{budget}}
- Floor Plans Available: {{has_floor_plans}}

ADDITIONAL INFORMATION:
- Additional Requests: {{additional_requests}}
- How they heard about us: {{hear_about_us}}
- Message: {{message}}

Submitted on: {{submission_date}}

Please respond to this inquiry promptly.

Best regards,
Agape Studios Website
`
