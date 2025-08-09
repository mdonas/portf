import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useScrollAnimation } from "../hooks/useScrollAnimation.js";

const env = {
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
};

function Contact() {
  const [contactRef, contactVisible] = useScrollAnimation();
  const [titleRef, titleVisible] = useScrollAnimation();

  useEffect(() => {
    // Inicializar EmailJS con la clave pública desde las variables de entorno
    emailjs.init(env.PUBLIC_KEY);
  }, []);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const templateParams = {
        title: "mDonas Portfolio",
        to_email: "mdonasdev@gmail.com",
        from_name: form.name,
        from_email: form.email,
        name: form.name,
        phone: form.phone || "No proporcionado",
        subject: form.subject,
        message: form.message,
        time: new Date().toLocaleString(),
      };

      await emailjs.send(env.SERVICE_ID, env.TEMPLATE_ID, templateParams);

      setSent(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      setTimeout(() => {
        setSent(false);
      }, 3000);
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
      alert(
        "Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-5">
      <h2
        ref={titleRef}
        className={`text-center fw-bold text-white mb-5 scroll-animate ${
          titleVisible ? "visible" : ""
        }`}
      >
        Contacto
      </h2>
      <div className="container" id="contact" ref={contactRef}>
        <div className="row justify-content-center">
          <div
            className={`col-10 text-white pt-3 px-md-5 scroll-animate-scale ${
              contactVisible ? "visible" : ""
            }`}
          >
            <p className="lead mb-4">
              ¿Quieres ponerte en contacto conmigo? Completa el formulario y te
              responderé pronto.
            </p>
            <form
              className="row g-4"
              onSubmit={handleSubmit}
              autoComplete="off"
            >
              <div className="col-md-6">
                <label htmlFor="name" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control bg-dark text-white border-0"
                  id="name"
                  placeholder="Tu nombre completo"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control bg-dark text-white border-0"
                  id="email"
                  placeholder="ejemplo@dominio.com"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="phone" className="form-label">
                  Teléfono (Opcional)
                </label>
                <input
                  type="tel"
                  className="form-control bg-dark text-white border-0"
                  id="phone"
                  placeholder="+34 XXX XXX XXX"
                  name="phone"
                  value={form.phone || ""}
                  onChange={handleChange}
                />
              </div>
              <div className="col-12">
                <label htmlFor="message" className="form-label">
                  Mensaje
                </label>
                <textarea
                  className="form-control bg-dark text-white border-0"
                  id="message"
                  placeholder="Escribe tu mensaje aquí..."
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  required
                ></textarea>
              </div>
              <div className="col-12 d-flex justify-content-between gap-2 pb-3">
                <button
                  type="reset"
                  className="btn btn-outline-light px-4"
                  disabled={loading}
                >
                  Limpiar
                </button>
                <button
                  type="submit"
                  className="btn btn-primary px-4"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span
                        className="spinner-border spinner-border-sm me-2"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      Enviando...
                    </>
                  ) : (
                    "Enviar Mensaje"
                  )}
                </button>
              </div>
              {sent && (
                <div className="col-12">
                  <div className="alert alert-success mt-3" role="alert">
                    <i className="bi bi-check-circle me-2"></i>
                    ¡Mensaje enviado! Gracias por contactarme.
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
