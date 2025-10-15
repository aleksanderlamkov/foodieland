import './CategoryCard.scss'
import { Image } from 'minista'

export default (props) => {
  const {
    title,
    imgSrc,
    color,
  } = props

  return (
    <article className="category-card">
      <div
        className="category-card__body"
        style={{ '--categoryCardColor': color }}
      >
        <div
          className="category-card__image-wrapper"
          style={{ '--catergodyCardImage': `url('${imgSrc}')` }}
        >
          <Image className="category-card__image" src={imgSrc} />
        </div>
        <h3 className="category-card__title h6">{title}</h3>
      </div>
    </article>
  )
}
