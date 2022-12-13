import { useAtom } from 'jotai'

import sortByAtom from 'app/atoms/sortBy.atom'
import Loading from 'app/components/shared/Loading.component'
import useTopStoriesQuery from 'app/pages/Home/queries/useTopStoriesQuery'
import CategorizedStoriesSection from 'app/pages/Home/sections/CategorizedStories.section'
import TopStoriesSection from 'app/pages/Home/sections/TopStories.section'

const HomePage = () => {
  const [sortBy] = useAtom(sortByAtom)
  const { data, isLoading, error, isError } = useTopStoriesQuery({
    variables: {
      sortBy
    }
  })

  if (isError) throw error
  if (isLoading) return <Loading />

  return (
    <>
      <TopStoriesSection
        highlights={data!.highlights}
        stories={data!.stories}
      />
      <CategorizedStoriesSection categorized={data!.categorized} />
    </>
  )
}

export default HomePage
