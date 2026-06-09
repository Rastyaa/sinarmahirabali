export default {
  name: 'heroSection',
  title: 'Hero Section',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'subtitle', title: 'Subtitle', type: 'text', validation: (Rule: any) => Rule.required() },
    { name: 'image', title: 'Image', type: 'image', validation: (Rule: any) => Rule.required() },
    { name: 'primaryCtaLabel', title: 'Primary CTA Label', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'primaryCtaUrl', title: 'Primary CTA URL', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'secondaryCtaLabel', title: 'Secondary CTA Label', type: 'string' },
    { name: 'secondaryCtaUrl', title: 'Secondary CTA URL', type: 'string' },
  ]
}
