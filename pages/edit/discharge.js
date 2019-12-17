import { useRouter } from 'next/router'
import axios from 'axios'

export default () => {
  const router = useRouter()
  const { id } = router.query

  return(
    <div>
      {id}
    </div>
  )
}
