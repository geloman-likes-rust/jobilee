import Category from "@/pages/[category]"
import { useEffect, useState } from "react"
import style from "./style.module.css"
import Link from "next/link"

type Category = {
  id: number
  category: string
  image: string
  param: string
}

type Props = {
  activeLink: string
}

async function getCategories() {
  const response = await fetch("https://api-jollibee-menu.vercel.app/menu")
  const { data } = await response.json()
  return data
}

export default function Carousel({activeLink}: Props) {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    (async function() {
      const response = await getCategories()
      setCategories(response)
    })()
  }, [])
  return (
    <div className={style.carousel}>
      <ul className={style.track}>
        {
          categories?.map((category: Category) => {
            return (
              <li className={`${style.item} ${activeLink === category.param ? style.active : ""}`} key={category.param}>
                <Link href={category.param}>
                  <div className={style.content}>
                    <div className={style.image}>
                      <img draggable={false} src={category.image} alt={category.category} />
                    </div>
                    <p className={style.category}>{category.category}</p>
                  </div>
                </Link>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
