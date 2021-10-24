import { Home } from './pages'
import { PageLayout } from './layout'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <PageLayout>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/:id">
            ID PATH
          </Route>
        </Switch>
      </Router>
    </PageLayout>
  )
}

export default App
