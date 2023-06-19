function Footer() {
  const onEnter = (e) => {
    e.target.style.opacity = "99%";
    e.target.style.transition = "0.2s";
    e.target.style.color = "#3b5998";
  };

  const onLeave = (e) => {
    e.target.style.opacity = "100%";
    e.target.style.transition = "0.2s";
    e.target.style.color = "#fff";
  };
  return (
    <footer
      className="mt-auto p-2 bg-dark" //position-fixed start-0 bottom-0 w-100
      style={{ opacity: "80%" }}
    >
      <div className="d-flex justify-content-around align-items-center">
        <div className="text-center text-md-end d-flex justify-content-center align-items-center gap-2">
          <a href=".">
            <i
              class="fa-brands fa-facebook fa-xl"
              style={{ color: "#fff" }}
              onMouseEnter={onEnter}
              onMouseLeave={onLeave}
            ></i>
          </a>
          <a href=".">
            <i
              class="fa-brands fa-twitter fa-xl"
              style={{ color: "#fff" }}
              onMouseEnter={onEnter}
              onMouseLeave={onLeave}
            ></i>
          </a>
          <a href=".">
            <i
              class="fa-brands fa-instagram fa-xl"
              style={{ color: "#fff" }}
              onMouseEnter={onEnter}
              onMouseLeave={onLeave}
            ></i>
          </a>
          <a
            href="https://www.linkedin.com/in/sricharangundla/"
            target="_blank"
            rel="noreferrer"
          >
            <i
              class="fa-brands fa-linkedin fa-xl"
              style={{ color: "#fff" }}
              onMouseEnter={onEnter}
              onMouseLeave={onLeave}
            ></i>
          </a>
          <a
            href="https://github.com/SriCharanGundla"
            target="_blank"
            rel="noreferrer"
          >
            <i
              class="fa-brands fa-github fa-xl"
              style={{ color: "#fff" }}
              onMouseEnter={onEnter}
              onMouseLeave={onLeave}
            ></i>
          </a>
        </div>
        <div className="text-center text-md-start">
          <p
            className="text-light m-0 p-0"
            style={{
              fontWeight: "300",
              fontFamily: "Lato",
              fontSize: "0.9rem",
              letterSpacing: "1px",
            }}
          >
            &copy; 2023 SRI CHARAN GUNDLA
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
