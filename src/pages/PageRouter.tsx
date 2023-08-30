import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from '../components/Layout/Layout'
import IssuesPage from './IssuesPage'
import IssueDetailPage from './IssueDetailPage'
import ErrorPage from './ErrorPage'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<IssuesPage />} />
          <Route element={<IssueDetailPage />} path="/issue/:number" />
        </Route>
        <Route element={<ErrorPage />} path="*" />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
