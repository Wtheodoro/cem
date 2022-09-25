import Head from 'next/head';
import React from 'react';
import { Background, Button, Footer, Header, Hero } from 'src/stories/atoms';
import styles from 'styles/Home.module.scss';

export default function Home(): JSX.Element {
  return (
    <div className={styles.container}>
      <Head>
        <title>Clica e Multiplica</title>
        <link rel="icon" href="/easyicon-2.ico" />
      </Head>

      <main className="h-full">
        <Header />
        <Hero />

        {/* About */}

        <div className="px-4 md:px-52 py-16 text-center text-lg lg:font-medium">
          Somos uma social tech sem fins lucrativos que tem como propósito promover o
          desenvolvimento sustentável através da conexão entre{' '}
          <span className="font-bold">pessoas, microempreendores, ONGs e empresas {`<3`}</span>
          <br />
          <br />
          No <span className="font-bold">Clica & Multiplica Marketplace</span>, além de você poder
          comprar inúmeros produtos artesanais, deliciosos e de alta qualidade das nossas
          empreendedoras parceiras, você também pode ajudar a{' '}
          <span className="font-bold">transformar o mundo.</span> Incrível, né?
        </div>

        {/* Easy */}

        <div
          className="pt-24 pb-40  lg:px-52 px-4 md:px-10 "
          style={{ backgroundColor: '#FFF8F5' }}>
          <div className="text-4xl font-bold text-center text-red-600 mb-32">
            Veja como é fácil:
          </div>
          <div className="flex md:flex-row flex-col gap-32 text-center lg:w-full">
            <div>
              <img src="/easy-1.png" className="h-28 mb-14 mx-auto" />
              <div className="text-red-600">
                Compre de nossas <span className="font-bold">microempreendedoras</span> em nosso{' '}
                <span className="font-bold">Marketplace</span> e ajude a movimentar a economia entre
                os pequenos
              </div>
            </div>

            <div className="">
              <img src="/easy-2.png" className="h-28 flex-0 mb-14 mx-auto" />
              <div className="text-red-600">
                Parte do valor de sua compra será revertida para
                <span className="font-bold"> nossas ONGs parceiras</span>
              </div>
            </div>

            <div>
              <img src="/easy-3.png" className="h-28 flex-0 mb-14 mx-auto" />
              <div className="text-red-600">
                <span className="font-bold">Receba informações</span> sobre a ONG que você ajudou e
                conheça mais sobre nossos projetos em nossas redes sociais
              </div>
            </div>
          </div>
        </div>

        {/* Marketplace */}
        <div className="pt-24 pb-40">
          <div className="px-4 md:px-0 text-4xl font-bold text-center text-red-700 mb-32">
            Um marketplace recheado de amor para você
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-8 text-center px-4 md:px-0">
            <a
              href="https://produtos.clicaemultiplica.com/t/Alimentacao"
              className="w-full h-80 sm:flex-1 sm:h-60">
              <Background url="marketplace-1.png">
                <div className="h-full flex items-center justify-center">
                  <div className="text-4xl text-white">Alimentação</div>
                </div>
              </Background>
            </a>
            <a
              href="https://produtos.clicaemultiplica.com/t/artesanato-decoracao"
              className="w-full h-80 sm:flex-1 sm:h-60">
              <Background url="marketplace-2.png">
                <div className="h-full flex items-center justify-center">
                  <div className="text-4xl text-white">Artesanato e decoração</div>
                </div>
              </Background>
            </a>
            <a
              href="https://produtos.clicaemultiplica.com/t/cosmeticos"
              className="w-full h-80 sm:flex-1 sm:h-60">
              <Background url="marketplace-3.png">
                <div className="h-full flex items-center justify-center">
                  <div className="text-4xl text-white">Cosméticos</div>
                </div>
              </Background>
            </a>
            <a
              href="https://produtos.clicaemultiplica.com/t/Vestuario"
              className="w-full h-80 sm:flex-1 sm:h-60">
              <Background url="marketplace-4.png">
                <div className="h-full flex items-center justify-center">
                  <div className="text-4xl text-white">Vestuário</div>
                </div>
              </Background>
            </a>
          </div>
        </div>

        <div className="text-center">
          <Button id="buy-now-marketplace" size="xl">
            <a 
            href="https://wa.me/5511995611849?text=Olá.%20Venho%20do%20site%20e%20gostaria%20de
                  %20mais%20informações.%20Conheça%20nosso%20catálogo%20disponível%20aqui%20
                  https://wa.me/c/5511995611849%20"
            >
              Conheça mais
            </a>
          </Button>
        </div>

        <div className="text-center py-24 px-24 lg:font-medium">
          <div className="text-4xl font-bold mb-8">
            Nós trabalhamos para criar um futuro melhor para todas as gerações
          </div>
          <div className="text-2xl">
            Incentivamos nossas empreendedoras e parceiras a adotarem práticas que não agridam o
            meio ambiente e estejam alinhadas às práticas de ESG ("Environmental, social and
            governance" -Ambiental, Social e Governança em português), buscando garantir um futuro
            sustentável para todas as pessoas.
          </div>
        </div>

        <div style={{ backgroundColor: '#CAFCAC' }} className="p-10 md:p-20">
          <img src="meio-ambiente.png" className="mx-auto" />
        </div>

        <div
          className="pt-24 pb-40 md:px-52 text-white text-center flex flex-col md:flex-row md:gap-60 justify-center"
          style={{ backgroundColor: '#BB3341' }}>
          <div className="flex flex-col justify-between">
            <div className="mb-10 md:mb-16">
              <div className="text-8xl">+170</div>
              <div className="text-4xl">Consumidores</div>
            </div>

            <div className="mb-10 md:mb-0">
              <div className="text-8xl">32</div>
              <div className="text-4xl">Empreendedoras</div>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div className="mb-10 md:mb-16">
              <div className="text-8xl">+1800 </div>
              <div className="text-4xl">
                Pedidos realizados <br /> em nosso site
              </div>
            </div>
            <div>
              <div className="text-8xl">8</div>
              <div className="text-4xl">
                ONGs <br />
                parceiras
              </div>
            </div>
          </div>
        </div>

        {/* Empreendedores */}
        <div className="pt-24 pb-40 md:pb-0 lg:pb-40 px-4 md:px-0">
          <div className="text-4xl font-bold text-center text-red-600 mb-32">
            Compre das nossas empreendedoras
          </div>
          <div className="flex flex-row gap-4 md:gap-9 text-center mb-4 md:mb-9">
            <div className="flex-1 h-60 lg:h-h26rem">
              <Background url="emp-1.png">
                <div className="h-full flex flex-col items-center justify-center">
                  <div className="text-4xl text-white mb-12">Snut Granola</div>
                  <Button size="lg" id="compre-snut-granola" color="white">
                    <a 
                    href="https://wa.me/5511995611849?text=Olá.%20Venho%20do%20site%20e%20gostaria%20de
                          %20mais%20informações.%20Conheça%20nosso%20catálogo%20disponível%20aqui%20
                          https://wa.me/c/5511995611849%20"
                    >
                      Conheça mais
                    </a>
                  </Button>
                </div>
              </Background>
            </div>
            <div className="flex-1 h-60 lg:h-h26rem truncate">
              <Background url="emp-2.png">
                <div className="h-full flex flex-col items-center justify-center">
                  <div className="text-4xl text-white mb-12">Ynaê</div>
                  <Button size="lg" id="compre-ynae" color="white">
                    <a 
                      href="https://wa.me/5511995611849?text=Olá.%20Venho%20do%20site%20e%20gostaria%20de
                            %20mais%20informações.%20Conheça%20nosso%20catálogo%20disponível%20aqui%20
                            https://wa.me/c/5511995611849%20"
                    >
                      Conheça mais
                    </a>
                  </Button>
                </div>
              </Background>
            </div>
          </div>
          <div className="flex flex-row gap-4 md:gap-8 text-center">
            <div className="flex-1 h-60 lg:h-h26rem">
              <Background url="emp-3.png">
                <div className="h-full flex flex-col items-center justify-center">
                  <div className="text-4xl text-white md:mb-12">Delícias do Sul de Minas</div>
                  <Button size="lg" id="compre-delicias" color="white">
                    <a 
                      href="https://wa.me/5511995611849?text=Olá.%20Venho%20do%20site%20e%20gostaria%20de
                            %20mais%20informações.%20Conheça%20nosso%20catálogo%20disponível%20aqui%20
                            https://wa.me/c/5511995611849%20"
                    >
                      Conheça mais
                    </a>
                  </Button>
                </div>
              </Background>
            </div>
            <div className="flex-1 h-60 lg:h-h26rem">
              <Background url="emp-4.png">
                <div className="h-full flex flex-col items-center justify-center">
                  <div className="text-4xl text-white mb-12">Eró Geleias</div>
                  <Button size="lg" id="compre-ero-geleias" color="white">
                    <a 
                      href="https://wa.me/5511995611849?text=Olá.%20Venho%20do%20site%20e%20gostaria%20de
                            %20mais%20informações.%20Conheça%20nosso%20catálogo%20disponível%20aqui%20
                            https://wa.me/c/5511995611849%20"
                    >
                      Conheça mais
                    </a>
                  </Button>
                </div>
              </Background>
            </div>
          </div>
        </div>
        <div className="md:pt-24 lg:pt-0 lg:pb-40 md:px-52">
          <div className="text-4xl font-bold text-center text-red-600 mb-32 lg:mb-0">
            Conheça as nossas ONGs parceiras
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-4 md:gap-8">
          {[
            {
              name: 'ONG Panapaná',
              color: '#FA8152',
              link: 'https://www.instagram.com/ongpanapana/',
            },
            {
              name: 'Projeto Criança Feliz',
              color: '#9E56E2',
              link: 'https://www.instagram.com/projetocriancafelizjaguare/',
            },
            {
              name: 'ONG Casa Hacker',
              color: '#F7B4DE',
              link: 'https://www.instagram.com/casahacker/',
            },
            {
              name: 'Mutirão no bem',
              color: '#BB3341',
              link: 'https://www.instagram.com/mutiraonobem/',
            },
            {
              name: 'ONG Vidas',
              color: '#BB3341',
              link: 'https://www.instagram.com/ong.vidas/',
            },
            {
              name: 'ONG Nação Cidadã',
              color: '#F7B4DE',
              link: 'https://www.instagram.com/instnacaocidada/',
            },
            {
              name: 'Associação Austy',
              color: '#9E56E2',
              link: 'https://www.instagram.com/autsy/',
            },
            {
              name: 'Instituto Juntos',
              color: '#FA8152',
              link: 'https://www.instagram.com/institutojuntos/',
            },
          ].map((ong, index) => (
            <a
              key={index}
              href={ong.link}
              className="h-60 cursor-pointer"
              style={{ backgroundColor: ong.color }}>
              <div className="h-full flex flex-col items-center justify-center p-8 text-center">
                <div className="text-4xl text-white">{ong.name}</div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center my-24">
          <Button id="buy-now-marketplace" size="xl">
            <a 
              href="https://wa.me/5511995611849?text=Olá.%20Venho%20do%20site%20e%20gostaria%20de
                    %20mais%20informações.%20Conheça%20nosso%20catálogo%20disponível%20aqui%20
                    https://wa.me/c/5511995611849%20"
            >
              Conheça mais
            </a>
          </Button>
        </div>

        <Footer />
      </main>
    </div>
  );
}
