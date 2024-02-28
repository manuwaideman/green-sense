import {} from 'react';
import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/logo2.png';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.png';
import img3 from '../images/img3.png';
import img4 from '../images/img4.jpg';

function Home() {
  return (
    <>
      <header className="cabecalho">
        <img className="logo" src={logo} alt="Logo" />
        <div className="text-gs">
          <p>Global Solution 2023 - Engenharia de Software</p>
        </div>
      </header>

      <div className="container-inicio mt-5">
        <section className="row-inicio">

          <div className="custom-col-md-7">
            <img src={img1} alt="Img principal" className="main-img-fluid"/>

            <section className="row-inicio">
              <div className="custom-col-md-5 mt-5 custom-title-col">
                <h1>EmoAlly</h1>
              </div>
              <div className="col-md-6 mt-5 custom-text-col">
                <p>
                  Sua aliada inovadora em saúde mental. Triagem personalizada,
                  suporte emocional com chatbots empáticos e acesso a
                  profissionais, promovendo bem-estar emocional globalmente.
                </p>
                <button type="button" class="custom-btn custom-btn-outline-dark">Mais informações</button>
              </div>
            </section>
          </div>
          <div className="custom-col-md-5">
            <h2>O que é EmoAlly?</h2>
            <p>
              Mais que uma plataforma; é seu confidente digital em saúde mental.
              Oferecendo triagem, suporte emocional imediato e uma comunidade
              unida, EmoAlly é sua jornada para um bem-estar emocional
              duradouro. Descubra uma abordagem inovadora para cuidar da sua
              saúde mental, transformando cada desafio em uma oportunidade de
              crescimento. Bem-vindo à revolução do autocuidado emocional.
            </p>
            <h2>O que EmoAlly fará por você?</h2>
            <p>
              Estamos aqui para transformar sua relação com o bem-estar
              emocional. Com algoritmos inteligentes, proporcionaremos uma
              triagem personalizada, identificando sinais precoces de desafios
              emocionais. Os chatbots empáticos oferecem suporte imediato,
              enquanto a comunidade acolhedora cria um espaço para compartilhar
              experiências. EmoAlly vai além da tecnologia; é sua aliada na
              jornada para uma vida emocionalmente equilibrada.
            </p>
            <h2>Como EmoAlly funcionará para você?</h2>
            <p>
              Triagem Personalizada; Análise Avançada; Suporte Imediato com
              Chatbots Empáticos; Comunidade de Apoio; Encaminhamento
              Profissional; Atualizações Educacionais e Estratégias de
              Autocuidado; Segurança e Privacidade & Feedback Contínuo. EmoAlly
              é uma jornada guiada para um bem-estar emocional duradouro, usando
              tecnologia inovadora para apoiar sua busca por uma vida
              emocionalmente equilibrada.
            </p>
          </div>
        </section>
      </div>

      <div className='container-imgs'>
        <h1>Vantagens</h1>
          <section className='grid-container'>
            <div className='grid-item'>
              <div className="d-flex align-items-center">
                <figure> <img src={img2} alt="Img1" className="images img-fluid rounded"/> </figure>    
                <div className="">
                  <h1>01</h1>
                  <h5 className='m-2'>Triagem Personalizada:</h5>
                  <p className='m-2'>Contribui para a detecção precoce de problemas dermatológicos.</p>
                </div>
              </div>
            </div>

          <div className='grid-item'>
            <div className="d-flex align-items-center">
              <figure> <img src={img3} alt="Img2" className="images img-fluid rounded"/> </figure>
              <div className="">
                <h1>02</h1>
                <h5 className='m-2'>Suporte Imediato com Chatbots Empáticos:</h5>
                <p className='m-2'>Respostas instantâneas para momentos de necessidade emocional.</p>
              </div>
            </div>
          </div>

          <div className='grid-item'>
            <div className="d-flex align-items-center">
              <figure> <img src={img4} alt="Img3" className="images img-fluid rounded"/> </figure>
              <div className="">
                <h1>03</h1>
                <h5 className='m-2'>Comunidade de Apoio:</h5>
                <p className='m-2'>Conexão significativa em uma comunidade unida.</p>
              </div>
            </div>
          </div>
          </section>
      </div>
    </>
  );
}

export default Home