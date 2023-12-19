import React, { useState, useEffect } from "react";
import logo from "../../Assests/icon.jpg";
import Typewriter from "typewriter-effect";
import { SiGithub, SiGmail } from "react-icons/si";
import { AiFillLinkedin } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HomeContainerWrapper } from "./HomeStyled";
import { IoIosArrowDropupCircle } from "react-icons/io";

const Home = () => {
  const [isScrollVisible, setIsScrollVisible] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 200) {
        setIsScrollVisible(true);
      } else {
        setIsScrollVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      <HomeContainerWrapper>
        <div id="home">
          <div id="img-icon">
            <img src={logo} alt="my-pic" />
          </div>

          <div id="home-content">
            <div id="greeting">
              <label> Hey There..!! </label>
            </div>

            <div id="name">
              <h1> I'M GauravBisht </h1>

              <Typewriter
                options={{
                  strings: ["Software Engineer", "MERN Stack Developer"],
                  autoStart: true,
                  delay: 100,
                  loop: true,
                }}
              />
            </div>

            <div id="profile-links">
              <SiGithub
                className="home_icons git_icn"
                onClick={() => window.open("https://github.com/BishtGaurav0")}
              />
              <AiFillLinkedin
                className="home_icons ldn_icn"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/gaurav-bisht-8427321a3/"
                  )
                }
              />
              <BsFillTelephoneFill
                className="home_icons ph_icn"
                onClick={() => window.open("tel:+91-920-587-6704")}
              />
              <SiGmail
                className="home_icons mail_icn"
                onClick={() => window.open("mailto:bisht1999gaurav@gmail.com")}
              />
            </div>
          </div>
        </div>

        {isScrollVisible && (
          <div className="scroll_to_top" onClick={handleScrollToTop}>
            <IoIosArrowDropupCircle />
          </div>
        )}
      </HomeContainerWrapper>
    </>
  );
};

export default Home;
