import React, { useState } from "react";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Formulario enviado!");
  };

  return (
    <section className="py-20 bg-gray-100 text-gray-900">
      <div className="container mx-auto px-6">
        {/* Título de la sección */}
        <h2 className="text-4xl font-extrabold text-center text-primary mb-8">
          Contáctanos
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-16 mb-12">
          {/* Formulario de contacto */}
          <div className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold text-primary mb-6 text-center">
              Formulario de Contacto
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-semibold text-gray-700"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                  placeholder="Tu nombre"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-semibold text-gray-700"
                >
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                  placeholder="Tu correo electrónico"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-lg font-semibold text-gray-700"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                  rows="4"
                  placeholder="Escribe tu mensaje"
                  required
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-primary text-white px-8 py-3 rounded-lg shadow-lg hover:bg-emphasis transition-all duration-300"
                >
                  Enviar mensaje
                </button>
              </div>
            </form>
          </div>

          {/* Información de contacto */}
          <div className="w-full md:w-1/2">
            <h3 className="text-3xl font-semibold text-primary mb-6 text-center md:text-left">
              Información de Contacto
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center text-lg text-gray-700">
                <svg
                  className="w-6 h-6 text-primary mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17l5 5m0 0l5-5m-5 5V3"
                  />
                </svg>
                <span className="text-gray-700">
                  contacto@redseguridadmascotas.org
                </span>
              </li>
              <li className="flex items-center text-lg text-gray-700">
                <svg
                  className="w-6 h-6 text-primary mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
                <span className="text-gray-700">(123) 456-7890</span>
              </li>
              <li className="flex items-center text-lg text-gray-700">
                <svg
                  className="w-6 h-6 text-primary mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2 12l9-9m0 0l9 9m-9-9v18"
                  />
                </svg>
                <span className="text-gray-700">
                  Facebook | Instagram | Twitter
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Mapa de ubicación (debo cambiar esta ubicacion a algo más real) */}
        <div className="text-center">
          <h3 className="text-3xl font-semibold text-primary mb-6">
            Nuestra Ubicación
          </h3>
          <div className="w-full h-64 rounded-lg overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5912393198057!2d-77.0340920846483!3d38.89875017957066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDExJzM2LjQiTiA3N8KwMjUnMjguMiJQ!5e0!3m2!1sen!2sus!4v1683589250201"
              width="100%"
              height="100%"
              style={{ border: "0" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
