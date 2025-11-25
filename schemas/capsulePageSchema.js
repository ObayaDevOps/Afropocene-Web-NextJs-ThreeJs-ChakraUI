import { PackageIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'capsulePage',
  title: 'Capsule Exhibition',
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
      name: 'slug',
      title: 'Slug (appears at end of URL)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'exhibitionName',
      title: 'Exhibition Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'artistName',
      title: 'Artist Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'headingMeta',
      title: 'Heading Meta',
      type: 'string',
      description: 'Small text under the title (e.g. The Capsule 24/06/24)',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'heroImageAlt',
      title: 'Hero Image Alt Text',
      type: 'string',
    }),
    defineField({
      name: 'heroImageCaption',
      title: 'Hero Image Caption',
      type: 'string',
    }),
    defineField({
      name: 'exhibitionParagraphs',
      title: 'Exhibition Paragraphs',
      type: 'array',
      of: [defineArrayMember({ type: 'text' })],
    }),
    defineField({
      name: 'galleryImages',
      title: 'Gallery Images',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'caption',
              title: 'Caption',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'aboutArtistHeading',
      title: 'About Artist Heading',
      type: 'string',
      initialValue: 'About the Artist',
    }),
    defineField({
      name: 'aboutArtistParagraphs',
      title: 'About Artist Paragraphs',
      type: 'array',
      of: [defineArrayMember({ type: 'text' })],
    }),
    defineField({
      name: 'artistImage',
      title: 'Artist Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'currentlyActiveExhibition',
      title: 'Currently Active Exhibition',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'moveToArchive',
      title: 'Move to Archive of Past Capsules',
      type: 'boolean',
      description: 'Toggle to flag this capsule for the archive listing.',
      initialValue: false,
    }),
    // Archive + list data
    defineField({
      name: 'featuresList',
      title: 'Features List',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'archivePageDisplayShortDescription',
      title: 'Archive Short Description',
      type: 'text',
    }),
    defineField({
      name: 'archiveDisplayImage',
      title: 'Archive Display Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'exhibitionStartDate',
      title: 'Exhibition Start Date',
      type: 'date',
    }),
    defineField({
      name: 'exhibitionEndDate',
      title: 'Exhibition End Date',
      type: 'date',
    }),
  ],
})
