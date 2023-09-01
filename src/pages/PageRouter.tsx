import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ErrorPage from './ErrorPage'
import IssueDetailPage from './IssueDetailPage'
import IssuesPage from './IssuesPage'
import Layout from '../components/Layout/Layout'
import ServerErrorPage from '../pages/ServerErrorPage'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<IssuesPage />} />
          <Route element={<IssueDetailPage />} path="/issue/:number" />
        </Route>
        <Route element={<ServerErrorPage />} path="/servererror" />
        <Route element={<ErrorPage />} path="*" />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
