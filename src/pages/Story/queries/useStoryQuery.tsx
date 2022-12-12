import dayjs from 'dayjs'
import { createQuery } from 'react-query-kit'

import getHTTPClient from 'app/http'
import { loadBookmarkIds } from 'app/storage'
import { StoryWithCategory } from 'app/types/Story'

type Variables = {
  id: string
}

type StoryWithBookmarkInformation = StoryWithCategory & {
  bookmarked: boolean
}

const useStoryQuery = createQuery<
  StoryWithBookmarkInformation,
  Variables,
  Error
>({
  primaryKey: 'story',
  async queryFn({ queryKey: [_, variables] }) {
    const client = getHTTPClient()

    const { response, error } = await client({
      method: 'GET',
      url: `/${variables.id}`,
      params: {
        'show-fields': 'trailText,headline,body,thumbnail'
      }
    })

    if (error) throw new Error('Error fetching story')
    if (response.status !== 200) throw new Error('Error fetching story')

    const apiResponse = response.data.response
    if (apiResponse.status !== 'ok') throw new Error('Error fetching story')

    const bookmarkIds = loadBookmarkIds()

    const content = apiResponse.content
    return {
      id: variables.id,
      title: content.fields.headline,
      body: content.fields.body,
      thumbnail: content.fields.thumbnail ?? null,
      subtitle: content.fields.trailText,
      date: dayjs(content.webPublicationDate),
      bookmarked: bookmarkIds.includes(variables.id),
      category: content.sectionId
    }
  }
})

export default useStoryQuery
