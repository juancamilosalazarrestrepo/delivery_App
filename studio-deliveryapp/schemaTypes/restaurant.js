import {defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurants',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Restaurant name',
      validation: (rule) => rule.required(),
    },
    {
      name: 'description',
      type: 'string',
      title: 'Restaurant description',
      validation: (rule) => rule.max(200),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Restaurant image',
    },
    {
      name: 'lat',
      type: 'number',
      title: 'latitude of the restaurant',
    },
    {
      name: 'lng',
      type: 'number',
      title: 'longitude of the restaurant',
    },
    {
      name: 'address',
      type: 'string',
      title: ' restaurant address',
      validation: (rule) => rule.required(),
    },
    {
      name: 'rating',
      type: 'number',
      title: 'enter a number between 1 to 5',
      validation: (rule) => rule.required().min(1).max(5).error('please enter a valid value'),
    },
    {
      name: 'reviews',
      type: 'string',
      title: 'Reviews',
    },
    {
      name: 'type',
      title: 'Category',
      validation: (rule) => rule.required(),
      type: 'reference',
      to: [{ type: 'category' }],
    },
    {
        name:'dishes',
        type:'array',
        title:'Dishes',
        of:[{type:'reference', to:[{type:'dish'}]}]
    }
  ],
})
