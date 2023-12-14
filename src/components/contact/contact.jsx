import React, { useState } from "react";
import "./contact.css";

const contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.target);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
      });
  
      if (response.ok) {
       
        Swal.fire({
          title: "¡Éxito!",
          text: "Su consulta se envió correctamente.",
          icon: "success",
          confirmButtonText: "Aceptar",
        });
        form.reset();
      } else {
        throw new Error("Hubo un problema al enviar su consulta. Por favor, inténtalo de nuevo.");
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error.message,
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    } 
    setIsSubmitting(false)
  };
  
  return (
    <>
      <div className="container" id="contact">
        <div className="contentText">
          <h1>¿Tenes alguna consulta?</h1>
          <div className="contentRedes">
            <div className="Redes">
              <ion-icon name="mail-outline" className="iconRed"></ion-icon>
              <p className="ml-2"> hiloamarillobylp@gmail.com </p>
            </div>
            <br />
            <div className="Redes">
              <ion-icon name="logo-whatsapp" className="iconRed"></ion-icon>
              <p>+54 9 3517 07-5371</p>
            </div>
            <br />
            <div className="Redes">
              <ion-icon name="location-outline" className="iconRed"></ion-icon>
              <p>Córdoba, capital Argentina</p>
            </div>
          </div>
        </div>

        <form
          id="form"
          className="form"
          action="https://formsubmit.co/leoneljuanstanton@hotmail.com"
          method="POST"
          onSubmit={handleSubmit}
        >
          <div className="form-control">
            <label htmlFor="username">Nombre</label>
            <input type="text" id="username" name="name" required />
          </div>
          <div className="form-control">
            <label htmlFor="email">Correo</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-message">
            <label htmlFor="message">Mensaje</label>
            <textarea
              name="message"
              placeholder="Por favor escribe tu mensaje aqui..."
              id="textarea"
              rows="10"
              cols="50"
              required
            ></textarea>
          </div>
          {isSubmitting ? (
            <button className="ButtonSending" disabled={isSubmitting}>
              <span>Enviando...</span>
            </button>
          ) : (
            <button className="Button">
              <span>Enviar</span>
              <svg
                width="50"
                height="50"
                viewBox="0 0 74 74"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                  fill="white"
                ></path>
              </svg>
            </button>
          )}

          <input
            type="hidden"
            name="_next"
            value="http://localhost:5173/"
          ></input>
          <input type="hidden" name="_captcha" value="false"></input>
        </form>
      </div>
    </>
  );
};

export default contact;
