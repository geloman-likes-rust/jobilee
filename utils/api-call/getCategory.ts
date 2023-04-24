type Items = {
  id: number
  img: string
  description: string
  price: number
}[]

export default async function getCategory(category: string): Promise<Items> {
  const response = await fetch(`https://api-jollibee-menu.vercel.app/menu/${category}`)
  const { data } = await response.json()
  return data
}
