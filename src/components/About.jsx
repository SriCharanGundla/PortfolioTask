import Me from "../images/me.jpg";

function About() {
  const Age = () => {
    const today = new Date();
    const birthDate = new Date("2002-10-26");
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;
    return age;
  };

  return (
    <div
      id="about"
      className="d-flex flex-column justify-content-center align-items-center bg-dark w-100 gap-4"
      style={{ minHeight: "100vh", width: "100vw" }}
    >
      <h1
        className="text-light"
        style={{
          fontWeight: "300",
          textTransform: "uppercase",
          letterSpacing: "2px",
          fontSize: "1.7rem",
        }}
      >
        A Little About Me
      </h1>
      <div className="d-flex justify-content-evenly align-items-start">
        <div>
          <img src={Me} alt="Sri Charan" style={{ height: "300px" }} />
        </div>
        <div className="d-flex flex-column w-50 mt-4">
          <p
            className="text-light"
            style={{ fontFamily: "Roboto Slab", fontWeight: "300" }}
          >
            Hey! My name is Sri Charan and I'm an aspiring web developer with a
            passion for full stack development. I'm currently a fourth year
            undergraduate student at Vellore Institute of Technology pursuing a
            degree in Computer Science and Engineering with Specialization in
            Blockchain Technology.
          </p>
          <p
            className="text-light"
            style={{ fontFamily: "Roboto Slab", fontWeight: "300" }}
          >
            When I'm not busy studying or working on a project, I enjoy playing
            video games, watching movies, and listening to music.
          </p>
          <hr className="mb-1" style={{ borderTop: "1px solid white" }} />
          <div className="d-flex justify-content-center align-items-center px-5">
            <div className="w-100 d-flex flex-column justify-content-center align-items-baseline">
              <p
                className="text-light"
                style={{
                  fontFamily: "Roboto Slab",
                  fontWeight: "300",
                }}
              >
                Name:{" "}
                <span style={{ color: "#9f9f9f" }}>Sri Charan Gundla</span>
              </p>
              <p
                className="text-light"
                style={{ fontFamily: "Roboto Slab", fontWeight: "300" }}
              >
                Age: <span style={{ color: "#9f9f9f" }}>{Age()}</span>
              </p>
            </div>
            <div className="w-100 d-flex flex-column justify-content-center align-items-baseline">
              <p
                className="text-light"
                style={{ fontFamily: "Roboto Slab", fontWeight: "300" }}
              >
                Email:{"  "}
                <a
                  href="mailto:gundlasricharan@gmail.com"
                  className="link-light text-decoration-none"
                  style={{ fontFamily: "Roboto Slab", fontWeight: "300" }}
                >
                  <span style={{ color: "#3b85ff" }}>
                    gundlasricharan@gmail.com
                  </span>
                </a>
              </p>
              <p
                className="text-light"
                style={{ fontFamily: "Roboto Slab", fontWeight: "300" }}
              >
                From: <span style={{ color: "#9f9f9f" }}>Hyderabad, India</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
