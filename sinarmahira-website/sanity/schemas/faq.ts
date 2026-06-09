export default {
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    { name: 'question', title: 'Question', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'answer', title: 'Answer', type: 'text', validation: (Rule: any) => Rule.required() },
    { name: 'order', title: 'Order', type: 'number' },
    { name: 'isActive', title: 'Is Active', type: 'boolean' },
  ]
}
