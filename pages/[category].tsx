import { useRouter } from "next/router"

export default function() {
  const router = useRouter()
  const { category } = router.query;
  return (
    <div>{category}</div>
  )
}
