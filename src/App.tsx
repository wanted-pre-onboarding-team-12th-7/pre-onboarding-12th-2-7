import PageRouter from './pages/PageRouter'

import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/base/GlobalStyles'
import { Theme } from './styles/base/DefaultTheme'
import { IssuesProvider } from './store/IssuesContext'

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
