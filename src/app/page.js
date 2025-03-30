"use client";

import { React, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./globals.css";
import PersonalInfo from "./components/personalInfo";
import Card from "./components/card";

export default function Home() {
  useEffect(() => {
    // Inicializar AOS para animaciones al scroll
    AOS.init({
      duration: 800,
      once: false,
      easing: 'ease-out',
      anchorPlacement: "top-bottom",
    });
    
    // Efecto de parallax al mover el cursor
    const handleMouseMove = (e) => {
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;
      
      document.documentElement.style.setProperty('--mouse-x', mouseX);
      document.documentElement.style.setProperty('--mouse-y', mouseY);
    };
    
    // Añadir listener para el movimiento del mouse
    window.addEventListener('mousemove', handleMouseMove);
    
    // Limpiar event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="portfolio-container">
      <PersonalInfo />
      
      <main className="container">
        <section className="about-section" id="sobre-mi">
          <h2 data-aos="fade-up">Sobre Mí</h2>
          <div className="section-content">
            <p data-aos="fade-up" data-aos-delay="100">
              Soy un desarrollador full stack con más de dos años de experiencia
              en el desarrollo de aplicaciones web.
            </p>
            <p data-aos="fade-up" data-aos-delay="200">
              Soy una persona responsable, seria y con una gran pasión por
              aprender todo lo relacionado con la tecnología. Me adapto
              rápidamente a nuevos entornos y disfruto trabajando en equipo para
              alcanzar objetivos comunes.
            </p>
          </div>
        </section>

        <section className="skills-section" id="habilidades">
          <h2 data-aos="fade-up">Habilidades Técnicas</h2>
          <div className="section-content">
            <ul className="skills-list">
              <li data-aos="fade-up" data-aos-delay="100">
                <strong>Lenguajes de Programación:</strong> Groovy, Java, JavaScript
              </li>
              <li data-aos="fade-up" data-aos-delay="150">
                <strong>Frameworks y Librerías:</strong> Grails, jQuery
              </li>
              <li data-aos="fade-up" data-aos-delay="200">
                <strong>Desarrollo Web:</strong> HTML, CSS
              </li>
              <li data-aos="fade-up" data-aos-delay="250">
                <strong>Bases de Datos:</strong> MySQL, SQL Server, Oracle
              </li>
              <li data-aos="fade-up" data-aos-delay="300">
                <strong>Servidores:</strong> Tomcat, Apache
              </li>
              <li data-aos="fade-up" data-aos-delay="350">
                <strong>Sistemas Operativos:</strong> Ubuntu, CentOS
              </li>
            </ul>
          </div>
        </section>

        <section className="experience-section" id="experiencia">
          <h2 data-aos="fade-up">Experiencia Profesional</h2>
          <div className="section-content">
            <Card
              header="Desarrollador Full Stack - ecityclic"
              body={
                <div>
                  <p>
                    <strong>Febrero 2022 - Presente</strong>
                  </p>
                  <ul className="experience-list">
                    <li>
                      Desarrollo de aplicaciones web utilizando Groovy y Grails.
                    </li>
                    <li>
                      Implementación de interfaces de usuario con JavaScript,
                      HTML, CSS y jQuery.
                    </li>
                    <li>
                      Gestión y configuración de bases de datos MySQL, SQL Server
                      y Oracle.
                    </li>
                    <li>
                      Despliegue y configuración de aplicaciones en servidores
                      Tomcat y Apache en sistemas Ubuntu.
                    </li>
                    <li>
                      Gestión de tickets e incidencias técnicas.
                    </li>
                  </ul>
                </div>
              }
            />
          </div>
        </section>

        <section className="education-section" id="educacion">
          <h2 data-aos="fade-up">Educación</h2>
          <div className="section-content">
            <Card
              header="Instituto Caparrella: 2019 - 2021"
              body={
                <p>
                  <strong>
                    Grado Superior en Desarrollo de Aplicaciones Multiplataforma
                    (DAM)
                  </strong>
                </p>
              }
            />
          </div>
        </section>

        <section className="projects-section" id="proyectos">
          <h2 data-aos="fade-up">Proyectos Destacados</h2>
          <div className="section-content">
            <Card
              header="¡Vuelve pronto para ver mis últimos proyectos!"
              body={
                <p>
                  Actualmente, estoy trabajando en el desarrollo de varios
                  proyectos que pronto estarán disponibles en esta sección.
                </p>
              }
            />
          </div>
        </section>

        <section className="contact-section" id="contacto">
          <h2 data-aos="fade-up">Contacto</h2>
          <div className="section-content">
            <p data-aos="fade-up" data-aos-delay="100">
              Estoy disponible para nuevas oportunidades y colaboraciones. No
              dudes en ponerte en contacto conmigo a través de mi correo
              electrónico{" "}
              <a href="mailto:menssouri2811@gmail.com">menssouri2811@gmail.com</a>{" "}
              o en{" "}
              <a href="https://www.linkedin.com/in/yassine-menssouri">LinkedIn</a>.
            </p>
          </div>
        </section>
        
        <footer className="portfolio-footer">
          <p>© {new Date().getFullYear()} Yassine Menssouri.</p>
        </footer>
      </main>
      
      {/* Elementos decorativos para el fondo */}
      <div className="bg-decoration bg-decoration-1"></div>
      <div className="bg-decoration bg-decoration-2"></div>
      <div className="bg-decoration bg-decoration-3"></div>
    </div>
  );
}
