import { toast } from 'react-hot-toast'

import Bookmark from 'app/components/icons/Bookmark.icon'
import BookmarkOutline from 'app/components/icons/BookmarkOutline.icon'
import CustomToast from 'app/components/shared/CustomToast.component'
import { keyframes } from 'app/stitches'

const toastIn = keyframes({
  from: {
    translate: '0 64px'
  },
  to: {
    translate: '0 0'
  }
})

const toastOut = keyframes({
  from: {
    translate: '0 0'
  },
  to: {
    translate: '0 64px'
  }
})

const showToast = (type: 'bookmark-add' | 'bookmark-remove') => {
  const Icon = type === 'bookmark-add' ? Bookmark : BookmarkOutline
  const title =
    type === 'bookmark-add' ? 'saved to bookmarks' : 'removed from bookmarks'
  const backgroundColor = type === 'bookmark-add' ? 'green' : 'red'

  toast.dismiss()
  toast.custom(
    (t) => (
      <CustomToast
        css={{
          animation: t.visible
            ? `0.35s cubic-bezier(0.21, 1.02, 0.73, 1) 0s 1 normal forwards running ${toastIn}`
            : `0.35s cubic-bezier(0.21, 1.02, 0.73, 1) 0s 1 normal forwards running ${toastOut}`
        }}
        onClick={() => {
          toast.dismiss(t.id)
        }}
        backgroundColor={backgroundColor}
        Icon={Icon}
        title={title}
      />
    ),
    {
      duration: 300000
    }
  )
}

export default showToast
