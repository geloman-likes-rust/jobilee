import style from "./style.module.css"

type Props = {
  item: {
    id: number
    category: string
    image: string
    param?: string
  }
}

export default function Card({ item }: Props) {
  return (
    <>
      <div className={style.card}>
        <div className={style.image}>
          <img draggable={false} src={item.image} alt={item.category} />
        </div>
        <h3 className={style.category}>{item.category}</h3>
        <div className={style.select}>select</div>
      </div>
    </>
  )
}
