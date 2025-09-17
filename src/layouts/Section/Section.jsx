import './Section.scss'
import clsx from 'clsx'
import Button from '@/components/Button'

export default (props) => {
  const {
    className,
    title,
    titleId,
    description,
    linkLabel,
    children,
  } = props

  return (
    <section
      className={clsx('section', 'container', className)}
      aria-labelledby={titleId}
    >
      <header className="section__header">
        <h2 className="section__title" id={titleId}>
          {title}
        </h2>
        {description && (
          <div className="section__description">
            <p>{description}</p>
          </div>
        )}
        {linkLabel && (
          <Button
            className="section__link"
            href="/"
            mode="secondary"
          >
            {linkLabel}
          </Button>
        )}
      </header>
      <div className="section__body">{children}</div>
    </section>
  )
}
