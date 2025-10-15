import './RecipeCard.scss'
import { Image } from 'minista'
import Tags from '@/components/Tags/Tags'
import clsx from 'clsx'
import Icon from '@/components/Icon'

export default (props) => {
  const {
    title,
    tags,
    imgSrc,
    isLiked,
  } = props

  const likeButtonTitle = isLiked ? 'Dislike' : 'Like'

  return (
    <article className="recipe-card">
      <a
        className="recipe-card__link"
        href="/"
      >
        <Image className="recipe-card__image" src={imgSrc} />
        <h3 className="recipe-card__title h4">{title}</h3>
        <Tags
          className="recipe-card__tags"
          items={tags}
        />
      </a>
      <button
        className={clsx(
          'recipe-card__button',
          isLiked && 'is-liked'
        )}
        type="button"
        aria-label={likeButtonTitle}
        title={likeButtonTitle}
      >
        <Icon name="heart" hasFill />
      </button>
    </article>
  )
}
