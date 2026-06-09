export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    { name: 'siteName', title: 'Site Name', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'logo', title: 'Logo', type: 'image', validation: (Rule: any) => Rule.required() },
    { name: 'favicon', title: 'Favicon', type: 'image' },
    { name: 'mainPhone', title: 'Main Phone', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'mainWhatsapp', title: 'Main WhatsApp', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'mainEmail', title: 'Main Email', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'address', title: 'Address', type: 'text', validation: (Rule: any) => Rule.required() },
    { name: 'googleMapsUrl', title: 'Google Maps URL', type: 'url' },
    { name: 'footerDescription', title: 'Footer Description', type: 'text' },
  ]
}
