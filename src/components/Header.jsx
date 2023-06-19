import logo from "../images/new-logo.png";

function Header() {
  const onEnter = (e) => {
    e.target.style.opacity = "70%";
    e.target.style.transition = "0.2s";
  };

  const onLeave = (e) => {
    e.target.style.opacity = "100%";
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg justify-content-center align-items-center fixed-top px-5 py-2 bg-dark">
        <a href=".">
          <img
            src={logo}
            alt="Logo with text Sri Charan"
            className="navbar-brand px-5 py-2"
            style={{ height: "2.2rem", width: "auto" }}
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
          />
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="nav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a
                href="/#home"
                class="nav-link link-light"
                onMouseEnter={onEnter}
                onMouseLeave={onLeave}
                style={{ fontSize: "0.8rem", textTransform: "uppercase" }}
              >
                Home
              </a>
            </li>
            <li class="nav-item">
              <a
                href="/#about"
                class="nav-link link-light"
                onMouseEnter={onEnter}
                onMouseLeave={onLeave}
                style={{ fontSize: "0.8rem", textTransform: "uppercase" }}
              >
                About
              </a>
            </li>
            <li class="nav-item">
              <a
                href="/#resume"
                class="nav-link link-light"
                onMouseEnter={onEnter}
                onMouseLeave={onLeave}
                style={{ fontSize: "0.8rem", textTransform: "uppercase" }}
              >
                Resume
              </a>
            </li>
            <li class="nav-item">
              <a
                href="/#portfolio"
                class="nav-link link-light"
                onMouseEnter={onEnter}
                onMouseLeave={onLeave}
                style={{ fontSize: "0.8rem", textTransform: "uppercase" }}
              >
                Portfolio
              </a>
            </li>
            <li class="nav-item">
              <a
                href="/#contact"
                class="nav-link link-light"
                onMouseEnter={onEnter}
                onMouseLeave={onLeave}
                style={{ fontSize: "0.8rem", textTransform: "uppercase" }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
