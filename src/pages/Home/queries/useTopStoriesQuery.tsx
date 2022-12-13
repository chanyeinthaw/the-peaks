import { createQuery } from 'react-query-kit'

import createStoryWithCategoryFromRaw from 'app/helpers/createStoryWithCategoryFromRaw'
import getHTTPClient from 'app/http'
import { StoryWithCategory } from 'app/types/Story'

type Variables = {
  sortBy: string
}

type TopStoriesResponse = {
  highlights: StoryWithCategory[]
  stories: StoryWithCategory[]
}

const useTopStoriesQuery = createQuery<TopStoriesResponse, Variables, Error>({
  primaryKey: 'topStories',
  async queryFn({ queryKey: [_, variables] }) {
    const client = getHTTPClient()

    const { response, error } = await client({
      method: 'GET',
      url: '/search',
      params: {
        'order-by': variables.sortBy,
        'page-size': 8,
        'show-fields': 'trailText,headline,body,thumbnail'
      }
    })

    if (error) throw new Error('Error fetching stories')
    if (response.status !== 200) throw new Error('Error fetching stories')

    const apiResponse = response.data.response
    if (apiResponse.status !== 'ok') throw new Error('Error fetching stories')

    const results = apiResponse.results

    return {
      highlights: results
        .slice(0, 5)
        .map((result: any) => createStoryWithCategoryFromRaw(result)),
      stories: results
        .slice(5)
        .map((result: any) => createStoryWithCategoryFromRaw(result))
    }
  }
})

export default useTopStoriesQuery
