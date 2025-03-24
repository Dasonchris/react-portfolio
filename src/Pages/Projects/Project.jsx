import React from "react";
import "./Project.css";
import img1 from "../../assets/sit.png";
import Navbar from "../../Components/Narvbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import ScrollTotop from "../../Components/ScrollToTop/ScrollTotop";
import img2 from "../../assets/frame.png";

function Project() {
  return (
    <>
      <Navbar />

      <div className="project">
        <div className="image">
          <img src={img1} alt="" />
        </div>
        <div className="project-container">
          <h1>Projects</h1>
          <p>
            Hi, I'm Prince Awlavi, a passionate Frontend Developer <br />{" "}
            specializing in React, JavaScript, HTML . I love building <br />{" "}
            interactive and scalable web applications that enhance <br />
            user experience. I enjoy solving complex problems and <br />{" "}
            creating intuitive user interfaces.Whether it's developing <br />{" "}
            dynamic web apps or optimizing performance, I'm always <br /> eager
            to learn and innovate. Check out my projects below, Explore my work
            and let's connect.
          </p>
        </div>
      </div>

      <div className="card-section">
        <div className="card">
          <div className="title-div">
            <img src={img2} alt="" />
            <h1 className="title">
              <a href="https://todomatic-pied.vercel.app/">Todomatic</a>
            </h1>
          </div>
          <div className="title-description">
            <p>
              {" "}
              Todomatic- Is a simple yet powerful application designed to help
              users organize their tasks efficiently.
            </p>
          </div>
          <div className="repo-creation-date">
            <p>{"Created on 2025-02-24"}</p>
          </div>
        </div>
        <div className="card">
          <div className="title-div">
            <img src={img2} alt="" />
            <h1 className="title">
              <a href=" https://prince2024-des.github.io/code-generator/">
                qr code-Generator
              </a>
            </h1>
          </div>
          <div className="title-description">
            <p>
            A simple and efficient web application that allows users to input text or URLs and instantly generate a scannable QR code.
            </p>
          </div>
          <div className="repo-creation-date">
            <p>{"Created on 2024-12-02"}</p>
          </div>
        </div>
        <div className="card">
          <div className="title-div">
            <img src={img2} alt="" />
            <h1 className="title">
              <a href="https://prince2024-des.github.io/Vowel-Counter/">
                Vowel-Counter
              </a>
            </h1>
          </div>
          <div className="title-description">
            <p>
              Vowel Counter - Developed a dynamic application that analyzes user
              input and counts the number of vowels in real-time. Built with
              JavaScript{" "}
            </p>
          </div>
          <div className="repo-creation-date">
            <p>{"Created on 2024-11-18"}</p>
          </div>
        </div>
        <div className="card">
          <div className="title-div">
            <img src={img2} alt="" />
            <h1 className="title">
              <a href="https://prince2024-des.github.io/Game/">Game</a>
            </h1>
          </div>
          <div className="title-description">
            <p>
              {" "}
              Game - is a fun and educational game where players guess countries
              based on hints like flags, maps, capitals, or trivia.
            </p>
          </div>
          <div className="repo-creation-date">
            <p>{"Created on 2024-11-20"}</p>
          </div>
        </div>
      </div>
      <div className="btn">
        <a href="https://github.com/Prince2024-des">
          <button>More Projects</button>
        </a>
      </div>

      <ScrollTotop />

      <Footer />
    </>
  );
}

export default Project;
