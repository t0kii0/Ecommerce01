export const AboutPage = () => {
  return (
    <div className="space-y-5">
      <h1 className="text-center text-4xl font-semibold tracking-tigth mb-5">
        Nuestra empresa
      </h1>

      <img
        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZWRpZmljaW8lMjBkZSUyMGxhJTIwZW1wcmVzYXxlbnwwfHwwfHx8MA%3D%3D"
        alt="imagen de fondo"
        className="h-[600px] w-full object-cover"
      />

      <div className="flex flex-col gap-4 tracking-tighter leading-7 text-sm font-medium text-slate-800">
        <p>
          CelularesBaratos es una tienda en linea que se dedica a la venta de
          celulares, fundada en 2021. Nuestrp objetivo es ofrecer a nuestros
          clientes la mejor calidad en celulares. Contamos con un equipo de
          profesionales que se encaargan de seleccionar las mejores productos
          para ti.
        </p>
        <p>
          En CelularesBaratos nos preocupamos por la calidad de nuestros
          productos, por eso trabajamos con los mejores proveedores del mercado.
          Nuestros celulares son revisados y probados antes de ser enviados a
          nuestros clientes, para garantizar su funcionamiento y calidad.
        </p>

        <h2 className="text-3xl font-semibold tracking-tight mt-8 mb-4">
          ¡No esperes mas y se el joto que quieres ser!
        </h2>

        <p>
          para mas informacion puedes contactarnos a traves de nuestro correo
          <a href="mailto:correo@celularesbaratos.com">
            correo@celularesbaratos.cl
          </a>{" "}
          o llamando al <a href="tel:9966554433">9966554433</a>
        </p>
      </div>
    </div>
  );
};
