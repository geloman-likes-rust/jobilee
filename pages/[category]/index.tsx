import Head from "next/head"
import Sidebar from "@/components/sidebar"
import Navbar from "@/components/navbar"
import style from "./style.module.css"
import { useRouter } from "next/router"

type Items = {
  id: number
  img: string
  description: string
  price: number
}[]

type Menu = {
  id: number
  category: string
  image: string
  param: string
}[]

type Props = {
  items: Items
  menu: Menu
}

export default function Category({ items, menu }: Props) {
  const router = useRouter()
  const { category } = router.query;
  return (
    <>
      <Head>
        <title>{category}</title>
      </Head>
      <Navbar />
      <div className={style.menu}>
        <div className={style.sidebar}>
          <Sidebar menu={menu} activeLink={category} />
        </div>
        <div className={style.grid}>
          {items.map((item: any) => {
            return (
              <div key={`${item.id}--${item.description}`} className={style.card}>
                <div className={style.image}>
                  <img draggable={false} src={item.img} alt={`${item.id}--${item.description}`} />
                </div>
                <div className={style.details}>
                  <div className={style.description}>{item.description}</div>
                  <div className={style.price}>Starts at ₱ {`${item.price}.00`}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

async function getItems(category: string) : Promise<Items> {
  const response = await fetch(`https://api-jollibee-menu.vercel.app/menu/${category}`)
  const { data } = await response.json()
  return data
}

async function getMenu(): Promise<Menu> {
  const response = await fetch("https://api-jollibee-menu.vercel.app/menu")
  const { data } = await response.json()
  return data
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
    getItems(params.category)
  ])
  return {
    props: {
      items,
      menu
    }
  }
}
