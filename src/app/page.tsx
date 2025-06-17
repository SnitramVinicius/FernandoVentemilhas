import Navbar from "@/components/Navbar";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export const metadata = {
  title: "Fernando Ventemilhas - Advocacia",
  description: "Advogado especializado em Direito do Trabalho, Previdenciário, Civil e Bancário.",
};
export default function Home() {
  return (
    <>
<main className="min-h-screen bg-[#06092b] relative">
  <ScrollToTopButton />
  <Navbar />
 <div className="flex justify-center items-center w-full h-screen">
  <img src="/Logo2.png" alt="" className="md:w-3xl w-100"/>
</div>
</main>
    <section id="sobre" className="bg-white w-full min-h-[100dvh] flex flex-col items-center justify-center px-4 py-10">
  <h2 className="text-[#d4ab5e] text-xl mb-5 font-bold font-[Monteserrat]">
    SOBRE
  </h2>

  <div className="bg-[#06092b] w-full max-w-[900px] lg:max-w-[1000px] 2xl:max-w-[1200px] rounded-2xl flex flex-col md:flex-row justify-center items-center p-5 gap-5 transition-all duration-300">

    <div className="bg-white w-full md:w-[45%] aspect-[4/5] md:aspect-auto rounded-xl flex justify-center items-center overflow-hidden min-h-[300px]">
      <img
        src="/perfil2.jpg"
        alt="Perfil"
        className="w-full h-full object-cover"
      />
    </div>


    <div className="w-full md:w-[55%] flex flex-col justify-between text-justify px-2 md:px-5 pt-5 gap-5 text-white">
      <div>
        <h1 className="text-xl md:text-4xl text-[#bfa375] font-LIGHT font-[Raleway]">
        FERNANDO VENTEMILHAS
        </h1>
        <p className="text-sm md:text-base text-white font-[Monteserrat] ">OAB/MS nº 31.119</p>
        <div className="h-1 w-10/10 bg-[#c5ab7d] my-4" />
      <p className="text-sm md:text-base 2xl:text-xl leading-relaxed text-white first-letter:text-[#bfa375] first-letter:text-5xl 2xl:first-letter:text-7xl first-letter:float-left first-letter:leading-none first-letter:pr-2 first-letter:font-extralight font-[Raleway] first-letter:font-[Monteserrat]">
Eu sou Fernando Rodrigues Ventemilhas, advogado formado pelo Centro Universitário Anhanguera e pós-graduado em Direito do Trabalho pela Faculdade Gran.
Atuo com ética e comprometimento nas áreas de Direito do Trabalho, Direito do Consumidor e Direito Bancário.
<br /><br />
Minha trajetória inclui experiências nos escritórios Mascarenhas e Assessorias de Cobrança, Higor Utinói Advocacia e Joaquim Arnaldo Advogados, onde desenvolvi habilidades em organização, comunicação e atuação processual.
<br /><br />
Atualmente, atuo como advogado autônomo, oferecendo atendimento dedicado e soluções jurídicas eficazes para cada cliente.
Conte comigo para representar e orientar você em todas as etapas do seu processo.
</p>
      </div>

    </div>
  </div>
</section>

      <section
  id="areas"
  className="w-full min-h-screen flex flex-col items-center justify-center px-4 py-8 bg-[#06092b] relative"
>
  <img
  src="/background.jpg"
  alt="Perfil"
  className="absolute inset-0 w-full h-full object-cover object-center z-0 opacity-40"
/>
  <div className="z-10 relative w-full max-w-7xl flex flex-col items-center">
    <h1 className="text-[#bfa375] text-2xl mb-1 font-light font-[Monteserrat]">Áreas de</h1>
    <h1 className="text-white text-3xl mb-15 font-light font-[Raleway]">ATUAÇÃO</h1>

    <div className="flex flex-wrap justify-center gap-4 z-10">
    <div className="bg-white bg-opacity-90 p-6 rounded-xl shadow-md w-full sm:flex-1 sm:min-w-[280px] sm:max-w-[350px] h-auto flex flex-col items-center px-10">
    
    <img src="/contrato.png" alt="Ícone Direito Penal" className="h-9" />

    <p className="text-[10px] text-white mt-1 text-center">
      Ícone por <a href="https://www.freepik.com" className="underline hover:text-[#c69535]" target="_blank" rel="noopener noreferrer">Freepik</a> via <a href="https://www.flaticon.com/br/" className="underline hover:text-[#c69535]" target="_blank" rel="noopener noreferrer">Flaticon</a>
    </p>

    <h3 className="font-bold text-center mb-2 text-[#411417] font-[Raleway]">
      Direito do Trabalho
    </h3>

    <p className="text-center text-sm text-[#c69535] text-justify font-[Raleway]">
     Atuamos na representação de empregados e empregadores em todas as esferas da Justiça do Trabalho. Nossa atuação abrange reclamações trabalhistas, análise de vínculos empregatícios, rescisões contratuais, horas extras, adicional de periculosidade/insalubridade, assédio moral ou sexual no ambiente de trabalho, além de consultoria preventiva e elaboração de pareceres para empresas, a fim de minimizar riscos e litígios trabalhistas.
    </p>
      </div>

      <div className="bg-white bg-opacity-90 p-6 rounded-xl shadow-md w-full sm:flex-1 sm:min-w-[280px] sm:max-w-[350px] h-auto flex flex-col items-center px-10">
  <img src="/plano-de-aposentadoria.png" alt="Ícone plano de aposentadoria" className="h-9" />

  <p className="text-[10px] text-white text-center">
    Ícone por <a href="https://www.flaticon.com/br/autores/eucalyp" title="Eucalyp" className="underline hover:text-[#c69535]" target="_blank" rel="noopener noreferrer">Eucalyp</a> via <a href="https://www.flaticon.com/br/" title="Flaticon" className="underline hover:text-[#c69535]" target="_blank" rel="noopener noreferrer">Flaticon</a>
  </p>

  <h3 className="font-bold text-center mb-2 text-[#411417] font-[Raleway]">
    Direito Previdenciário
  </h3>
  
  <p className="text-center text-sm text-[#c69535] text-justify font-[Raleway]">
    Prestamos assessoria jurídica completa na área previdenciária, com foco no atendimento a segurados do INSS, servidores públicos e beneficiários de regimes próprios de previdência. Atuamos na concessão e revisão de aposentadorias, auxílios por incapacidade, além de ações judiciais em casos de indeferimentos ou atrasos administrativos. Buscamos garantir a efetivação dos direitos previdenciários de forma justa e célere.
  </p>
</div>

      <div className="bg-white bg-opacity-90 p-6 rounded-xl shadow-md w-full sm:flex-1 sm:min-w-[280px] sm:max-w-[350px] h-auto flex flex-col items-center px-10">
  <img src="/direito-civil.png" alt="Ícone justiça" className="h-9" />

  {/* Créditos do ícone */}
  <p className="text-[10px] text-white mt-1 text-center">
    Ícone por <a href="https://www.freepik.com" title="Freepik" className="underline hover:text-[#c69535]" target="_blank" rel="noopener noreferrer">Freepik</a> via <a href="https://www.flaticon.com/br/" title="Flaticon" className="underline hover:text-[#c69535]" target="_blank" rel="noopener noreferrer">Flaticon</a>
  </p>

  <h3 className="font-bold text-center mb-2 text-[#411417] font-[Raleway]">
    Direito Civil
  </h3>

  <p className="text-center text-sm text-[#c69535] text-justify font-[Raleway]">
    Nossa atuação em Direito Civil abrange uma ampla gama de demandas, incluindo responsabilidade civil, indenizações por danos materiais e morais, direito contratual, direito de família (divórcio, guarda, alimentos), inventários e testamentos, posse e propriedade, além de disputas entre particulares. Trabalhamos sempre com foco na solução eficaz dos conflitos, seja por via judicial ou extrajudicial, prezando pela segurança jurídica e proteção dos interesses dos nossos clientes.
  </p>
</div>

     <div className="bg-white bg-opacity-90 p-6 rounded-xl shadow-md w-full sm:flex-1 sm:min-w-[280px] sm:max-w-[350px] h-auto flex flex-col items-center px-10">
  <img src="/direito-bancario.png" alt="Ícone lei trabalhista" className="h-9" />

  {/* Créditos do ícone */}
  <p className="text-[10px] text-white mt-1 text-center">
    Ícone por <a href="https://www.flaticon.com/br/autores/icon-home" title="Icon home" className="underline hover:text-[#c69535]" target="_blank" rel="noopener noreferrer">Icon Home</a> via <a href="https://www.flaticon.com/br/" title="Flaticon" className="underline hover:text-[#c69535]" target="_blank" rel="noopener noreferrer">Flaticon</a>
  </p>

  <h3 className="font-bold text-center mb-2 text-[#411417] font-[Raleway]">
    Direito Bancário
  </h3>

  <p className="text-center text-sm text-[#c69535] text-justify font-[Raleway]">
    Oferecemos assessoria especializada em Direito Bancário, com atuação voltada à proteção dos consumidores e empresas diante de práticas abusivas e contratos leoninos impostos por instituições financeiras. Realizamos análise e revisão de contratos de financiamento, empréstimos, cartões de crédito, cheque especial, bem como ações judiciais relativas a juros abusivos, anatocismo, negativação indevida e cobrança indevida. Buscamos soluções justas e equilibradas para as relações entre clientes e bancos.
  </p>
</div>
    </div>
  </div>
</section>


       <section id="entrega" className=" w-full min-h-screen flex flex-col items-center justify-center px-4 py-8 bg-white">

        <h1 className="text-[#bfa375] text-2xl mb-1 font-light font-[Monteserrat]">
  Entenda o processo
</h1>
   <h1 className="text-[#06092b] text-3xl mb-20 font-light font-[Raleway]">
  COMO EU TRABALHO
</h1>

<div className="flex flex-wrap justify-center gap-4 object-cover z-10">
  <div className="bg-[#06092b] p-6 rounded-xl shadow-md w-full sm:flex-1 sm:min-w-[280px] sm:max-w-[350px] h-auto flex flex-col items-center px-10">
    <img src="/direito-penal.png" alt="" className="h-7" />
    <h3 className="font-bold text-center mb-2 text-whit font-[Raleway]">
      Analise
    </h3>
    <p className="text-center text-sm text-whit text-justify font-[Raleway]">
      Iniciamos com um estudo detalhado da situação do cliente, reunindo documentos, informações e histórico jurídico. Essa etapa permite identificar riscos, inconsistências e oportunidades de ação nas áreas trabalhista, previdenciária, civil e bancária, garantindo uma compreensão completa do caso antes de qualquer medida

    </p>
  </div>

  <div className="bg-[#06092b] p-6 rounded-xl shadow-md w-full sm:flex-1 sm:min-w-[280px] sm:max-w-[350px] h-auto flex flex-col items-center px-10">
    <img src="/plano-de-aposentadoria.png" alt="" className="h-7" />
    <h3 className="font-bold text-center mb-2 text-whit font-[Raleway]">
      Desenvolvimento
    </h3>
    <p className="text-center text-sm text-white text-justify font-[Raleway]">
     Com base na análise, desenvolvemos estratégias jurídicas personalizadas, elaborando petições, defesas, pareceres ou requerimentos administrativos conforme a área de atuação. Nosso trabalho é conduzido com técnica, ética e transparência, mantendo o cliente informado durante todas as fases do processo.

    </p>
  </div>

  <div className="bg-[#06092b] p-6 rounded-xl shadow-md w-full sm:flex-1 sm:min-w-[280px] sm:max-w-[350px] h-auto flex flex-col items-center px-10">
    <img src="/justica.png" alt="" className="h-7" />
    <h3 className="font-bold text-center mb-2 text-whit font-[Raleway]">
      Entrega
    </h3>
    <p className="text-center text-sm text-whit text-justify font-[Raleway]">
      Finalizamos com a entrega dos resultados acordados, por meio de relatórios, reuniões ou protocolos judiciais. Garantimos clareza, pontualidade e acompanhamento até a conclusão efetiva do caso, reforçando nosso compromisso com a segurança jurídica e a confiança de nossos clientes.
    </p>
  </div>
</div>
      </section>

    <section id="contato" className="bg-[#06092b] w-full min-h-80 flex flex-col items-center justify-center px-4">
  <div className="w-full flex flex-col md:flex-row-reverse gap-10 md:items-center justify-center mx-auto">
    <img
      src="/Logo2.png"
      alt="Logo"
      className="md:w-90 w-70 h-auto order-1 md:order-1 self-center md:self-auto"
    />
    <div className="flex flex-col justify-center order-3 md:order-2 text-left gap-3">
     <a
  href="https://www.instagram.com/fernando_ventemilhas"
  target="_blank"
  rel="noopener noreferrer"
>
  <div className="flex items-center gap-2 cursor-pointer">
    <img src="/instagram.png" alt="Instagram" className="w-5 h-5" />
    <h1 className="text-[#fff] md:text-md text-sm font-[Raleway]">@Fernando_Ventemilhas</h1>
  </div>
</a>
  <a
  href="https://www.facebook.com/share/1YDVBGLqwp/"
  target="_blank"
  rel="noopener noreferrer"
>
  <div className="flex items-center gap-2 cursor-pointer">
    <img src="/facebook.png" alt="Instagram" className="w-5 h-5" />
    <h1 className="text-[#fff] md:text-md text-sm font-[Raleway]">@Fernando_Ventemilhas</h1>
  </div>
</a>
<a
  href="mailto:fernandoventemillhas@gmail.com?subject=Solicitação%20de%20Atendimento%20Jurídico&body=Olá,%20gostaria%20de%20agendar%20um%20atendimento%20jurídico.%0ASeguem%20meus%20dados%20para%20contato:%0A%0ANome:%0ATelefone/WhatsApp:%0AAssunto:"
>
  <div className="flex items-center gap-2 cursor-pointer">
    <img src="/e-mail.png" alt="Email" className="w-5 h-5" />
    <h1 className="text-[#fff] md:text-md text-sm font-[Raleway]">
      fernandoVentemilhas@gmail.com
    </h1>
  </div>
</a>
<a
  href="https://api.whatsapp.com/send?phone=5567991347729
&text=Olá,%20gostaria%20de%20agendar%20um%20atendimento%20jurídico.%0ASeguem%20meus%20dados%20para%20contato:%0A%0ANome:%0ATelefone/WhatsApp:%0AAssunto:"
  target="_blank"
  rel="noopener noreferrer"
>
  <div className="flex items-center gap-2">
    <img src="/whatsapp.png" alt="WhatsApp" className="w-5 h-5" />
    <h1 className="text-[#fff] md:text-md text-sm font-[Raleway]">(67) 99134-7729
</h1>
  </div>
</a>
    </div>
  </div>
  
</section>

<footer className="w-full text-white text-center bg-[#06092b] py-4">
  <div className="h-0.5 w-5/10 bg-[#c5ab7d] my-4 mx-auto"/>
  <p className="text-[7px] sm:text-[10px] font-[Monteserrat]">
    &copy; Copyright 2025. Todos os Direitos Reservados. Fernando Ventemilhas Advogado. Desenvolvido por Vinicius Martins
  </p>
</footer>
    </>
  );
}
