function Contact() {
  return (
    <div
      id="contact"
      className="d-flex flex-column justify-content-center align-items-center bg-light p-5"
    >
      <i
        class="fa-regular fa-paper-plane fa-2xl"
        style={{ color: "#000000" }}
      ></i>
      <h3
        className="text-dark mt-4"
        style={{ fontWeight: "300", textTransform: "uppercase" }}
      >
        Get in touch
      </h3>
      <p
        className="text-dark text-center"
        style={{ fontWeight: "400", width: "400px", fontSize: "1rem" }}
      >
        Have an idea for a project or just want to chat? Feel free to send me an
        email!
      </p>
      <a
        href="mailto:gundlasricharan@gmail.com"
        className="btn btn-outline-primary text-center"
      >
        Say Hello!
      </a>
    </div>
  );
}

export default Contact;
