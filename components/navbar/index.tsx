import Link from "next/link"
import style from "./style.module.css"
import { House } from "phosphor-react"
export default function Navbar() {
  return (
    <div className={style.navbar}>
      <ul className={style.navlinks}>
        <Link href="/">
          <li className={style.navlink}>
              <span className={style.homelink}>Home</span>
              <House weight="bold" size={48} />
          </li>
        </Link>
      </ul>
    </div>
  )
}
