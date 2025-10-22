import './InstagramView.scss'
import Section from '@/layouts/Section'
import Grid from '@/components/Grid'
import { Image } from 'minista'
import Button from '@/components/Button'
import Icon from '@/components/Icon'

export default () => {
  return (
    <Section
      className="instagram-view"
      title="Check out @foodieland on Instagram"
      titleId="instagram-view"
      description="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim "
      isHeaderVertical
    >
      <div className="instagram-view__body">
        <Grid columns={4}>
          {Array.from({ length: 4 }, (_, index) => (
            <Image src="/src/assets/images/instagram-post.png" key={index} />
          ))}
        </Grid>
        <Button href="/">
          Visit Our Instagram
          <Icon name="instagram" hasFill />
        </Button>
      </div>
    </Section>
  )
}