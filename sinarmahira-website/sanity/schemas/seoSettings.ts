export default {
  name: 'seoSettings',
  title: 'SEO Settings',
  type: 'document',
  fields: [
    { name: 'pageName', title: 'Page Name', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'metaTitle', title: 'Meta Title', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'metaDescription', title: 'Meta Description', type: 'text', validation: (Rule: any) => Rule.required() },
    { name: 'ogImage', title: 'Open Graph Image', type: 'image' },
    { name: 'keywords', title: 'Keywords', type: 'array', of: [{type: 'string'}] },
  ]
}
