import { useState, useEffect } from "react"

export default function usePageScroll() {
  const [_, setPageOffsetY] = useState(0)
  const [isScrollingDown, setIsScrollingDown] = useState(false)
  useEffect(() => {
    document.onscroll = () => {
      setPageOffsetY((prevPageOffsetY) => {
        setIsScrollingDown(window.scrollY > prevPageOffsetY)
        return window.scrollY
      })
    }
  }, [])
  return isScrollingDown
}
