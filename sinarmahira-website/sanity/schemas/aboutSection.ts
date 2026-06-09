export default {
  name: 'aboutSection',
  title: 'About Section',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'description', title: 'Description', type: 'text', validation: (Rule: any) => Rule.required() },
    { name: 'vision', title: 'Vision', type: 'text' },
    { name: 'mission', title: 'Mission', type: 'array', of: [{type: 'string'}] },
    { name: 'image', title: 'Image', type: 'image' },
    { name: 'experienceText', title: 'Experience Text', type: 'string' },
  ]
}
