"use client";

import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  Database,
  Github,
  Layers3,
  Linkedin,
  Mail,
  MonitorSmartphone,
  Phone,
  Sparkles,
  TerminalSquare,
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "RLA Insight",
    category: "SaaS / Finanças",
    description:
      "Sistema de análise financeira para empresas com importação de planilhas, detecção de padrões, fluxo de caixa e gestão de informações.",
    stack: ["Next.js", "TypeScript", "Cloudflare D1", "CSV/XLSX"],
    featured: true,
    href: "https://rla-insight.rlatech.workers.dev",
  },
  {
    number: "02",
    title: "RLA Tech",
    category: "Institucional",
    description:
      "Site da RLA Tech, criado para apresentar serviços, projetos e soluções digitais de forma moderna e direta.",
    stack: ["Next.js", "TypeScript", "CSS"],
    href: "https://www.rlatech.com.br",
  },
  {
    number: "03",
    title: "Aureon Motors",
    category: "Automotivo",
    description:
      "Experiência digital para concessionária com catálogo de veículos, navegação premium e foco em conversão.",
    stack: ["Next.js", "React", "Responsive UI"],
    href: "#projetos",
  },
  {
    number: "04",
    title: "Maison Navalha",
    category: "Barbearia / Sistema",
    description:
      "Site completo para barbearia com agendamento, login, administração, serviços e integração com banco de dados.",
    stack: ["Next.js", "Prisma", "PostgreSQL"],
    href: "#projetos",
  },
  {
    number: "05",
    title: "Lumina Odonto",
    category: "Odontologia",
    description:
      "Plataforma para clínica odontológica com área de paciente, profissional e experiência de agendamento.",
    stack: ["Next.js", "TypeScript", "UX/UI"],
    href: "https://luminina-odonto.vercel.app",
  },
  {
    number: "06",
    title: "Brasa & Oliva",
    category: "Restaurante",
    description:
      "Site gastronômico com identidade visual sofisticada, cardápio digital e experiência totalmente responsiva.",
    stack: ["Next.js", "React", "CSS"],
    href: "https://brasa-oliva-restaurante.vercel.app",
  },
  {
    number: "07",
    title: "Mundo Pet",
    category: "E-commerce",
    description:
      "Experiência de loja pet com categorias, produtos, serviços e navegação inspirada em grandes varejistas.",
    stack: ["Next.js", "React", "E-commerce UI"],
    href: "https://mundo-pet-two.vercel.app",
  },
  {
    number: "08",
    title: "Atticus Atelier",
    category: "Moda / E-commerce",
    description:
      "Loja de moda com visual editorial, catálogo de produtos e experiência de compra pensada para marcas premium.",
    stack: ["Next.js", "TypeScript", "Commerce"],
    href: "#projetos",
  },
];

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript",
  "HTML",
  "CSS",
  "Node.js",
  "PostgreSQL",
  "Prisma",
  "Git",
  "GitHub",
  "Docker",
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a href="#inicio" className="brand" aria-label="Ir para o início">
          LC<span>.</span>
        </a>

        <nav>
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </nav>

        <a className="header-cta" href="mailto:vendasrlatech@gmail.com">
          Falar comigo
          <ArrowUpRight size={16} />
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-kicker">
          <span className="status-dot" />
          Disponível para novos projetos
        </div>

        <h1>
          Eu construo experiências
          <span> digitais que parecem grandes.</span>
        </h1>

        <div className="hero-bottom">
          <p>
            Desenvolvedor Front-end focado em criar interfaces modernas,
            produtos digitais e experiências web com atenção aos detalhes.
          </p>

          <a href="#projetos" className="circle-link" aria-label="Ver projetos">
            <ArrowDownRight size={28} />
          </a>
        </div>

        <div className="hero-grid">
          <div>
            <strong>8+</strong>
            <span>Projetos desenvolvidos</span>
          </div>
          <div>
            <strong>Front-end</strong>
            <span>Foco principal</span>
          </div>
          <div>
            <strong>RLA Tech</strong>
            <span>Produto & desenvolvimento</span>
          </div>
        </div>
      </section>

      <section className="marquee" aria-label="Tecnologias">
        <div className="marquee-track">
          {[...skills, ...skills].map((skill, index) => (
            <span key={`${skill}-${index}`}>
              {skill} <b>✦</b>
            </span>
          ))}
        </div>
      </section>

      <section className="about section" id="sobre">
        <div className="section-label">
          <span>01</span>
          SOBRE
        </div>

        <div className="about-content">
          <h2>
            Código é só uma parte.
            <span> O produto precisa fazer sentido.</span>
          </h2>

          <div className="about-copy">
            <p>
              Sou Leonardo Chaves, estudante de Análise e Desenvolvimento de
              Sistemas e desenvolvedor com foco em front-end. Gosto de transformar
              ideias em produtos digitais bonitos, rápidos e fáceis de usar.
            </p>
            <p>
              Além do desenvolvimento, também atuo na criação de soluções pela
              RLA Tech — indo da ideia e protótipo até a construção, validação e
              publicação do produto.
            </p>
          </div>
        </div>

        <div className="capabilities">
          <article>
            <MonitorSmartphone />
            <span>01</span>
            <h3>Front-end</h3>
            <p>Interfaces responsivas, modernas e pensadas para experiência.</p>
          </article>

          <article>
            <Layers3 />
            <span>02</span>
            <h3>Produto</h3>
            <p>Construção de produtos digitais da ideia até a versão utilizável.</p>
          </article>

          <article>
            <Database />
            <span>03</span>
            <h3>Full Stack</h3>
            <p>Integrações, autenticação, banco de dados e regras de negócio.</p>
          </article>
        </div>
      </section>

      <section className="projects section" id="projetos">
        <div className="section-heading">
          <div className="section-label light">
            <span>02</span>
            PROJETOS
          </div>
          <h2>Trabalhos selecionados.</h2>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              target={project.href.startsWith("http") ? "_blank" : undefined}
              rel={project.href.startsWith("http") ? "noreferrer" : undefined}
              className={`project-card ${project.featured ? "featured" : ""}`}
            >
              <div className="project-number">{project.number}</div>

              <div className="project-main">
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="tags">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>

              <div className="project-action">
                <ArrowUpRight size={26} />
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="stack section">
        <div className="section-label">
          <span>03</span>
          STACK
        </div>

        <div className="stack-layout">
          <h2>
            Ferramentas que uso
            <span> para tirar ideias do papel.</span>
          </h2>

          <div className="stack-cloud">
            {skills.map((skill, index) => (
              <div key={skill} className="skill-pill">
                {index % 4 === 0 && <Code2 size={16} />}
                {index % 4 === 1 && <TerminalSquare size={16} />}
                {index % 4 === 2 && <Sparkles size={16} />}
                {index % 4 === 3 && <Database size={16} />}
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="experience section">
        <div className="section-label">
          <span>04</span>
          EXPERIÊNCIA
        </div>

        <div className="experience-list">
          <article>
            <div className="experience-year">Atual</div>
            <div>
              <h3>RLA Tech</h3>
              <span>Desenvolvimento & Produto</span>
            </div>
            <p>
              Criação de sites, experiências digitais e produtos próprios,
              incluindo o RLA Insight.
            </p>
          </article>

          <article>
            <div className="experience-year">atual
            </div>
            <div>
              <h3>Desenvolvedor Front-End Júnior</h3>
              <span>Rawa</span>
            </div>
            <p>
              Desenvolvimento e manutenção de aplicações web, criação de interfaces
              responsivas com HTML, CSS e JavaScript, correção de bugs e implementação
              de novas funcionalidades em colaboração com a equipe.
            </p>
          </article>

          <article>
            <div className="experience-year">Anterior</div>
            <div>
              <h3>Estagiário de Desenvolvimento Front-End</h3>
              <span>Rawa</span>
            </div>
            <p>
              Apoio no desenvolvimento de interfaces, manutenção e atualização de
              páginas web, além de melhorias de usabilidade e desempenho.
            </p>
          </article>

          <article>
            <div className="experience-year">Anterior</div>
            <div>
              <h3>Suporte de TI</h3>
              <span>Subprefeitura de Perus</span>
            </div>
            <p>
              Suporte técnico, manutenção, redes, Windows, Office, inventário de TI
              e automações com PowerShell.
            </p>
          </article>

          <article>
            <div className="experience-year">Formação</div>
            <div>
              <h3>Análise e Desenvolvimento de Sistemas</h3>
              <span>FAM</span>
            </div>
            <p>
              Formação voltada a desenvolvimento de software, banco de dados,
              interfaces e arquitetura de aplicações.
            </p>
          </article>
        </div>
      </section>

      <section className="contact section" id="contato">
        <span className="contact-eyebrow">TEM UM PROJETO EM MENTE?</span>

        <h2>
          Bora construir
          <span> algo bom.</span>
        </h2>

        <div className="contact-actions">
          <a className="primary-contact" href="mailto:vendasrlatech@gmail.com">
            <Mail size={20} />
            chavesleo27@gmail.com
            <ArrowUpRight size={20} />
          </a>

          <a
            className="secondary-contact"
            href="https://github.com/leoChaves01"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={20} />
            GitHub
          </a>
          <a
          className="secondary-contact"
            href="https://br.linkedin.com/in/leonardo-chaves-528a6229a"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={19} />
            LinkedIn
          </a>

          <a
            className="secondary-contact"
            href="https://wa.me/5511964301524"
            target="_blank"
            rel="noreferrer"
          >
            <Phone size={19} />
            WhatsApp
          </a>
        </div>
      </section>

      <footer>
        <a href="#inicio" className="brand">
          LC<span>.</span>
        </a>
        <p>Leonardo Chaves — Desenvolvedor Front-end</p>
        <span>© 2026</span>
      </footer>
    </main>
  );
}