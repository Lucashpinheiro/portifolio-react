import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragraph'
import Titulo from '../../components/Title'
import { Descricacao, BotaoTema, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Lucas Pinheiro</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        Lucashpinheiro
      </Paragrafo>
      <Descricacao tipo="principal" fontSize={12}>
        Full Stack Java
      </Descricacao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
