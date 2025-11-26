import './Tags.scss'
import Icon from '@/components/Icon'
import clsx from 'clsx'

export default (props) => {
  const {
    className,
    items = [],
    /**
     * '' (default) | 'rounded'
     */
    type = '',
  } = props

  if (items.length === 0) {
    return null
  }

  return (
    <div
      className={clsx(
        'tags',
        type === 'rounded' && 'tags--rounded',
        className
      )}
    >
      <ul className="tags__list">
        {items.map(({ iconName, label }, index) => (
          <li className="tags__item" key={index}>
            <Icon name={iconName} hasFill />
            <span className="tags__label">{label}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
