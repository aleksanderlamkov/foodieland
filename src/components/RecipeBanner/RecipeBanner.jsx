import './RecipeBanner.scss'

export default (props) => {
  const {
    title,
    site,
    bgImgSrc,
  } = props

  return (
    <a
      className="recipe-banner"
      href="/"
      style={{ '--recipeBannerImg': `url('${bgImgSrc}')` }}
    >
      <img
        className="recipe-banner__title-image"
        src="/images/title.svg"
        alt={title}
        width={172}
        height={60}
        loading="lazy"
      />
      <div className="recipe-banner__site">{site}</div>
    </a>
  )
}
