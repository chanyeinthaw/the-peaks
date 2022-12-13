import { createInfiniteQuery } from 'react-query-kit'

import createStoryWithCategoryFromRaw from 'app/helpers/createStoryWithCategoryFromRaw'
import getHTTPClient from 'app/http'
import { StoryWithCategory } from 'app/types/Story'

type Variables = {
  query?: string
  sortBy: string
}

type SearchStoryResponse = {
  nextPage: number | null
  stories: StoryWithCategory[]
}

const useSearchStoryQuery = createInfiniteQuery<
  SearchStoryResponse,
  Variables,
  Error
>({
  primaryKey: 'searchStory',
  getNextPageParam: (lastPage) => lastPage.nextPage,
  async queryFn({ queryKey: [_, variables], pageParam = 1 }) {
    const client = getHTTPClient()

    const { response, error } = await client({
      method: 'GET',
      url: '/search',
      params: {
        'order-by': variables.sortBy,
        page: pageParam,
        'page-size': 15,
        'show-fields': 'trailText,headline,body,thumbnail',
        ...(variables.query && { q: variables.query })
      }
    })

    if (error) throw new Error('Error fetching stories')
    if (response.status !== 200) throw new Error('Error fetching stories')

    const apiResponse = response.data.response
    if (apiResponse.status !== 'ok') throw new Error('Error fetching stories')

    const results = apiResponse.results

    return {
      nextPage:
        apiResponse.currentPage < apiResponse.pages
          ? apiResponse.currentPage + 1
          : null,
      stories: results.map((result: any) =>
        createStoryWithCategoryFromRaw(result)
      )
    }
  }
})

export default useSearchStoryQuery
