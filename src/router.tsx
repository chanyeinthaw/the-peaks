import { createBrowserRouter } from 'react-router-dom'

import AppPage from 'app/pages/App.page'
import BookmarksPage from 'app/pages/Bookmarks/Bookmarks.page'
import ErrorPage from 'app/pages/Error.page'
import HomePage from 'app/pages/Home/Home.page'
import SearchResultsPage from 'app/pages/SearchResults/SearchResults.page'
import StoryPage from 'app/pages/Story/Story.page'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppPage />,
    children: [
      {
        path: '',
        element: <HomePage />
      },
      {
        path: '/bookmarks',
        element: <BookmarksPage />
      },
      {
        path: '/search',
        element: <SearchResultsPage />
      },
      {
        path: 'story/*',
        element: <StoryPage />,
        errorElement: <ErrorPage />
      }
    ],
    errorElement: <ErrorPage />
  }
])

export default router
