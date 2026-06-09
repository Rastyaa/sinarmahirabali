export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: (Rule: any) => Rule.required() },
    { name: 'location', title: 'Location', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'serviceType', title: 'Service Type', type: 'reference', to: [{ type: 'service' }] },
    { name: 'description', title: 'Description', type: 'text', validation: (Rule: any) => Rule.required() },
    { name: 'images', title: 'Images', type: 'array', of: [{ type: 'image' }], validation: (Rule: any) => Rule.required() },
    { name: 'year', title: 'Year', type: 'number' },
    { name: 'beforeImage', title: 'Before Image', type: 'image' },
    { name: 'afterImage', title: 'After Image', type: 'image' },
    { name: 'isFeatured', title: 'Is Featured', type: 'boolean' },
    { name: 'order', title: 'Order', type: 'number' },
  ]
}
