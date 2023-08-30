import { IssuesProvider } from './pages/IssuesPage'
import PageRouter from './pages/PageRouter'

function App() {
  return (
    <div>
      <IssuesProvider>
        <PageRouter />
      </IssuesProvider>
    </div>
  )
}

export default App
