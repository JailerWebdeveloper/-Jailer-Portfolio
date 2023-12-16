import Header from "./components/Header";
import Project from "./components/Projects";
import "./styles.css";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { useState } from "react";
import { Link, Element } from "react-scroll";
import css from "./assets/css.png";
import html from "./assets/html.png";
import js from "./assets/js.png";
import react from "./assets/react.png";
import figmaland from "./assets/figmaland.png";
import Monitor from "./assets/Monitor.png";
import tailwind from "./assets/tailwind.png";
import github from "./assets/github.png";
import database from "./assets/database.png";
import mui from "./assets/mui.png";
import Course from "./components/Courses.jsx";
import html5 from "./assets/HTML5CSS3.png";
import Slider from "react-slick";
import foto from "./assets/fotoperfil.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo1 from "./assets/logo1.png";
import { PiHandWavingDuotone } from "react-icons/pi";
import Encriptador from "./assets/Encriptador.png";
import python from "./assets/Python.png";
import reactc from "./assets/react.jpg";
import git from "./assets/git.png";
function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [courses, setCourses] = useState([
    {
      id: 1,
      name: "HTML5 & CSS3 Avanzed",
      description: "Alura Oracle Academy",
      image: html5,
      date: "2023",
    },
    {
      id: 2,
      name: "Python Essentials",
      description: "Cisco Networking Academy",
      image: python,
      date: "2023",
    },
    {
      id: 3,
      name: "React Essentials and Hooks",
      description: "Selflearning & Research",
      image: reactc,
      date: "Since 2022",
    },
    {
      id: 4,
      name: "Git & Github",
      description: "Alura Oracle Academy",
      image: git,
      date: "2023",
    },
  ]);
  const [skills, setSkills] = useState([
    {
      name: "HTML",
      image: html,
    },
    {
      name: "CSS",
      image: css,
    },
    {
      name: "Javascript",
      image: js,
    },
    {
      name: "React",
      image: react,
    },
    {
      name: "Tailwind",
      image: tailwind,
    },
    {
      name: "Github",
      image: github,
    },
    {
      name: "MongoDB",
      image: database,
    },
    {
      name: "Material UI",
      image: mui,
    },
  ]);
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Alura-Encriptador",
      description: "Responsive Text Encryptor and Decryptor",
      link: "https://jailerwebdeveloper.github.io/Encriptador-alura/",
      image: Encriptador,
      tags: "HTML, CSS, JS",
    },
    {
      id: 2,
      name: "Landing-page",
      description: "Landing-page made with Boostrap and Html5 ",
      link: "https://jailerwebdeveloper.github.io/LandingPage-With-Boostrap/",
      image: figmaland,
      tags: "HTML, CSS, Boostrap5",
    },
    {
      id: 4,
      name: "Financial monitor",
      description: "Application for monitoring the states of currencies and stocks using the World Bank API.",
      link: "https://monitorfinancieroupc.netlify.app",
      image: Monitor,
      tags: "HTML, CSS, Tailwind, Reactjs",
    },
  ]);
  return (
    <>
      {/*Hero*/}
      <div className="min-h-screen fondo bg-no-repeat bg-cover ">
        <Element name="hero" className="hero  min-h-screen backdrop-blur-sm ">
          <Header />
          <div className="hero-overlay bg-opacity-60 "></div>
          <div className="hero-content text-center text-neutral-content ">
            <div className="max-w-md">
              <p className="text-6xl bebas bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent  ">
                I'M JAILER{" "}
              </p>
              <div className="avatar my-7  group">
                <div className="w-24 mask mask-hexagon relative">
                  <img src={logo1} className="" />
                </div>
                <a className="rounded-full absolute -bottom-5 left-7 w-10 h-10 bg-[#1d232a] p-2  ">
                  <PiHandWavingDuotone className="w-full h-full text-yellow-500 wave" />
                </a>
              </div>
              <h1 className="my-5 text-7xl font-bold bebas  bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                FRONT END <br /> DEVELOPER
              </h1>
            </div>
          </div>
          <Link
            to="aboutme"
            smooth={true}
            spy={true}
            duration={300}
            className="self-end mb-6 text-6xl animate-bounce hover:cursor-pointer hover:text-purple-500 transition-colors delay-100"
          >
            <BsFillArrowDownCircleFill />
          </Link>
        </Element>
      </div>
      {/*Hero*/}
      <Element name="aboutme" className="flex justify-center w-full h-60 my-5 mt-20">
        <div className="hero">
          <div className=" w-full flex-col lg:flex-row-reverse">
            <div>
              <h1 className="text-5xl font-bold text-shadow text-white sm:text-center">
                HI! I'M JAILER
              </h1>
              <p className="py-6 max-w-2xl break-words text-white sm:text-justify sm:w-4/5 sm:mx-auto ">
                I am a young student of software engineering with extensive
                knowledge in everything related to front-end development applied
                in software such as ReactJS, and multiple styling frameworks
                like Tailwind and Material UI. Additionally, I can implement
                databases using MongoDB and Oracle SQL. I also have knowledge in
                version control using Git/GitHub, and I am capable of
                implementing designs created in platforms like Figma to meet the
                client's requirements.
              </p>
            </div>
          </div>
        </div>
      </Element>
      <Element name="proyectos" className="p-10 flex justify-center flex-col">
        <span className="text-6xl text-white text-center bebas text-shadow bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Projects
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-auto h-full gap-4 p-10 place-items-center  my-5">
          {projects.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      </Element>

      <Element
        name="Skills"
        className="flex flex-col justify-center w-full p-10"
      >
        <span className="text-6xl text-center text-white bebas mt-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-shadow">
          Skills
        </span>
        <span className=" text-center text-xl text-white break-words	">
          Since 2020 studying on my own and numerous courses to always be
          prepared
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 my-5 w-full gap-8 md:w-1/2  md:mx-auto">
          {skills.map((skill) => (
            <>
              <div className="flex gap-2 items-center justify-center">
                <img className="w-10" src={skill.image} alt="logo" />
                <span className="text-white text-xl">{skill.name}</span>
              </div>
            </>
          ))}
        </div>
      </Element>

      <Element name="Formacion" className="flex flex-col justify-center w-full">
        <span className="text-6xl text-center text-white bebas mt-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-shadow">
          Certificates
        </span>
        <div className=" flex justify-center">
          <Slider {...settings} className="w-4/5 h-full  my-2">
            {courses.map((course) => (
              <Course key={course.id} course={course} />
            ))}
          </Slider>
        </div>
      </Element>
    </>
  );
}

export default App;
