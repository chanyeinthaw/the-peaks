import PageTitle from 'app/components/shared/PageTitle.component'
import Story from 'app/components/shared/Story.component'
import StoryGroup from 'app/pages/Home/components/StoryGroup.component'

const SearchResultsPage = () => {
  return (
    <>
      <PageTitle title={'Search results'} variant={'default'} />
      <StoryGroup
        title={''}
        css={{
          marginBottom: '105px'
        }}>
        <Story category={'lifeandstyle'} variant={'md'} />
        <Story category={'lifeandstyle'} variant={'md'} />
        <Story category={'lifeandstyle'} variant={'md'} />
      </StoryGroup>
    </>
  )
}

export default SearchResultsPage
