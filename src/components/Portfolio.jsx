import WordCounter from "../images/wordcounter.png";
import Calculator from "../images/calculator.png";
import ColorPicker from "../images/colorpicker.png";
import FetchRecords from "../images/fetchrecords.png";
import AgeCalculator from "../images/agecalculator.png";

function Portfolio() {
  const onEnter = (e) => {
    e.target.style.opacity = "90%";
    e.target.style.borderBottom = "1px solid #fff";
    e.target.style.width = "fit-content";
    e.target.style.transition = "0.2s";
  };

  const onLeave = (e) => {
    e.target.style.opacity = "100%";
    e.target.style.borderBottom = "0px";
    e.target.style.paddingBottom = "0px";
    e.target.style.transition = "0.2s";
  };
  return (
    <div
      id="portfolio"
      className="d-flex flex-column justify-content-center align-items-center px-3 mb-5 py-3"
    >
      <h3
        className="text-light text-center mt-5"
        style={{
          fontWeight: "500",
          textTransform: "uppercase",
          letterSpacing: "1px",
        }}
      >
        My Latest Projects
      </h3>
      <p className="text-light w-50 text-center" style={{ fontWeight: "500" }}>
        Check out my{" "}
        <a
          href="https://github.com/SriCharanGundla"
          className="link-primary text-decoration-none"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>{" "}
        for more details on all my projects. There are many more projects that I
        have worked on, but I have listed only a few of them here.
      </p>
      <div className="d-flex justify-content-evenly align-items-stretch w-75 p-3 gap-5">
        <div
          class="card border border-1 border-light"
          style={{
            minHeight: "200px",

            width: "18rem",
            backgroundColor: "transparent",
          }}
        >
          <img class="card-img-top" src={WordCounter} alt="" />
          <div class="card-body">
            <p class="card-subtitle text-light" style={{ fontWeight: "300" }}>
              ReactJS
            </p>
            <h5 class="card-title text-light">Word Counter</h5>

            <p class="card-text text-light">
              The Word Counter is a simple tool to count the number of words in
              a paragraph in real time.
            </p>
            <a
              href="https://sricharangundla.github.io/WordCounter/"
              class="nav-link link-light"
              style={{
                textTransform: "uppercase",
                position: "relative",
                top: "33%",
              }}
              target="_blank"
              rel="noreferrer"
            >
              <span onMouseEnter={onEnter} onMouseLeave={onLeave}>
                {" "}
                Visit Project
              </span>{" "}
              <i class="lni lni-arrow-top-right"></i>
            </a>
          </div>
        </div>
        <div
          class="card border border-1 border-light"
          style={{
            minHeight: "200px",

            width: "18rem",
            backgroundColor: "transparent",
          }}
        >
          <img class="card-img-top" src={Calculator} alt="" />
          <div class="card-body">
            <p class="card-subtitle text-light" style={{ fontWeight: "300" }}>
              ReactJS
            </p>
            <h5 class="card-title text-light">Calculator</h5>
            <p class="card-text text-light">
              A simple calculator built using ReactJS.
            </p>
            <a
              href="https://sricharangundla.github.io/ReactCalculator/"
              class="nav-link link-light"
              style={{
                textTransform: "uppercase",
                position: "relative",
                top: "5%",
              }}
              target="_blank"
              rel="noreferrer"
            >
              <span onMouseEnter={onEnter} onMouseLeave={onLeave}>
                Visit Project
              </span>{" "}
              <i class="lni lni-arrow-top-right"></i>
            </a>
          </div>
        </div>
        <div
          class="card border border-1 border-light"
          style={{
            minHeight: "200px",

            width: "18rem",
            backgroundColor: "transparent",
          }}
        >
          <img class="card-img-top" src={ColorPicker} alt="" />
          <div class="card-body">
            <p class="card-subtitle text-light" style={{ fontWeight: "300" }}>
              ReactJS
            </p>
            <h5 class="card-title text-light">Color Picker</h5>
            <p class="card-text text-light">
              A color picker that changes the button color based on the user's
              choice.
            </p>
            <a
              href="https://sricharangundla.github.io/ColorPicker/"
              class="nav-link link-light"
              style={{
                textTransform: "uppercase",
                position: "relative",
                top: "30%",
              }}
              target="_blank"
              rel="noreferrer"
            >
              <span onMouseEnter={onEnter} onMouseLeave={onLeave}>
                Visit Project
              </span>{" "}
              <i class="lni lni-arrow-top-right"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-stretch w-75 p-3 gap-5">
        <div
          class="card border border-1 border-light"
          style={{
            minHeight: "200px",
            width: "18rem",
            backgroundColor: "transparent",
          }}
        >
          <img class="card-img-top" src={FetchRecords} alt="" />
          <div class="card-body">
            <p class="card-subtitle text-light" style={{ fontWeight: "300" }}>
              ReactJS
            </p>
            <h5 class="card-title text-light">JSON Records Fetching</h5>
            <p class="card-text text-light">
              In this project, I have fetched the records of the users API from
              the DummyJSON website.
            </p>
            <a
              href="https://sricharangundla.github.io/FetchRecords/"
              class="nav-link link-light"
              style={{
                textTransform: "uppercase",
                position: "relative",
                top: "26%",
              }}
              target="_blank"
              rel="noreferrer"
            >
              <span onMouseEnter={onEnter} onMouseLeave={onLeave}>
                Visit Project
              </span>{" "}
              <i class="lni lni-arrow-top-right"></i>
            </a>
          </div>
        </div>
        <div
          class="card border border-1 border-light"
          style={{
            minHeight: "200px",
            height: "fit-content",
            width: "18rem",
            backgroundColor: "transparent",
          }}
        >
          <img class="card-img-top" src={AgeCalculator} alt="" />
          <div class="card-body">
            <p class="card-subtitle text-light" style={{ fontWeight: "300" }}>
              ReactJS
            </p>
            <h5 class="card-title text-light">Age Calculator</h5>
            <p class="card-text text-light">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a
              href="https://sricharangundla.github.io/AgeCalculator/"
              class="nav-link link-light"
              style={{ textTransform: "uppercase" }}
              target="_blank"
              rel="noreferrer"
            >
              <span onMouseEnter={onEnter} onMouseLeave={onLeave}>
                Visit Project
              </span>{" "}
              <i class="lni lni-arrow-top-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
