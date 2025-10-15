import './HeroCard.scss'
import clsx from 'clsx'
import Icon from '@/components/Icon'
import { Image } from 'minista'
import AuthorCard from '@/components/AuthorCard'
import Button from '@/components/Button'
import Tags from '@/components/Tags'

export default (props) => {
  const {
    className,
    category,
    title,
    TitleTag = 'h2',
    description,
    tags = [],
    author,
    imgSrc,
  } = props

  return (
    <div
      className={clsx('hero-card', className)}
    >
      <div className="hero-card__body">
        <header className="hero-card__category">
          <Image
            className="hero-card__category-image"
            src={category.imgSrc}
          />
          <span>{category.label}</span>
        </header>
        <TitleTag className="hero-card__title">
          {title}
        </TitleTag>
        <div className="hero-card__description">
          <p>{description}</p>
        </div>
        <Tags
          className="hero-card__tags"
          type="rounded"
          items={tags}
        />
        <footer className="hero-card__footer">
          <AuthorCard
            className="hero-card__author"
            {...author}
          />
          <Button
            className="hero-card__button"
            href="/"
          >
            <span>View Recipes</span>
            <Icon name="play" hasFill />
          </Button>
        </footer>
        <img
          className="hero-card__badge"
          src="/images/badge.svg"
          alt="Handpicked recipies"
          width={150}
          height={150}
          loading="lazy"
        />
      </div>
      <Image
        className="hero-card__image"
        src={imgSrc}
        width={660}
        height={640}
      />
    </div>
  )
}