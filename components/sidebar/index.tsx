import Link from "next/link"
import style from "./style.module.css"
import { CaretRight } from "phosphor-react"

type Props = {
  menu: {
    id: number
    category: string
    image: string
    param: string
  }[]
  activeLink: string | any
}

export default function Sidebar({ activeLink, menu }: Props) {
  return (
    <ul className={style.sidebar}>
      {menu.map((item) => {
        return (
            <li className={`${style.category} ${activeLink === item.param ? style.active : '' }`}>
              <Link draggable={false} key={item.param} href={item.param}>
                <div className={style.image}>
                  <img src={item.image} alt={item.param}/>
                </div>
                <span>{item.category}</span>
                <CaretRight weight="bold" size={32} />
              </Link>
            </li>
        )
      })}
    </ul>
  )
}

