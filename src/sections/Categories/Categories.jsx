import Section from '@/layouts/Section'
import Grid from '@/components/Grid'
import CategoryCard from '@/components/CategoryCard'

export default () => {
  const categories = [
    {
      title: 'Breakfast',
      imgSrc: '/src/assets/images/categories/breakfast.png',
      gradient: 'linear-gradient(180deg, rgba(112, 130, 70, 0.00) 0%, rgba(112, 130, 70, 0.10) 100%)',
    },
    {
      title: 'Vegan',
      imgSrc: '/src/assets/images/categories/vegan.png',
      gradient: 'linear-gradient(180deg, rgba(108, 198, 63, 0.00) 0%, rgba(108, 198, 63, 0.10) 100%)',
    },
    {
      title: 'Meat',
      imgSrc: '/src/assets/images/categories/meat.png',
      gradient: 'linear-gradient(180deg, rgba(204, 38, 27, 0.00) 0%, rgba(204, 38, 27, 0.10) 100%)',
    },
    {
      title: 'Dessert',
      imgSrc: '/src/assets/images/categories/dessert.png',
      gradient: 'linear-gradient(180deg, rgba(240, 158, 0, 0.00) 0%, rgba(240, 158, 0, 0.10) 100%)',
    },
    {
      title: 'Lunch',
      imgSrc: '/src/assets/images/categories/lunch.png',
      gradient: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.05) 100%)',
    },
    {
      title: 'Chocolate',
      imgSrc: '/src/assets/images/categories/chocolate.png',
      gradient: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.05) 100%)',
    },
  ]

  return (
    <Section
      title="Categories"
      titleId="categories"
      linkLabel="View All Categories"
    >
      <Grid columns={6}>
        {categories.map((category, index) => (
          <CategoryCard {...category} key={index} />
        ))}
      </Grid>
    </Section>
  )
}