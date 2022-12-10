import { atom } from 'jotai'

const sortByAtom = atom('newest')

export const sortOptions = [
  { label: 'Newest', value: 'newest' },
  { label: 'Oldest', value: 'oldest' },
  { label: 'Most Popular', value: 'relevance' }
]

export default sortByAtom
