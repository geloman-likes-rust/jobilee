import Link from "next/link"
import style from "./style.module.css"
import { CaretRight } from "phosphor-react"

const categories: Array<string> = [
  "Best Sellers", "New Products", "Family Meals", "Breakfast",
  "Chickenjoy", "Burgers", "Jolly Spaghetti", "Burger Steak",
  "Super Meals", "Chicken Sandwich", "Jolly Hotdog & Pies", "Palabok",
  "Fries & Sides", "Desserts", "Beverages", "Jolly Kiddie Meal"
]

const params: Array<string> = [
  "best-sellers", "new-products", "family-meals", "breakfast",
  "chickenjoy", "burgers", "Jolly Spaghetti", "burger-steak",
  "super-meals", "chicken-sandwich", "jolly-hotdog-pies", "palabok",
  "fries-sides", "desserts", "Beverages", "jolly-kiddie-meal"
]

export default function Sidebar({ activeLink }: any) {
  console.log(activeLink)
  return (
    <ul className={style.sidebar}>
      {categories.map((category, index) => {
        let isActive = params.indexOf(activeLink) === index
        console.log(index)
        return (
          <Link href={params[index]}>
            <li className={`${style.category} ${isActive ? style.active : '' }`}>
              <span>{category}</span>
              <CaretRight weight="bold" size={32} />
            </li>
          </Link>
        )
      })}
    </ul>
  )
}

