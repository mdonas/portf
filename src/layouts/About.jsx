import { useScrollAnimation } from "../hooks/useScrollAnimation.js";

function About() {
  const [aboutRef, aboutVisible] = useScrollAnimation();
  const [titleRef, titleVisible] = useScrollAnimation();

  return (
    <section className="py-5" id="aboutMe">
      <h2
        ref={titleRef}
        className={`text-white text-center fw-bold mb-5 scroll-animate ${
          titleVisible ? "visible" : ""
        }`}
      >
        Sobre Mí
      </h2>
      <div className="container" ref={aboutRef}>
        <div className="row g-4">
          {/* Perfil Personal */}
          <div className="col-md-8">
            <div
              className={`text-white p-4 h-100 scroll-animate-left stagger-animation-1 ${
                aboutVisible ? "visible" : ""
              }`}
              id="about"
            >
              <h3 className="h4 mb-3 text-darkPurple">Perfil Personal</h3>
              <p className="lead">
                Soy Marcos Donas, un apasionado desarrollador Full Stack y
                especialista en ciberseguridad. Me encanta decubrir nuevas
                formas de poder crear soluciones eficientes y elegantes
              </p>
              <p className="mb-0">
                Mi objetivo es seguir aprendiendo y creciendo profesionalmente,
                aportando todo lo posible a cada equipo y proyecto en el que
                participo.
              </p>
            </div>
          </div>

          {/* Intereses */}
          <div className="col-md-4">
            <div
              className={`text-white p-4 h-100 scroll-animate-right stagger-animation-2 ${
                aboutVisible ? "visible" : ""
              }`}
              id="about"
            >
              <h3 className="h4 mb-3 text-darkPurple">Intereses</h3>
              <ul className="list-unstyled mb-0">
                <li className="mb-2">🔒 Ciberseguridad</li>
                <li className="mb-2">💻 Desarrollo Web</li>
                <li className="mb-2">🤖 Inteligencia Artificial</li>
                <li className="mb-2">🌐 Nuevas Tecnologías</li>
              </ul>
            </div>
          </div>

          {/* Educación */}
          <div className="col-md-6">
            <div
              className={`text-white p-4 h-100 scroll-animate-left stagger-animation-3 ${
                aboutVisible ? "visible" : ""
              }`}
              id="about"
            >
              <h3 className="h4 mb-3 text-darkPurple">Educación</h3>
              <div>
                <h4 className="h5 text-lighterBlack">
                  Grado Universitario - Ingenieria Informatica
                </h4>
                <p className="mb-3">UNED, 2024 - Actualidad</p>
              </div>
              <div>
                <h4 className="h5 text-lighterBlack">
                  Curso de Especializacion en Ciberseguridad
                </h4>
                <p className="mb-3">IES Azarquiel, 2024 - 2025</p>
              </div>
              <div>
                <h4 className="h5 text-lighterBlack">
                  Grado Superior - Desarrollo de Aplicaciones Web
                </h4>
                <p className="mb-0">IES Azarquiel, 2022 - 2024</p>
              </div>
            </div>
          </div>

          {/* Habilidades */}
          <div className="col-md-6">
            <div className="text-white p-4 h-100" id="about">
              <h3 className="h4 mb-3 text-darkPurple">Experiencia Destacada</h3>
              <div>
                <h4 className="h5 text-lighterBlack">Desarrollo Full Stack</h4>
                <ul>
                  <li className="mb-2">
                    Desarrollo de aplicaciones web seguras
                  </li>
                  <li className="mb-2">
                    Implementación de buenas prácticas de seguridad
                  </li>
                  <li className="mb-0">
                    Optimización de rendimiento y experiencia de usuario
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
