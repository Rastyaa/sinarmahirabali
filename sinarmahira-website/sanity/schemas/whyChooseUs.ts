export default {
  name: 'whyChooseUs',
  title: 'Why Choose Us',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'description', title: 'Description', type: 'text', validation: (Rule: any) => Rule.required() },
    { name: 'icon', title: 'Icon', type: 'image' },
    { name: 'order', title: 'Order', type: 'number' },
    { name: 'isActive', title: 'Is Active', type: 'boolean' },
  ]
}
