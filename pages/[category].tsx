import Head from "next/head"
import Navbar from "@/components/ui/navbar"
import Category from "@/components/pages/category"
import { useRouter } from "next/router"
import getCategory from "@/utils/api-call/getCategory"
import getMenu from "@/utils/api-call/getMenu"

type Props = {
  items: {
    id: number
    img: string
    description: string
    price: number
  }[]
  menu: {
    id: number
    category: string
    image: string
    param: string
  }[]
}

export default function CategoryPage({ items, menu }: Props) {
  const router = useRouter()
  const { category } = router.query;
  return (
    <>
      <Head>
        <title>{category}</title>
        <link rel="icon" href="/fries.svg" />
      </Head>
      <Navbar />
      <Category items={items} menu={menu} />
    </>
  )
}

export async function getStaticPaths() {
  const menu = await getMenu()
  return {
    paths: menu.map((item) => ({params: {category: item.param}})),
    fallback: false
  }
}

export async function getStaticProps({ params }: any) {
  const [menu, items] = await Promise.all([
    getMenu(),
    getCategory(params.category)
  ])
  return {
    props: {
      items,
      menu
    }
  }
}
