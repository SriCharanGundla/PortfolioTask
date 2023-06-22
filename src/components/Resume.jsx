import "../main.css";

function Resume() {
  const techDiv = {
    height: "fit-content",
    minHeight: "140px",
    width: "300px",
    border: "1px solid gray",
    padding: "10px 10px 0px 10px",
    borderRadius: "12px",
    boxShadow: "2px 3px 5px cyan",
  };

  return (
    <div
      id="/resume"
      className="lightbox-content wrapper d-flex flex-column justify-content-around align-items-around px-5 pt-5 mb-5"
    >
      <h2
        className="text-light text-center my-3"
        style={{
          fontWeight: "300",
          textTransform: "uppercase",
          letterSpacing: "1px",
        }}
      >
        Resume
      </h2>
      <div class="resume-section single-section my-5">
        <div class="d-flex justify-content-center align-items-center">
          <div class="d-flex justify-content-center align-items-stretch">
            <div class="col-12 col-md-6">
              <div
                class="col-block education pe-0"
                style={{ width: "max-content" }}
              >
                <h3 class="col-title" style={{ fontWeight: "300" }}>
                  Education
                </h3>
                <div class="resume-item">
                  <span class="item-arrow"></span>
                  <h5 class="item-title" style={{ fontWeight: "300" }}>
                    Bachelor of Technology
                  </h5>
                  <span class="item-details">
                    Vellore Institute of Technology / 2020 - Present
                  </span>
                  <p class="item-description">
                    B.Tech CSE with Specialization in Blockchain Technology
                  </p>
                </div>
                <div class="resume-item">
                  <span class="item-arrow"></span>
                  <h5 class="item-title" style={{ fontWeight: "300" }}>
                    Higher Secondary School
                  </h5>
                  <span class="item-details">
                    St. Joseph's Junior College / 2018 - 2020
                  </span>
                  <p class="item-description">
                    PCM Stream, Telangana State Board of Intermediate Education
                  </p>
                </div>
                <div class="resume-item">
                  <span class="item-arrow"></span>
                  <h5 class="item-title" style={{ fontWeight: "300" }}>
                    High School
                  </h5>
                  <span class="item-details">
                    Howard Public School / 2005 - 2018
                  </span>
                  <p class="item-description">
                    Central Board of Secondary Education
                  </p>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-6">
              <div
                class="col-block experience ps-0"
                style={{ width: "max-content" }}
              >
                <h3 class="col-title" style={{ fontWeight: "300" }}>
                  Experience
                </h3>
                <div class="resume-item">
                  <span class="item-arrow"></span>
                  <h5 class="item-title" style={{ fontWeight: "300" }}>
                    Full Stack Intern
                  </h5>
                  <span class="item-details">
                    Ethnus / May 2023 - July 2023
                  </span>
                  <p class="item-description">
                    Full Stack Intern working on Web Development projects
                  </p>
                </div>
                <div class="resume-item">
                  <span class="item-arrow"></span>
                  <h5 class="item-title" style={{ fontWeight: "300" }}>
                    PRISM Research Intern
                  </h5>
                  <span class="item-details">
                    Samsung R&D Institute, India / December 2022 - July 2023
                  </span>
                  <p class="item-description">
                    Research Intern working on a Blockchain Project
                  </p>
                </div>
                <div class="resume-item">
                  <span class="item-arrow"></span>
                  <h5 class="item-title" style={{ fontWeight: "300" }}>
                    Transcriptionist
                  </h5>
                  <span class="item-details">Rev / August 2021 - Present</span>
                  <p class="item-description">
                    Freelance Transcriptionist at Rev
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex flex-column justify-content-center align-items-center px-5 my-5">
        <h3 className="text-light text-center" style={{ fontWeight: "300" }}>
          Technical Competencies
        </h3>
        <div className="d-flex justify-content-around align-items-stretch w-75 p-3">
          <div style={techDiv}>
            <h5 className="text-light" style={{ fontWeight: "300" }}>
              Languages
            </h5>
            <p className="text-left" style={{ color: "#9f9f9f" }}>
              Java, HTML, CSS, Sass, JavaScript, JQuery, MySQL, Solidity, Python
            </p>
          </div>
          <div style={techDiv}>
            <h5 className="text-light" style={{ fontWeight: "300" }}>
              Development
            </h5>
            <p className="text-left" style={{ color: "#9f9f9f" }}>
              Linux, Windows, Virtual Machines, React.js, Node.js, Bootstrap,
              MongoDB, NumPy, Pandas
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-around align-items-stretch w-75 p-3 mb-4">
          <div style={techDiv}>
            <h5 className="text-light" style={{ fontWeight: "300" }}>
              Project Management
            </h5>
            <p className="text-left" style={{ color: "#9f9f9f" }}>
              GitHub, Jupyter Notebooks, Kanban, Presentation Skills, Team
              Leader / Management, Team Communication
            </p>
          </div>
          <div style={techDiv}>
            <h5 className="text-light" style={{ fontWeight: "300" }}>
              Interests
            </h5>
            <p className="text-left" style={{ color: "#9f9f9f" }}>
              Software Development, Web Development, Machine Learning,
              Blockchain
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
