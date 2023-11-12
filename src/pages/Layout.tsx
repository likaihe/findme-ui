import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
import { Footer } from './Footer'
import { PageWrapper } from '../components/PageWrapper'

export const Layout = () => (
  <div>
    <Header />
    <hr />

    {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
    <PageWrapper>
      <Outlet />
    </PageWrapper>
    <Footer />
  </div>
)
