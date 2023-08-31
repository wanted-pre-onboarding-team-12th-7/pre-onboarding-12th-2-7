import { IssuesProvider } from './pages/IssuesPage'
import PageRouter from './pages/PageRouter'

import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/base/GlobalStyles'
import { Theme } from './styles/base/DefaultTheme'

function App() {
  return (
    <div>
      <ThemeProvider theme={Theme}>
        <IssuesProvider>
          <GlobalStyle />
          <PageRouter />
        </IssuesProvider>
      </ThemeProvider>
    </div>
  )
}

export default App
