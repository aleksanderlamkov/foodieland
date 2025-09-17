import './Grid.scss'
import clsx from 'clsx'

export default (props) => {
  const {
    className,
    children,
    columns = 1,
  } = props

  return (
    <ul
      className={clsx(`grid grid--${columns}`, className)}
    >
      {children.map((child, index) => (
        <li
          className="grid__item"
          key={index}
        >
          {child}
        </li>
      ))}
    </ul>
  )
}