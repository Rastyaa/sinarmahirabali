export default {
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: (Rule: any) => Rule.required() },
    { name: 'shortDescription', title: 'Short Description', type: 'text', validation: (Rule: any) => Rule.required() },
    { name: 'detailDescription', title: 'Detail Description', type: 'text', validation: (Rule: any) => Rule.required() },
    { name: 'image', title: 'Image', type: 'image', validation: (Rule: any) => Rule.required() },
    { name: 'benefits', title: 'Benefits', type: 'array', of: [{type: 'string'}] },
    { name: 'suitableFor', title: 'Suitable For', type: 'array', of: [{type: 'string'}] },
    { name: 'process', title: 'Process', type: 'array', of: [{type: 'string'}] },
    { name: 'isFeatured', title: 'Is Featured', type: 'boolean' },
    { name: 'order', title: 'Order', type: 'number' },
  ]
}
