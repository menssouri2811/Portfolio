"use client";

import "../globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { React, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import PersonalInfo from "./personalInfo";
import Card from "./card";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      anchorPlacement: "top-bottom",
      componentDidMount() {
        AOS.init();
      },
    });
  }, []);

  return (
    <div>
      <PersonalInfo />
      <main className="container">
        <section data-aos="fade-up">
          <h2>Sobre Mí</h2>
          <p data-aos="fade-left">
            Soy un desarrollador full stack con más de dos años de experiencia
            en el desarrollo de aplicaciones web.
          </p>
          <p data-aos="fade-left">
            Soy una persona responsable, seria y con una gran pasión por
            aprender todo lo relacionado con la tecnología. Me adapto
            rápidamente a nuevos entornos y disfruto trabajando en equipo para
            alcanzar objetivos comunes.
          </p>
        </section>

        <section data-aos="fade-up">
          <h2>Habilidades Técnicas</h2>
          <ul>
            <li data-aos="fade-left">
              Lenguajes de Programación: Groovy, Java, JavaScript.
            </li>
            <li data-aos="fade-left">
              Frameworks y Librerías: Grails, jQuery.
            </li>
            <li data-aos="fade-left">Desarrollo Web: HTML, CSS.</li>
            <li data-aos="fade-left">
              Bases de Datos: MySQL, SQL Server, Oracle.
            </li>
            <li data-aos="fade-left">Servidores: Tomcat, Apache.</li>
            <li data-aos="fade-left">Sistemas Operativos: Ubuntu, CentOS.</li>
          </ul>
        </section>

        <section data-aos="fade-up">
          <h2>Experiencia Profesional</h2>
          <Card
            header="Desarrollador Full Stack - ecityclic"
            body={
              <div>
                <p>
                  <strong>Febrero 2022 - Presente</strong>
                </p>
                <ul>
                  <li data-aos="fade-left">
                    Desarrollo de aplicaciones web utilizando Groovy y Grails.
                  </li>
                  <li data-aos="fade-left">
                    Implementación de interfaces de usuario con JavaScript,
                    HTML, CSS y jQuery.
                  </li>
                  <li data-aos="fade-left">
                    Gestión y configuración de bases de datos MySQL, SQL Server
                    y Oracle.
                  </li>
                  <li data-aos="fade-left">
                    Despliegue y configuración de aplicaciones en servidores
                    Tomcat y Apache en sistemas Ubuntu.
                  </li>
                  <li data-aos="fade-left">
                    Gestión de tickets e incidencias técnicas.
                  </li>
                </ul>
              </div>
            }
          />
        </section>

        <section data-aos="fade-up">
          <h2>Educación</h2>
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
        </section>

        <section data-aos="fade-up">
          <h2>Proyectos Destacados</h2>
          <Card
            header="¡Vuelve pronto para ver mis últimos proyectos!"
            body={
              <p>
                Actualmente, estoy trabajando en el desarrollo de varios
                proyectos que pronto estarán disponibles en esta sección.
              </p>
            }
          />
        </section>

        <section className="contact" data-aos="fade-up">
          <h2>Contacto</h2>
          <p>
            Estoy disponible para nuevas oportunidades y colaboraciones. No
            dudes en ponerte en contacto conmigo a través de mi correo
            electrónico{" "}
            <a href="mailto:menssouri2811@gmail.com">menssouri2811@gmail.com</a>{" "}
            o en{" "}
            <a href="https://www.linkedin.com/in/yassine-menssouri">LinkedIn</a>
            .
          </p>
        </section>
      </main>
    </div>
  );
}
