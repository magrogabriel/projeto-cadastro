import Botao from "../components/Botao";
import BotoesNav from "../components/BotoesNav";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import useClientes from "../hooks/useClientes";

export default function Home() {

  const { cliente,
    clientes,
    novoCliente,
    salvarCliente,
    selecionarCliente,
    excluirCliente,
    tabelaVisivel,
    exibirTabela
   } = useClientes()

  return (
    <>
      <div className="flex flex-col overflow-y-auto h-screen">
        <div className="flex justify-center items-center mt-20">
          <BotoesNav classNameInicio="text-white bg-main-blue"></BotoesNav>
        </div>
        <div className={`
      flex justify-center items-center h-screen
      text-white
      `}>
          <Layout className="overflow-x-auto" titulo="Cadastro Simples">
            {tabelaVisivel ? (
              <>
                <div className="flex justify-end">
                  <Botao
                    className="mb-4 bg-[#3f99f8] hover:bg-[#3b82f6] hover:shadow-[inset_-2px_-3px_13px_rgba(0,0,0,0.1)] transition duration-150 ease-in-out"
                    onClick={novoCliente}>
                    Novo Cliente
                  </Botao>
                </div>
                <Tabela clientes={clientes} clienteSelecionado={selecionarCliente} clienteExcluido={excluirCliente} />
              </>
            ) : (
              <Formulario cliente={cliente} clienteMudou={salvarCliente} cancelado={exibirTabela} />
            )}
          </Layout>
        </div>
      </div>
    </>
  )
}
