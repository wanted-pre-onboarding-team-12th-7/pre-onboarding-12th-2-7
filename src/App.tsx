import { ThemeProvider } from 'styled-components'

import PageRouter from './pages/PageRouter'
import { IssuesProvider } from './store/IssuesContext'
import { Theme } from './styles/base/DefaultTheme'
import GlobalStyle from './styles/base/GlobalStyles'

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
