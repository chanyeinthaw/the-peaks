import dayjs from 'dayjs'
import { createQuery } from 'react-query-kit'

import getHTTPClient from 'app/http'
import Story from 'app/types/Story'

type Variables = {
  id: string
}

const useStoryQuery = createQuery<Story, Variables, Error>({
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

    const content = apiResponse.content
    return {
      id: variables.id,
      title: content.fields.headline,
      body: content.fields.body,
      thumbnail: content.fields.thumbnail ?? null,
      subtitle: content.fields.trailText,
      date: dayjs(content.webPublicationDate)
    }
  }
})

export default useStoryQuery
