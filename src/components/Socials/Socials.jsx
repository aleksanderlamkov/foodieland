import './Socials.scss'
import clsx from 'clsx'
import Icon from '@/components/Icon'

export default (props) => {
  const {
    className,
  } = props

  const links = [
    {
      label: 'Facebook',
      icon: 'facebook',
    },
    {
      label: 'Twitter',
      icon: 'twitter',
    },
    {
      label: 'Instagram',
      icon: 'instagram',
    },
  ]

  return (
    <div
      className={clsx('soc1als', className)}
    >
      <ul className="soc1als__list">
        {links.map(({ label, icon }) => (
          <li className="soc1als__item">
            <a
              className="soc1als__link"
              href="/"
              title={label}
            >
              <span className="visually-hidden">{label}</span>
              <Icon name={icon} hasFill />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}