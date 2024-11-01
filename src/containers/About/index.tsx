import Titulo from '../../components/Title'
import Paragrafo from '../../components/Paragraph'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="secundario">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel voluptatem
      similique, hic, officia in dignissimos esse labore eius consectetur itaque
      totam, magni odit suscipit! Nihil vitae perspiciatis beatae quaerat!
      Saepe.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=Lucashpinheiro&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Lucashpinheiro&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
