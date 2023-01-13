import BotoesNav from "../../components/BotoesNav";
import Layout from "../../components/Layout";
import { IconeLinkedin, IconeEmail } from "../../components/Icones"

export default function Home2() {
  return (
    <div className="flex flex-col overflow-y-auto h-screen">
      <div className="flex justify-center items-center mt-20">
        <BotoesNav classNameSobre="bg-main-blue text-white"></BotoesNav>
      </div>
      <div className={`
        flex justify-center items-center h-screen 
        text-white
        `}>
        <Layout titulo="Sobre o projeto" className="md:max-w-[50%] max-w-[75%] max-h-[50%]">
          <p>O projeto de cadastro foi um exercício do curso de React e Redux da Udemy onde foi possível praticar e aperfeiçoar minhas habilidades em programação web. A aplicação foi contruída baseada em <strong>ReactJs</strong>, mais especificamente com o framework <strong>NextJs</strong>, o que possibilitou sua implementação atráves de componentes funcionais. As linguagens de programação utilizadas foram <strong>JavaScript</strong> e <strong>TypeScript</strong>. Para sua costumização, utilizei o framework <strong>Tailwind CSS</strong>. Para trabalhar o SEO da aplicação, utilizei a biblioteca <strong>Next-Seo</strong>. Por fim, a integração com o banco de dados se deu por meio do <strong>Firebase</strong>.</p>
          <br></br>

        <p>Fale comigo:
        <br></br>
        <br></br>
        <a href="https://www.linkedin.com/in/gabriel-magro/">{IconeLinkedin} LinkedIn</a>
        <br></br>
        {IconeEmail} gabrielmagro.94@gmail.com
        </p>
        </Layout>
      </div>
    </div>
  )
}