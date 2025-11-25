import { PackageIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'aboutCapsulePage',
  title: 'About Capsule Page',
  icon: PackageIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heroText',
      title: 'Hero Text',
      type: 'text',
      rows: 5,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'capsuleLogoLight',
      title: 'Capsule Logo (Light Mode)',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'capsuleLogoDark',
      title: 'Capsule Logo (Dark Mode)',
      type: 'image',
      options: { hotspot: true },
      description: 'Optional logo for dark mode; falls back to light logo if empty.',
    }),
    defineField({
      name: 'primaryCtaText',
      title: 'Primary Button Text',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'primaryCtaUrl',
      title: 'Primary Button URL',
      type: 'url',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'secondaryCtaText',
      title: 'Secondary Button Text',
      type: 'string',
    }),
    defineField({
      name: 'secondaryCtaUrl',
      title: 'Secondary Button URL',
      type: 'url',
    }),
    defineField({
      name: 'instagramUrl',
      title: 'Instagram URL',
      type: 'url',
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
})
