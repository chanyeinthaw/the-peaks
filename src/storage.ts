import Bookmark from 'app/types/Bookmark'

export const loadBookmarks = (): Bookmark[] => {
  const bookmarks = localStorage.getItem('bookmarks')
  if (bookmarks) {
    return JSON.parse(bookmarks)
  }
  return []
}

export const loadBookmarkIds = (): string[] => {
  const bookmarkIds = localStorage.getItem('bookmarkIds')
  if (bookmarkIds) {
    return JSON.parse(bookmarkIds)
  }
  return []
}
