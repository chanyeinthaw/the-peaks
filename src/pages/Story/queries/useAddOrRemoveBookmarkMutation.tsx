import { createMutation } from 'react-query-kit'

import { ToastType } from 'app/helpers/toast'
import { loadBookmarkIds, loadBookmarks } from 'app/storage'
import { StoryWithCategory } from 'app/types/Story'

const useAddOrRemoveBookmarkMutation = createMutation<
  ToastType,
  StoryWithCategory
>(async (story) => {
  let bookmarks = loadBookmarks()
  const bookmarkIds = loadBookmarkIds()

  let result: ToastType

  if (bookmarkIds.includes(story.id)) {
    const idx = bookmarkIds.indexOf(story.id)
    bookmarkIds.splice(idx, 1)
    bookmarks = bookmarks.filter((b) => b.story.id !== story.id)

    result = 'bookmark-remove'
  } else {
    bookmarkIds.push(story.id)
    bookmarks.push({
      story,
      createdAt: new Date().toISOString()
    })

    bookmarks.sort((a, b) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    })

    result = 'bookmark-add'
  }

  localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
  localStorage.setItem('bookmarkIds', JSON.stringify(bookmarkIds))
  return result
})

export default useAddOrRemoveBookmarkMutation
