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
  categorized: Record<string, StoryWithCategory[]>
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
        'page-size': 50,
        section: 'sport|culture|lifeandstyle',
        'show-fields': 'trailText,headline,body,thumbnail'
      }
    })

    if (error) throw new Error('Error fetching stories')
    if (response.status !== 200) throw new Error('Error fetching stories')

    const apiResponse = response.data.response
    if (apiResponse.status !== 'ok') throw new Error('Error fetching stories')

    const results = apiResponse.results

    const highlights = results
      .slice(0, 5)
      .map((result: any) => createStoryWithCategoryFromRaw(result))

    const stories = results
      .slice(5, 8)
      .map((result: any) => createStoryWithCategoryFromRaw(result))

    const categorized: Record<string, StoryWithCategory[]> = {}

    results.slice(8).forEach((result: any) => {
      if (!categorized.hasOwnProperty(result.sectionName)) {
        categorized[result.sectionName] = []
      }

      categorized[result.sectionName].push(
        createStoryWithCategoryFromRaw(result)
      )
    })

    return {
      highlights,
      stories,
      categorized
    }
  }
})

export default useTopStoriesQuery
