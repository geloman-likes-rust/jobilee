type Menu = {
  id: number
  category: string
  image: string
  param: string
}[]

export default async function getMenu(): Promise<Menu> {
  const response = await fetch("https://api-jollibee-menu.vercel.app/menu")
  const { data } = await response.json()
  return data
}
