export const Newsletter =() => {
    return <div className="relative bg-gray-500 text-white py-20">
        {/*imagen de fondo */}
        <div className="absolute inset-0 bg-cover bg-center opacity-70 h-full"
        style={{ backgroundImage: 'url(/img/background-newsletter.webp'}} />

        {/**Contenido newsLetter */}
        <div className="container z-10 relative p-5 md:p-0 flex justify-center md:justify-start">
            <div className="w-full text-black bg-white p-12 space-y-5 md:w-[50%] lg:w-[40%] md:ml-12">
                <p className="text-xs uppercase font-semibold">
                    Suscribite a nuestro boletin y recibe promociones exclusivas
                </p>
                <p className="text-xs font-medium w-[80%] leading-5">
                    introduce tu correo para recibir nuevas ofertas
                </p>
                <form className="flex flex-col gap-5 xl:flex-row">
                    <input type="email" 
                           className="border border-slate-200 focus:outline-none rounded-full py-3 px-5 w-full text-xs font-medium"
                           placeholder="Correo Electronico" />
                    <button className="bg-black text-white font-semibold rounded-full uppercase tracking-wider py-3 text-xd xl:px-5">Suscribirme</button>
                </form>
            </div>  
        </div>
    </div>
}