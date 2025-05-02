function AboutUs() {
  return (
    <section className="py-20 bg-gray-100 text-gray-900">
      <div className="container mx-auto px-6">
        {/* Título principal */}
        <h2 className="text-4xl font-extrabold text-center text-primary mb-8">
          Red de Seguridad Alimentaria para Mascotas
        </h2>

        {/* Introducción */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="w-full md:w-1/2 px-6 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Nuestra Misión
            </h3>
            <p className="text-lg text-gray-700">
              Somos una organización comprometida con la educación sobre los
              riesgos alimenticios para las mascotas. Buscamos evitar accidentes
              y enfermedades causadas por una mala alimentación, ayudando a los
              dueños a tomar decisiones informadas para el bienestar de sus
              animales.
            </p>
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <img
              src="https://placekitten.com/500/300"
              alt="Asobi"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>

        {/* Objetivos */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
          <h3 className="text-3xl font-semibold text-center text-primary mb-6">
            Nuestros Objetivos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                Educación Continua
              </h4>
              <p className="text-gray-700">
                Proporcionamos recursos educativos para que los dueños de
                mascotas puedan aprender a identificar los alimentos peligrosos
                para sus animales.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                Consultas Especializadas
              </h4>
              <p className="text-gray-700">
                Colaboramos con veterinarios para ofrecer consultas
                especializadas sobre nutrición y prevención de accidentes
                alimenticios.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                Guías de Alimentación Segura
              </h4>
              <p className="text-gray-700">
                Disponemos de guías prácticas y fáciles de seguir para
                garantizar que los alimentos que se le dan a las mascotas sean
                seguros.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                Campañas de Sensibilización
              </h4>
              <p className="text-gray-700">
                Luchamos para aumentar la conciencia sobre los riesgos
                alimenticios mediante campañas educativas y de sensibilización.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonios */}
        <div className="mb-12">
          <h3 className="text-3xl font-semibold text-center text-primary mb-6">
            Lo que dicen nuestros miembros
          </h3>
          <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3">
              <p className="text-lg text-gray-700 mb-4">
                "Gracias a la Red de Seguridad Alimentaria, pude salvar a mi
                perro de un envenenamiento por chocolate. Ahora sé qué alimentos
                son peligrosos y cómo evitarlos."
              </p>
              <p className="text-sm text-gray-500">- Laura R.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3">
              <p className="text-lg text-gray-700 mb-4">
                "El consejo sobre cómo alimentar a mi gato me ha sido
                invaluable. Ahora puedo proporcionarle una dieta segura y
                equilibrada."
              </p>
              <p className="text-sm text-gray-500">- Carlos M.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3">
              <p className="text-lg text-gray-700 mb-4">
                "Me uní a esta causa porque quiero ayudar a prevenir tragedias
                relacionadas con la alimentación de mascotas. ¡Estoy más que
                feliz de ser parte de la red!"
              </p>
              <p className="text-sm text-gray-500">- María P.</p>
            </div>
          </div>
        </div>

        {/* Llamado a la acción */}
        <div className="text-center">
          <h3 className="text-3xl font-semibold text-primary mb-4">
            Únete a nuestra causa
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Si te importa la seguridad de tus mascotas y deseas contribuir a
            nuestra misión, ¡te invitamos a unirte a nosotros!
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
