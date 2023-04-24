import Card from "./card"
import style from "./style.module.css"
import Link from "next/link"

type Props = {
  menu: {
    id: number
    category: string
    image: string
    param: string
  }[]
}

export default function Home({menu}: Props) {
  return (
    <div className={style.home}>
      <ul className={style.grid}>
        {
          menu.map((item) => {
            return (
              <li className={style.item} key={item.category}>
                <Link draggable={false} href={item.param}>
                  <Card item={item} />
                </Link>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
