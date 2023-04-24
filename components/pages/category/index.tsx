import style from "./style.module.css"
import { useRouter } from "next/router"
import Sidebar from "../../sidebar"

type Props = {
  menu: {
    id: number
    category: string
    image: string
    param: string
  }[]
  items: {
    id: number
    img: string
    description: string
    price: number
  }[]
}

export default function Category({items, menu}: Props) {
  const router = useRouter()
  const { category } = router.query;
  return (
    <>
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
