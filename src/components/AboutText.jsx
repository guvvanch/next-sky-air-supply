import React from 'react'
import { Container } from '@/components/Container'
import { useRouter } from 'next/router'

const AboutText = () => {
  const [isAboutUsPage, setIsAboutUsPage] = React.useState(false)
  const location = useRouter()
  React.useEffect(() => {
    if (location.pathname === '/about-us') {
      setIsAboutUsPage(true)
    } else {
      setIsAboutUsPage(false)
    }
  }, [location])
  const whoWeAreText =
    'We are a team of talented professionals who serve aviation companies around the world. Our clients do not thinkof us as vendors but as partners throughout their journey. We are privileged to work with many great organizations to help their business. Join them and become partner with us.'
  const aboutOurCompanyText =
    'We are specialized in the repair and overhaul of Aircraft Accessories and are very encouraged to provide our customers with their needs. All of our customers are valued customers and we are committed to offer you complete service of Aircraft Accessories at a fast rate and competitive price. Our highly trained and experienced staff will provide high quality service such as insuring that the components we provide are traceable and certified to the standards that our customers require.'
  return (
    <section
      id="about-text"
      aria-label="Features for simplifying everyday business tasks"
      className="pt-20 pb-14 sm:pb-20 sm:pt-20 lg:pb-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            {isAboutUsPage ? 'About Our Company' : 'Who We Are'}
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            {isAboutUsPage ? aboutOurCompanyText : whoWeAreText}
          </p>
        </div>
      </Container>
    </section>
  )
}

export default AboutText
