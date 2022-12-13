import dayjs from 'dayjs'

import { StoryWithCategory } from 'app/types/Story'

const createStoryWithCategoryFromRaw = (
  raw: any,
  extras: any = {}
): StoryWithCategory => ({
  id: raw.id,
  title: raw.fields.headline,
  body: raw.fields.body,
  thumbnail: raw.fields.thumbnail ?? null,
  subtitle: raw.fields.trailText,
  date: dayjs(raw.webPublicationDate),
  category: raw.sectionId,
  ...extras
})

export default createStoryWithCategoryFromRaw
