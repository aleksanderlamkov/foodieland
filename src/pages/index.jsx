import Hero from '@/sections/Hero'
import Categories from '@/sections/Categories'
import Recipes from '@/sections/Recipes'

export const metadata = {
  title: 'Home',
}

export default () => {
  return (
    <>
      <Hero />
      <Categories />
      <Recipes />
    </>
  )
}
