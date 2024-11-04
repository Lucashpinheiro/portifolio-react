import Sobre from './containers/About'
import Projetos from './containers/Projects'
import Sidebar from './containers/Sidebar'
import EstiloGlobal, { Container } from './styles'
import { ThemeProvider } from 'styled-components'
import temaLigth from './themes/ligth'
import temaDark from './themes/dark'
import { useState } from 'react'

function App() {
  const [usaTemaDark, setUsaTemaDark] = useState(false)

  function trocaTema() {
    setUsaTemaDark(!usaTemaDark)
  }

  return (
    <ThemeProvider theme={usaTemaDark ? temaDark : temaLigth}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
