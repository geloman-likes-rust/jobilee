import Sidebar from "@/components/sidebar"
import { useRouter } from "next/router"
import style from "./style.module.css"

const params: Array<string> = [
  "best-sellers", "new-products", "family-meals", "breakfast",
  "chickenjoy", "burgers", "jolly-spaghetti", "burger-steak",
  "super-meals", "chicken-sandwich", "jolly-hotdog-pies", "palabok",
  "fries-sides", "desserts", "beverages", "jolly-kiddie-meal"
]

type Item = {
  id: number
  img: string
  description: string
  price: number
}

type Items = Array<Item>

type Props = {
  items: Items
}

export default function Category({ items }: Props) {
  const router = useRouter()
  const { category } = router.query;
  console.log(category)
  return (
    <div className={style.menu}>
      <span className={style.sidebar}>
        <Sidebar activeLink={category} />
      </span>
      <div className={style.grid}>
        {items.map((item: Item) => {
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
  )
}


async function getItems(category: string) : Promise<Items> {
  const response = await fetch(`https://api-jollibee-menu.vercel.app/menu/${category}`)
  const { data } = await response.json()
  return data
}

export async function getStaticPaths() {
  return {
    paths: params.map((param) => ({params: {category: param}})),
    fallback: false
  }
}

export async function getStaticProps({ params }: any) {
  const items: Items = await getItems(params.category)
  return {
    props: {
      items
    }
  }
}
