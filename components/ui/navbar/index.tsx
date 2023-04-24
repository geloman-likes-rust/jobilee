import Link from "next/link"
import style from "./style.module.css"
import { House } from "phosphor-react"
import usePageScroll from "@/hooks/usePageScroll"
export default function Navbar() {
  const isScrollingDown = usePageScroll()
  return (
    <div className={`${style.navbar} ${isScrollingDown ? style.hide : ""}`}>
      <ul className={style.navlinks}>
        <Link href="/">
          <li className={style.navlink}>
              <span className={style.homelink}>Home</span>
              <House weight="fill" size={32} />
          </li>
        </Link>
      </ul>
    </div>
  )
}
