import {
  BsLinkedin,
  BsGithub,
  BsWhatsapp,
  BsCaretDownSquare,
} from "react-icons/bs";
import { Link} from "react-scroll";
import React, { Fragment } from "react";

const Header = () => {
  return (
    <Fragment>
      <div
        id="header"
        className="flex w-full bg-transparent p-5 justify-between top-0 left-0 right-0 z-10 self-start items-center"
      >
        <div className="">
          <ul className="flex gap-5 text-3xl">
            <li>
              <a
                href="https://github.com/JailerWebdeveloper"
                target="_blank"
                className="hover:text-purple-700  transition-colors delay-150"
              >
                <BsGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/jailer-dev-frontend/"
                target="_blank"
                className="hover:text-purple-700  transition-colors delay-150"
              >
                <BsLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/+573222861882"
                target="_blank"
                className="hover:text-purple-700  transition-colors delay-150"
              >
                <BsWhatsapp />
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden md:block">
          <ul className="flex gap-5 text-xl justify-center content-center items-center">
            <li>
              <Link
                to="aboutme"
                smooth={true}
                duration={500}
                className="hover:text-purple-700  transition-colors delay-150 font-bold"
              >
                About me
              </Link>
            </li>
            <li>
              <Link
                to="proyectos"
                smooth={true}
                duration={500}
                className="hover:text-purple-700  transition-colors delay-150 font-bold"
              >
                Works
              </Link>
            </li>
            <li>
              <Link
                to="Skills"
                smooth={true}
                duration={500}
                className="hover:text-purple-700  transition-colors delay-150 font-bold"
              >
                Skills
              </Link>
            </li>
            <li>
              <a href="mailto:jailerwebwork@gmail.com?subject=Hey! i see you portrait &body=Nice to meet you!" className="btn btn-outline  btn-secondary">
                <span>Send me a email!</span>
              </a>
            </li>
          </ul>
        </div>
        <details className="dropdown dropdown-end block md:hidden">
          <summary className="btn btn-outline btn-default">
            <BsCaretDownSquare className="text-xl" />
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 flex gap-2">
            <li>
              <Link
                to="proyectos"
                smooth={true}
                duration={500}
                className="hover:text-purple-700 btn btn-outline  btn-secondary  transition-colors delay-150 font-bold"
              >
                Works
              </Link>
            </li>
            <li>
            <a href="mailto:jailerwebwork@gmail.com?subject=Hey! i see you portrait &body=Nice to meet you!" className="btn btn-outline  btn-secondary">
                <span>Send me a email!</span>
                </a>
            </li>
          </ul>
        </details>
      </div>
    </Fragment>
  );
};

export default Header;
