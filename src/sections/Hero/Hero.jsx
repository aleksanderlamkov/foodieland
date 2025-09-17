import './Hero.scss'
import HeroCard from '@/components/HeroCard'

export default () => {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div
        className="hero__slider swiper"
        data-js-slider={JSON.stringify({
          spaceBetween: 40,
          slidesPerView: 'auto',
          centeredSlides: true,
          initialSlide: 1,
          effect: 'coverflow',
        })}
      >
        <ul className="hero__slider-list swiper-wrapper">
          <li className="hero__slider-item swiper-slide">
            <HeroCard
              category={{
                imgSrc: '/src/assets/images/scroll.png',
                label: 'Hot Recipes',
              }}
              title="Spicy delicious chicken wings"
              TitleTag="h1"
              description="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim "
              tags={[
                {
                  iconName: 'timer',
                  label: '30 Minutes',
                },
                {
                  iconName: 'fork-knife',
                  label: 'Chicken',
                },
              ]}
              author={{
                imgSrc: '/src/assets/images/man.jpg',
                name: 'John Smith',
                date: {
                  dateTime: '2022-03-15',
                  label: '15 March 2022',
                },
              }}
              imgSrc="/src/assets/images/chicken.jpg"
            />
          </li>
          <li className="hero__slider-item swiper-slide">
            <HeroCard
              category={{
                imgSrc: '/src/assets/images/scroll.png',
                label: 'Hot Recipes',
              }}
              title="Spicy delicious chicken wings"
              TitleTag="h1"
              description="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim "
              tags={[
                {
                  iconName: 'timer',
                  label: '30 Minutes',
                },
                {
                  iconName: 'fork-knife',
                  label: 'Chicken',
                },
              ]}
              author={{
                imgSrc: '/src/assets/images/man.jpg',
                name: 'John Smith',
                date: {
                  dateTime: '2022-03-15',
                  label: '15 March 2022',
                },
              }}
              imgSrc="/src/assets/images/chicken.jpg"
            />
          </li>
          <li className="hero__slider-item swiper-slide">
            <HeroCard
              category={{
                imgSrc: '/src/assets/images/scroll.png',
                label: 'Hot Recipes',
              }}
              title="Spicy delicious chicken wings"
              TitleTag="h1"
              description="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim "
              tags={[
                {
                  iconName: 'timer',
                  label: '30 Minutes',
                },
                {
                  iconName: 'fork-knife',
                  label: 'Chicken',
                },
              ]}
              author={{
                imgSrc: '/src/assets/images/man.jpg',
                name: 'John Smith',
                date: {
                  dateTime: '2022-03-15',
                  label: '15 March 2022',
                },
              }}
              imgSrc="/src/assets/images/chicken.jpg"
            />
          </li>
        </ul>
      </div>
    </section>
  )
}
