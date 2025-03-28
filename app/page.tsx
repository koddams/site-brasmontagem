'use client';
import { motion } from 'framer-motion';
import Header from '@/components/nav-header';
import { services } from '@/components/services';
import Image from 'next/image';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt
} from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import CoatingDiagram from '@/components/coatingdiagram';
import ProjectCard from '@/components/project-card';
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />

      {/* Seção Hero  */}
      <section id="hero" className="relative pt-32 md:pt-40 pb-32 md:pb-56 overflow-hidden" style={{ paddingTop: '7rem' }}>"
        <div className="absolute inset-0 bg-white to-transparent" />
        

        <div className="container relative z-10 px-4 mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            <span className="block mb-4 text-balance">BRASMONTAGEM</span>
            <span className="block mt-4 text-2xl md:text-3xl lg:text-4xl font-light text-balance">
              LAMINAÇÃO EM FIBRA DE VIDRO
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-3xl mx-auto mb-12 text-lg md:text-xl lg:text-2xl leading-relaxed text-balance"
          >
            Proteção anticorrosiva especializada para equipamentos industriais
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col justify-center gap-4 md:flex-row"
          >
            <a 
              href="#servicos" 
              className="px-8 py-4 text-lg transition-all duration-300 rounded-full shadow-xl bg-accent hover:bg-accent/90 text-white md:text-xl hover:shadow-2xl"
              aria-label="Ver nossos serviços"
            >
              Nossos Serviços
            </a>
            <a 
              href="#contato" 
              className="px-8 py-4 text-lg transition-all duration-300 border-2 rounded-full border-accent hover:border-accent/80 text-accent hover:text-accent/80 md:text-xl"
              aria-label="Solicitar orçamento"
            >
              Solicitar Orçamento
            </a>
          </motion.div>
        </div>
      </section>

      {/* Seção Serviços - Especializações Técnicas */}
<section id="servicos" className="w-full py-20 bg-gradient-to-br from-blue-900 to-blue-800">
  <div className="container px-4 mx-auto">
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      className="mb-16 text-4xl font-bold text-center text-white md:text-5xl lg:text-6xl font-title"
    >
      Serviços Especializados
      <span className="block mt-4 text-3xl font-normal text-white md:text-4xl">
        Revestimentos em Fibra de Vidro
      </span>
    </motion.h2>

    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 max-w-6xl mx-auto"> 
      {services.map((service, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -10, scale: 1.02 }}
          viewport={{ once: true, amount: 0.5 }}
          className="group p-6 md:p-8 transition-all duration-300 bg-white/5 rounded-3xl border-2 border-white/10 hover:border-accent/20 text-center"
        >
          <div className="mb-8 text-accent flex justify-center"> 
            <service.icon className="w-16 h-16" />
          </div>
          
          <h3 className="mb-6 text-3xl font-bold bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
            {service.title}
          </h3>
          
          <p className="text-xl leading-relaxed text-gray-200 px-4"> 
            {service.description}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* Seção Projetos - Portfólio Completo */}
      <section id="projetos" className="py-12 lg:py-20 bg-gradient-to-br from-blue-900/95 to-blue-800">
        <div className="container px-4 mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-6xl font-bold text-white md:text-5xl font-title">
              Serviços Executados
            </h2>
            <p className="max-w-2xl mx-auto text-2xl text-accent">
              Soluções especializadas em combate à corrosão para diversos segmentos industriais
            </p>
          </motion.div>

          <div className="space-y-20">
            {/* Projeto 1 - Dique de Bombas */}
            <ProjectCard
              title="Dique de bombas descarga de Soda"
              description="Serviços de proteção anticorrosiva"
              layout="grid3"
              images={[
                {
                  src: "/images/lixamento-dique.webp",
                  alt: "Preparação superficial",
                  caption: "Remoção do revestimento antigo, descontaminação e lixamento mecânico da superfície"
                },
                {
                  src: "/images/revestimento-concreto.webp",
                  alt: "Aplicação de resina",
                  caption: "Aplicação do revestimento com resina éster vinílica reforçada com fibra de vidro (PRFV)"
                },
                {
                  src: "/images/dique-desc-soda.webp",
                  alt: "Resultado final",
                  caption: "Após o revestimento com PRFV, aplicação de duas demãos de tinta Resicor 300 na cor lilás"
                }
              ]}
            />

            {/* Projeto 2 - Tanques de Armazenamento */}
            <ProjectCard
              title="Tanque de Fluossilícico"
              description="Recuperação mecânica do Tanque"
              layout="custom-large"
              images={[
                {
                  src: "/images/guindaste.webp",
                  alt: "Tanque PRFV",
                  caption: "Tanque PRFV Diâmetro 3.800 mm e comprimento 13.800 mm",
                  size: 'large'
                },
                {
                  src: "/images/tanque-icado3.webp",
                  alt: "Reforço estrutural",
                  caption: "Serviços de Reliners com reforço mecânico externo"
                },
                {
                  src: "/images/tanque-dn-reliner.webp",
                  alt: "Detalhe construtivo",
                  caption: "Inspeção e liberação dos serviços de reliners do tanque de PRFV"
                }
              ]}
            />

            {/* Projeto 3 - Recuperação de Tanques */}
            <ProjectCard
              title="Recuperação de Tanques de Polímeros"
              description="Serviço realizado na ETA Guarau - SABESP"
              layout="grid4"
              images={[
                {
                  src: "/images/tanque-branco.webp",
                  alt: "Estado inicial dos tanques",
                  caption: "Lixamento mecânico da superfície"
                },
                {
                  src: "/images/tanque-branco2.webp",
                  alt: "Preparação da superfície",
                  caption: "Descontaminação da superfície interna dos tanques para preparação do revestimento"
                },
                {
                  src: "/images/tanque-branco3.webp",
                  alt: "Aplicação de primer",
                  caption: "Aplicação do primer fenólico"
                },
                {
                  src: "/images/tanque-branco4.webp",
                  alt: "Resultado final",
                  caption: "Execução de duas demãos de tinta fenólica, recomendada para uso humano à 120°C"
                }
              ]}
            />

            {/* Projeto 4 - Obra SABESP */}
            <ProjectCard
              title="SABESP - Água de Reuso - Obra 2016"
              description="ETA - ABV SANTO AMARO"
              layout="grid2"
              images={[
                {
                  src: "/images/tubulacoes-emendas-prfv.webp",
                  alt: "Montagem de tubulação",
                  caption: "Montagem de tubulações de 14” a 36”"
                },
                {
                  src: "/images/tubulacoes-prfv.webp",
                  alt: "Detalhe das emendas",
                  caption: "Execução de emendas em PRFV"
                }
              ]}
            />
            {/* Projeto 5 - Tanques Rodoviários */}
            <ProjectCard
              title="Tanques Rodoviários"
              description="Produtos compatíveis ao revestimento com Fibra de Vidro: HCL, Hipoclorito de Sódio, PAC e outros"
              layout="grid3"
              images={[
                {
                  src: "/images/tanque-rodoviario3.webp",
                  alt: "Montagem de tubulação",
                  caption: "Serviços de Reliners"
                },
                {
                  src: "/images/tanque-rodoviario2.webp",
                  alt: "Detalhe das emendas",
                  caption: "Remoção do revestimento antigo"
                },
                {
                  src: "/images/tanque-rodoviario.webp",
                  alt: "Detalhe das emendas",
                  caption: "Aplicação de novo revestimento com Resina éster vinílica reforçada com fibra de vidro."
                }
              ]}
            />
          </div>
        </div>
      </section>

      {/* Seção Técnica - Diagrama de Revestimento */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container px-4 mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 text-3xl font-bold text-center text-black md:text-4xl font-title"
          >
            Aplicação do Revestimento
            <span className="block mt-2 text-xl font-normal text-black md:text-2xl">
              Croqui Explicativo:
            </span>
          </motion.h2>

          <div className="max-w-5xl mx-auto p-6 bg-blue-500/40 rounded-xl shadow-2xl backdrop-blur-xs">
            <CoatingDiagram />
          </div>

          <motion.div 
            className="container px-4 mx-auto mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="p-8 bg-blue-500/40 rounded-xl border border-white/20">
              <h3 className="mb-6 text-3xl font-bold text-center text-black">
                Normas Internacionais Aplicadas
              </h3>
              <ul className="space-y-4 text-center text-black text-xl">
                <li className="flex items-center justify-center gap-2">
                  <span className="text-accent">◆</span>
                  ASTM D 2584 - Contagem de Camadas
                </li>
                <li className="flex items-center justify-center gap-2">
                  <span className="text-accent">◆</span>
                  ASTM 2563 D - Inspeção Visual
                </li>
                <li className="flex items-center justify-center gap-2">
                  <span className="text-accent">◆</span>
                  ASTM D 2583 - Método Dureza Barcol
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

            {/* Sobre nós */}

            <section className="py-20 bg-gradient-to-br from-blue-900/95 to-blue-800">
  <div className="container px-4 mx-auto">
    <div className="grid items-stretch gap-16 lg:grid-cols-2 max-w-7xl mx-auto">
      
      {/* Coluna da Imagem */}
      <motion.div 
        className="relative rounded-2xl overflow-hidden"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ 
          opacity: 1, 
          x: 0, 
          transition: { 
            duration: 0.6, 
            ease: "easeOut" 
          }
        }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="relative h-full">
                  <Image
                    src="/images/torre-funcionarios.webp"
                    alt="Equipe técnica da Brasmontagem"
                    fill
                    quality={85}
                    className="object-cover object-bottom"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent" />
                </div>
              </motion.div>

      {/* Coluna do Texto */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" }}}
        className="space-y-8 text-white text-center lg:text-left"
      >
        <h2 className="text-3xl font-bold md:text-5xl font-title">
          Sobre Nós
          <span className="block mt-2 text-accent text-2xl">
            Nossa História e Valores
          </span>
        </h2>

        <div className="space-y-6 max-w-3xl mx-auto">
          {/* Quem Somos */}
          <div>
            <h3 className="mb-3 text-xl font-bold text-accent">Quem Somos</h3>
            <p className="leading-relaxed text-lg px-4 lg:px-0">
              Nossa empresa possui muitos anos de experiência no setor anticorrosivo, proporcionando os melhores
              resultados para nossos clientes. Realizamos laminações com integração de equipes qualificadas através
              de um rigoroso Sistema de Segurança do Trabalho, com carga horária dedicada a treinamentos ministrados
              por engenheiros certificados, seguindo as Normas Regulamentadoras 06, 12, 18, 33 e 35.
            </p>
          </div>

          {/* Missão */}
          <div>
            <h3 className="mb-3 text-xl font-bold text-accent">Missão</h3>
            <p className="leading-relaxed text-lg px-4 lg:px-0">
              Zelar pela qualidade de nossos serviços através da ética, comprometimento, integridade e parcerias
              duradouras com nossos clientes.
            </p>
          </div>

          {/* Visão */}
          <div>
            <h3 className="mb-3 text-xl font-bold text-accent">Visão</h3>
            <p className="leading-relaxed text-lg px-4 lg:px-0">
              Entender e atender com excelência as necessidades em serviços anticorrosivos, tornando-nos referência
              nacional no segmento.
            </p>
          </div>

          {/* Compromisso Ambiental */}
          <div>
            <h3 className="mb-3 text-xl font-bold text-accent">Compromisso Ambiental</h3>
            <p className="leading-relaxed text-lg px-4 lg:px-0">
              Atuamos com responsabilidade no descarte de resíduos sólidos removidos de equipamentos de fibra de vidro,
              utilizando empresas parceiras credenciadas pela CETESB para destinação final em aterros apropriados,
              garantindo a proteção do meio ambiente.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</section>

      {/* Seção de Contato - Canal Comercial */}
      <section id="contato" className="py-20 px-5 bg-white">
        <div className="container px-4 mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="mb-12 text-4xl font-bold text-center text-black md:text-3xl font-title">
              Faça um Orçamento
              <span className="block mt-4 text-2xl text-accent">Entre em Contato</span>
            </h2>

            <div className="grid gap-12 p-8 bg-blue-500/40 rounded-xl border border-white/10 md:grid-cols-2 md:p-12">
              <div className="space-y-8">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="mt-1.5 text-accent">
                    <FaEnvelope className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-black">E-mail</h3>
                    <a href="mailto:nely.vendas@brasmontagem.com.br" className="text-sm md:text-base hover:text-accent transition-colors whitespace-nowrap">
                      nely.vendas@brasmontagem.com.br
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 md:gap-4">
                  <div className="mt-1.5 text-accent">
                    <FaPhone className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-black">Telefone</h3>
                    <a href="tel:+5511971898699" className="text-lg transition-colors text-black hover:text-accent">
                      (11) 97189-8699
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 md:gap-4">
                  <div className="mt-1.5 text-accent">
                    <FaMapMarkerAlt className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-black">Endereço</h3>
                    <p className="text-lg leading-relaxed text-black-300">
                      Estr. Granja Amazonas, nº 265<br/>
                      Jd. Guatambu - Rod. Índio Tibiriçá Km 55,5<br/>
                      Palmeiras - Suzano - SP<br/>
                      CEP: 08635-710
                    </p>
                  </div>
                </div>
              </div>

              <div className="h-96 rounded-xl overflow-hidden border border-white/10 md:h-[400px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d710.7297382449974!2d-46.34312866365398!3d-23.664135401612892!3m2!1i1024!2i768!4f13.1!5e1!3m2!1spt-BR!2sbr!4v1741303032789!5m2!1spt-BR!2sbr"
                  className="w-full h-full"
                  loading="lazy"
                  allowFullScreen
                  title="Localização da Brasmontagem"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}