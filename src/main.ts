import './style.css'

// Landing page HTML structure
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <header class="header">
    <nav class="nav">
      <a href="#" class="logo">HackLathon</a>
      <button class="menu-toggle" aria-label="Toggle menu">☰</button>
      <ul class="nav-links">
        <li><a href="#about">Nosotros</a></li>
        <li><a href="#features">Beneficios</a></li>
        <li><a href="#community">Comunidad</a></li>
        <li><a href="#cta">Únete</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section class="hero">
      <div class="hero-content fade-in-up">
        <h1>Construyendo el Futuro Tech de América Latina</h1>
        <p class="hero-subtitle">
          Únete a la plataforma líder de hackathons en LatAm. Conecta con developers, 
          designers y builders apasionados por crear soluciones innovadoras que transforman nuestra región.
        </p>
        <div class="cta-buttons">
          <button class="btn btn-primary">Próximos Hackathons</button>
          <button class="btn btn-secondary">Únete a la Comunidad</button>
        </div>
      </div>
    </section>

    <section id="about" class="about">
      <div class="section-content">
        <h2 class="section-title">¿Qué es HackLathon?</h2>
        <p class="section-subtitle">
          Somos más que una plataforma de hackathons. Somos un movimiento regional 
          dedicado a impulsar el talento tech en América Latina, creando oportunidades 
          de aprendizaje, colaboración e innovación para todos.
        </p>
      </div>
    </section>

    <section id="features" class="features">
      <div class="section-content">
        <h2 class="section-title">¿Por qué HackLathon?</h2>
        
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🚀</div>
            <h3>Hackathons Inclusivos</h3>
            <p>
              Organizamos eventos accesibles para todos los niveles, desde principiantes 
              hasta expertos, porque creemos que el talento está en todas partes.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">🌎</div>
            <h3>Enfoque Regional</h3>
            <p>
              Conectamos talento de toda América Latina, creando una red colaborativa 
              que trasciende fronteras y fortalece nuestra comunidad tech.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">💡</div>
            <h3>Aprendizaje Continuo</h3>
            <p>
              Cada hackathon es una oportunidad para aprender nuevas tecnologías, 
              desarrollar habilidades y crecer profesionalmente junto a los mejores.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">🤝</div>
            <h3>Networking Auténtico</h3>
            <p>
              Conoce a founders, developers, investors y mentores que comparten tu 
              pasión por la tecnología y la innovación en LatAm.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">🏆</div>
            <h3>Premios & Oportunidades</h3>
            <p>
              Compite por premios increíbles, acceso a programas de aceleración, 
              y oportunidades de financiamiento para tus proyectos.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">🎯</div>
            <h3>Proyectos con Impacto</h3>
            <p>
              Trabaja en soluciones que resuelven problemas reales de nuestra región, 
              desde educación y salud hasta fintech y sostenibilidad.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="community" class="community">
      <div class="section-content">
        <h2 class="section-title">Nuestra Comunidad</h2>
        
        <div class="community-stats">
          <div class="stat">
            <span class="stat-number">10K+</span>
            <span class="stat-label">Participantes</span>
          </div>
          <div class="stat">
            <span class="stat-number">50+</span>
            <span class="stat-label">Hackathons</span>
          </div>
          <div class="stat">
            <span class="stat-number">15</span>
            <span class="stat-label">Países</span>
          </div>
          <div class="stat">
            <span class="stat-number">500+</span>
            <span class="stat-label">Proyectos</span>
          </div>
        </div>
      </div>
    </section>

    <section id="cta" class="cta">
      <div class="cta-content">
        <h2>¿Listo para Hackear el Futuro?</h2>
        <p>
          Únete a miles de developers, designers y builders que están construyendo 
          el futuro tech de América Latina. Tu próxima gran idea comienza aquí.
        </p>
        <div class="cta-buttons">
          <button class="btn btn-primary">Regístrate Ahora</button>
        </div>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h3>HackLathon</h3>
        <p>
          Plataforma para comunidad de indie hackers y builders en LatAm. 
          Construyendo el futuro tech de América Latina, un hackathon a la vez.
        </p>
      </div>
      
      <div class="footer-section">
        <h3>Recursos</h3>
        <a href="#">Próximos Eventos</a>
        <a href="#">Blog</a>
        <a href="#">Guías</a>
        <a href="#">FAQ</a>
      </div>
      
      <div class="footer-section">
        <h3>Comunidad</h3>
        <a href="#">Discord</a>
        <a href="#">Twitter</a>
        <a href="#">LinkedIn</a>
        <a href="#">GitHub</a>
      </div>
      
      <div class="footer-section">
        <h3>Contacto</h3>
        <a href="mailto:hola@hacklathon.com">hola@hacklathon.com</a>
        <p>América Latina</p>
      </div>
    </div>
    
    <div class="footer-bottom">
      <p>&copy; 2025 HackLathon. Hecho con ❤️ en América Latina.</p>
    </div>
  </footer>
`

// Mobile menu toggle functionality
const menuToggle = document.querySelector('.menu-toggle')
const navLinks = document.querySelector('.nav-links')

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active')
  })
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault()
    const targetId = anchor.getAttribute('href')
    if (targetId && targetId !== '#') {
      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        const headerOffset = 80
        const elementPosition = targetElement.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })

        // Close mobile menu if open
        navLinks?.classList.remove('active')
      }
    }
  })
})

// Add scroll animation for sections
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-up')
    }
  })
}, observerOptions)

// Observe feature cards and stats
document.querySelectorAll('.feature-card, .stat').forEach(el => {
  observer.observe(el)
})

console.log('🚀 HackLathon - Built with Vite + TypeScript')

