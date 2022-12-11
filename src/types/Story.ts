import dayjs from 'dayjs'

type Story = {
  id: string
  title: string
  body: string
  thumbnail: string | null
  subtitle: string
  date: dayjs.Dayjs
}

export type Category = 'sport' | 'culture' | 'lifeandstyle'

export type StoryWithCategory = Story & {
  category: Category
}

export default Story
