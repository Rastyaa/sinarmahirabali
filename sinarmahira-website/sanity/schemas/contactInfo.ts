export default {
  name: 'contactInfo',
  title: 'Contact Info',
  type: 'document',
  fields: [
    { name: 'whatsappNumber', title: 'WhatsApp Number', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'phoneNumber', title: 'Phone Number', type: 'string' },
    { name: 'email', title: 'Email', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'address', title: 'Address', type: 'text', validation: (Rule: any) => Rule.required() },
    { name: 'operationalHours', title: 'Operational Hours', type: 'string' },
    { name: 'googleMapsUrl', title: 'Google Maps URL', type: 'url' },
    { name: 'googleMapsEmbedUrl', title: 'Google Maps Embed URL', type: 'url' },
  ]
}
