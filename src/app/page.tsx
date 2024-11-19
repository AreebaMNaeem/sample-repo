import Image from "next/image";
import Link from "next/link";
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Home() {
  return (
    <div>
      {/* Home Section */}
      <section className="home flex flex-wrap items-center justify-center min-h-screen text-center p-8">
        <div className="content">
          <h2 className="text-5xl font-bold text-white">
            Hi There,<br /> I'm Areeba <span className="text-orange-500">Naeem</span>
          </h2>
          <p className="text-2xl text-white mt-4">
            I am into <span className="text-orange-500">Web Development</span>
          </p>
          <Link
            href="/about"
            className="btn text-white bg-orange-500 hover:bg-orange-600 mt-6 inline-block py-2 px-6 rounded-full"
          >
            <span>About Me</span>
          </Link>
          <div className="socials mt-8">
            <ul className="social-icons flex justify-center gap-4">
              <li>
                <a
                  className="facebook text-white hover:text-blue-500"
                  href="https://www.facebook.com/profile.php?id=100075464850301"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a
                  className="instagram text-white hover:text-pink-500"
                  href="https://www.instagram.com/areebaa.naeem/"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  className="linkedin text-white hover:text-blue-700"
                  href="https://www.linkedin.com/in/areeba-naeem-bse168/"
                  target="_blank"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a
                  className="github text-white hover:text-gray-500"
                  href="https://github.com/AreebaMNaeem"
                  target="_blank"
                  aria-label="GitHub"
                >
                  <i className="fab fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="image mt-8">
          <Image
            src="/assets/me1.png" // replace with actual path
            alt="Profile Image"
            width={300}
            height={300}
            className="rounded-full border-4 border-#ff7b00"
          />
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <h2 className="heading">
          <i className="fas fa-user-alt"></i> About <span>Me</span>
        </h2>

        <div className="row">
          <div className="image">
            <img
              draggable="false"
              className="tilt"
              src="/assets/me1.png" // replace with actual path
              alt="Areeba Naeem"
            />
          </div>
          <div className="content">
            <h3>I'm Areeba Naeem</h3>
            <span className="tag">Software Engineer | Web Developer</span>

            <p>
              Hello! I'm Areeba Naeem, As a distinguished Web Developer, I excel
              in the art of crafting impeccable digital experiences, leveraging
              my profound expertise in Frontend Development, React, Firebase, and
              WordPress. My fervor for UI/UX design ensures that each project I
              undertake transcends mere functionality to achieve a harmonious blend
              of aesthetic brilliance and intuitive user experience. Complementing my
              core competencies, I possess a robust acumen in Digital Marketing and
              Up-Work, enabling me to deliver holistic and strategic solutions that
              propel success in the ever-evolving digital realm. Let us embark on a
              journey to create extraordinary digital masterpieces together.
            </p>

            <div className="box-container">
              <div className="box">
                <p>
                  <span>Age: </span> 17
                </p>
                <p>
                  <span>Phone: </span> +92 349-130-3247
                </p>
              </div>
              <div className="box">
                <p>
                  <span>Email: </span> areeban@domain.com
                </p>
                <p>
                  <span>Place: </span> Shah Faisal Colony, Karachi, Pakistan
                </p>
              </div>
            </div>

            <div className="resumebtn">
              <a
                href="https://profile.indeed.com/p/areeban-njks2t1"
                target="_blank"
                className="btn"
              >
                <span>Resume</span>
                <i className="fas fa-chevron-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="education" id="education">
        <h2 className="heading">
          <i className="fas fa-graduation-cap"></i> My <span>Education</span>
        </h2>
        <p className="quote">
          Education is not the learning of facts, but the training of the mind to think.
        </p>
        <div className="box-container">
          <div className="box">
            <div className="image">
              <Image
                src="/assets/smiu1.jpg"
                alt="Sindh Madressatul Islam University"
                width={250}
                height={250}
                className="object-cover"
              />
            </div>
            <div className="content">
              <h3>Bachelors | Software Engineering</h3>
              <p>Sindh Madressatul Islam University | Karachi</p>
              <h4>2023-2026 | In-process</h4>
            </div>
          </div>
          <div className="box">
            <div className="image">
              <Image
                 src="/assets/Screenshot 2024-11-12 115708.png"
                alt="St Lawrence's Girls College"
                width={250}
                height={250}
                className="object-cover"
              />
            </div>
            <div className="content">
              <h3>Intermediate | Computer Science</h3>
              <p> St Lawrence's Girls College | Karachi</p>
              <h4>2020 - 2022 | Completed</h4>
            </div>
          </div>
          <div className="box">
            <div className="image">
              <Image
                src="/assets/sckl.png"
                alt="New Pearls Grammar School"
                width={250}
                height={250}
                className="object-cover"
              />
            </div>
            <div className="content">
              <h3>Matric | Computer Science</h3>
              <p> MIDasia Foundation Academy | Karachi</p>
              <h4>2018 - 2020 | Completed</h4>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
