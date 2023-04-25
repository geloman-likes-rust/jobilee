import Head from 'next/head'
import Home from '@/components/pages/home'
import getMenu from '@/utils/api-call/getMenu'

type Props = {
  menu: {
    id: number
    category: string
    image: string
    param: string
  }[]
}

export default function HomePage({ menu } : Props) {
  return (
    <>
      <Head>
        <title>jobilee</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/fries.svg" />
      </Head>
      <Home menu={menu} />
    </>
  )
}

export async function getStaticProps() {
  const menu = await getMenu()
  return {
    props: {
      menu
    }
  }
}
