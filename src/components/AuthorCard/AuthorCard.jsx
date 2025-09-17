import './AuthorCard.scss'
import clsx from 'clsx'
import {Image} from 'minista'

export default (props) => {
  const {
    className,
    imgSrc,
    name,
    date,
  } = props

  return (
    <div
      className={clsx('author-card', className)}
    >
      <Image
        className="author-card__image"
        src={imgSrc}
      />
      <div className="author-card__body">
        <h3 className="author-card__name">{name}</h3>
        <time
          className="author-card__date"
          dateTime={date.dateTime}
        >
          {date.label}
        </time>
      </div>
    </div>
  )
}