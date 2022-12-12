import dayjs from 'dayjs'
import { createQuery } from 'react-query-kit'

import { loadBookmarks } from 'app/storage'
import Bookmark from 'app/types/Bookmark'

const useBookmarksQuery = createQuery<Bookmark[], string, Error>({
  primaryKey: 'bookmarks',
  async queryFn({ queryKey: [_, sortBy] }) {
    const bookmarks = loadBookmarks()

    if (sortBy === 'newest') {
      bookmarks.sort((a, b) => {
        return dayjs(b.story.date).unix() - dayjs(a.story.date).unix()
      })
    } else if (sortBy === 'oldest') {
      bookmarks.sort((a, b) => {
        return dayjs(a.story.date).unix() - dayjs(b.story.date).unix()
      })
    }

    return bookmarks
  }
})

export default useBookmarksQuery
