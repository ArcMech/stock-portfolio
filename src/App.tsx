import { useState } from 'react'
import { Home, Details } from './pages'
import { PageLayout } from './layout'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { CompanyType } from './types'

const App = () => {
  const [portfolios, setPortfolios] = useState<CompanyType[]>([])
  return (
    <PageLayout>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home portfolios={portfolios} setPortfolios={setPortfolios} />
          </Route>
          <Route exact path="/:id">
            <Details />
          </Route>
        </Switch>
      </Router>
    </PageLayout>
  )
}

export default App
