
import { use } from 'react'
import { PlaceContext } from '../Context'

export default function usePlace() {
    return use(PlaceContext)
}
