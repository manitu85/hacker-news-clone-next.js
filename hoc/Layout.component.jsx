import Head from 'next/head'
import Navigation from '@/components/Navigation.component'
import ReactTyped from 'react-typed'
import { TailwindContainer, Footer } from 'hoc/Layout.styles'


const Layout = ({ children, title, description }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
    <Navigation />
    <TailwindContainer>
      { children }
    </TailwindContainer>
    <Footer><p> Copyright&copy;{new Date().getFullYear()}{' '}
      <ReactTyped
          loop
          showCursor
          typeSpeed={90}
          backSpeed={70}
          strings={["Hacker News Clone Next.js SSR/PWA", "by Alex Burke"]}
          smartBackspace
          shuffle={false}
          backDelay={1000}
          fadeOut={false}
          fadeOutDelay={100}
          loopCount={0}
          cursorChar="_"
        />
      </p></Footer>
  </>
)


export default Layout



 