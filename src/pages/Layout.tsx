import { Outlet } from 'react-router-dom'

import { PageWrapper } from '../components/PageWrapper'
import { Footer } from '../components/Footer'
import { HeaderContainer } from '../containers/HeaderContainer'

export const Layout = () => (
  <div>
    <HeaderContainer />
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
