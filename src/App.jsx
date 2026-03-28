import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Star, WhatsappLogo, InstagramLogo, Phone, Tooth, Syringe, Sparkle, ShieldCheck, Heart, Eye, Diamond, UserCircle, MapPin, Clock } from '@phosphor-icons/react'
import './App.css'

const WA = 'https://wa.me/5548991415196?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20Vivera%20Odontologia!'
const IG = 'https://www.instagram.com/viveraodonto/'
const TEL = 'tel:+554830307400'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] } }),
}
const stagger = { visible: { transition: { staggerChildren: 0.1 } } }

function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-logo">VIVERA</div>
      <div className="nav-links">
        <a href="#servicos">Serviços</a>
        <a href="#diferenciais">Diferenciais</a>
        <a href="#avaliacoes">Avaliações</a>
      </div>
      <a href={WA} target="_blank" rel="noopener noreferrer" className="nb">
        <WhatsappLogo size={16} weight="duotone" /> Agendar
      </a>
    </nav>
  )
}

function Hero() {
  return (
    <section className="hero">
      <div className="mx hero-center">
        <motion.div className="hero-label" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <Diamond size={14} weight="fill" /> Odontologia Premium
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
          Seu sorriso,<br /><span className="accent">nossa paixão</span>
        </motion.h1>
        <motion.p className="hero-sub" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          Implantes com sedação, alinhadores invisíveis, lentes de porcelana e harmonização orofacial. 21+ anos transformando sorrisos com respeito e excelência no Centro de Florianópolis.
        </motion.p>
        <motion.div className="hero-stats" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
          <div className="stat"><strong>4.8</strong><span>Google</span></div>
          <div className="stat-sep" />
          <div className="stat"><strong>400+</strong><span>Avaliações</span></div>
          <div className="stat-sep" />
          <div className="stat"><strong>21+</strong><span>Anos</span></div>
        </motion.div>
        <motion.div className="hero-btns" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-prim">
            <WhatsappLogo size={18} weight="duotone" /> <span>Agendar Avaliação</span>
          </a>
          <a href={TEL} className="btn-sec">
            <Phone size={18} weight="duotone" /> <span>(48) 3030-7400</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

const servicos = [
  { icon: <Syringe size={26} weight="duotone" />, title: 'Implantes com Sedação', desc: 'Método Vivera® exclusivo. Faça seus implantes dormindo. Cirurgia em um dia, finalização no outro.' },
  { icon: <Sparkle size={26} weight="duotone" />, title: 'Alinhadores Invisíveis', desc: 'Expertise desde 2013. Alinhamento dental discreto e eficiente para adultos e adolescentes.' },
  { icon: <Diamond size={26} weight="duotone" />, title: 'Lentes de Porcelana', desc: 'Lentes de contato dental e facetas biomimétícas para um sorriso natural e deslumbrante.' },
  { icon: <Heart size={26} weight="duotone" />, title: 'Harmonização Orofacial', desc: 'Escultura labial e facial com técnica apurada para resultados elegantes e harmoniosos.' },
  { icon: <Tooth size={26} weight="duotone" />, title: 'Clareamento', desc: 'Clareamento dental profissional com tecnologia de ponta para dentes brancos e saudáveis.' },
  { icon: <Eye size={26} weight="duotone" />, title: 'Estética BioRegenerativa', desc: 'Tratamentos inovadores que respeitam e regeneram a estrutura natural dos dentes.' },
]

function Servicos() {
  return (
    <section className="sp serv-sec" id="servicos">
      <div className="mx">
        <motion.div className="sh" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <span className="stg">Especialidades</span>
          <h2>Odontologia de excelência</h2>
          <p>Procedimentos minimamente invasivos com tecnologia e cuidado</p>
        </motion.div>
        <motion.div className="serv-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {servicos.map((s, i) => (
            <motion.div key={i} className="serv-card" variants={fadeUp} custom={i}>
              <div className="serv-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

const difs = [
  { icon: <ShieldCheck size={22} weight="duotone" />, title: 'Método Vivera®', desc: 'Implantes com sedação exclusiva. Cirurgia sem dor nem ansiedade.' },
  { icon: <Heart size={22} weight="duotone" />, title: 'Abordagem Humanizada', desc: 'Acolhimento sem julgamento. Respeito à sua história e às suas necessidades.' },
  { icon: <Sparkle size={22} weight="duotone" />, title: '21+ Anos de Experiência', desc: 'Diego Aguiar e Sara Eckert dedicados à transformação de sorrisos.' },
  { icon: <Diamond size={22} weight="duotone" />, title: 'Minimamente Invasivo', desc: 'Procedimentos que respeitam a estrutura natural dos seus dentes.' },
]

function Diferenciais() {
  return (
    <section className="sp dif-sec" id="diferenciais">
      <div className="mx">
        <motion.div className="sh" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <span className="stg">Por que Vivera</span>
          <h2>Diferenciais que importam</h2>
        </motion.div>
        <motion.div className="dif-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {difs.map((d, i) => (
            <motion.div key={i} className="dif-card" variants={fadeUp} custom={i}>
              <div className="dif-icon">{d.icon}</div>
              <h3>{d.title}</h3>
              <p>{d.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

const reviews = [
  { text: 'Implantes com sedação foi a melhor decisão! Não senti absolutamente nada. Método Vivera é revolucionário.', author: 'Roberto M.' },
  { text: 'Diego e Sara são profissionais extraordinários. Me trataram com tanto carinho e respeito. Meu sorriso mudou minha vida.', author: 'Ana P.' },
  { text: 'Fiz lentes de porcelana e o resultado é inacreditável. Natural e perfeito. Equipe impecável!', author: 'Camila S.' },
  { text: 'Melhor clínica odontológica de Florianópolis. 21 anos de experiência que se refletem em cada detalhe.', author: 'Paulo L.' },
  { text: 'Alinhadores invisíveis mudaram meu sorriso sem que ninguém percebesse. Vivera é top!', author: 'Fernanda T.' },
  { text: 'Atendimento humanizado de verdade. Me senti acolhida e respeitada. Resultado superou expectativas.', author: 'Juliana R.' },
]

function Avaliacoes() {
  return (
    <section className="sp" id="avaliacoes">
      <div className="mx">
        <motion.div className="sh" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <span className="stg">Avaliações</span>
          <h2>Sorrisos que falam</h2>
          <p>400+ avaliações com nota 4.8 no Google</p>
        </motion.div>
        <motion.div className="rev-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {reviews.map((r, i) => (
            <motion.div key={i} className="rev-card" variants={fadeUp} custom={i}>
              <div className="rev-stars">{[0,1,2,3,4].map(j => <Star key={j} size={14} weight="fill" color="#1A6B5C" />)}</div>
              <p>&ldquo;{r.text}&rdquo;</p>
              <span className="rev-author">{r.author}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function Cta() {
  return (
    <section className="cta sp">
      <div className="mx">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2>Transforme seu<br /><span className="accent">sorriso</span></h2>
          <p>Agende sua avaliação e conheça o Método Vivera®.</p>
          <div className="cta-btns">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-prim">
              <WhatsappLogo size={18} weight="duotone" /> <span>Agendar pelo WhatsApp</span>
            </a>
            <a href={TEL} className="btn-sec">
              <Phone size={18} weight="duotone" /> <span>Ligar Agora</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="mx">
        <div className="footer-brand">VIVERA</div>
        <div className="footer-sub">Odontologia Premium — Diego Aguiar & Sara Eckert</div>
        <div className="footer-info"><MapPin size={12} weight="duotone" style={{display:'inline',verticalAlign:'middle'}} /> Av. Rio Branco, 380 — Centro, Florianópolis, SC<br />(48) 3030-7400 • (48) 99141-5196</div>
        <div className="footer-info"><Clock size={12} weight="duotone" style={{display:'inline',verticalAlign:'middle'}} /> Seg-Sex: 8h30 às 18h</div>
        <div className="footer-links">
          <a href={IG} target="_blank" rel="noopener noreferrer" className="fl"><InstagramLogo size={14} weight="duotone" /> @viveraodonto</a>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="fl"><WhatsappLogo size={14} weight="duotone" /> WhatsApp</a>
          <a href={TEL} className="fl"><Phone size={14} weight="duotone" /> Telefone</a>
        </div>
        <div className="footer-copy">&copy; 2026 Vivera Odontologia Premium. Todos os direitos reservados.</div>
      </div>
    </footer>
  )
}

function FloatingWa() {
  return (
    <motion.a href={WA} target="_blank" rel="noopener noreferrer" className="fbtn" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 }} whileHover={{ scale: 1.05 }}>
      <WhatsappLogo size={20} weight="duotone" />
    </motion.a>
  )
}

function App() {
  return (
    <>
      <Helmet>
        <title>Vivera Odontologia Premium | Florianópolis</title>
        <meta name="description" content="Vivera Odontologia Premium - Implantes com sedação, alinhadores, lentes de porcelana. 400+ avaliações, nota 4.8. Centro, Florianópolis." />
      </Helmet>
      <Navbar />
      <Hero />
      <Servicos />
      <Diferenciais />
      <Avaliacoes />
      <Cta />
      <Footer />
      <FloatingWa />
    </>
  )
}

export default App
