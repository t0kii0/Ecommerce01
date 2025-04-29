const brands = [
    {
        image: '/img/brands/Apple-Logo.webp',
        alt: 'Apple'
    },    
    {
        image: '/img/brands/honor-logo.png',
        alt: 'Honor'
    },
    {
        image: '/img/brands/huawei-logo.png',
        alt: 'Huawei'
    },
    {
        image: '/img/brands/realme-logo.webp',
        alt: 'Realme'
    },
    {
        image: '/img/brands/Samsung_Logo.webp',
        alt: 'Samsung'
    },    {
        image: '/img/brands/xiaomi-logo.webp',
        alt: 'Xiaomi'
    },
]

export const Brands = () => {
    return <div className="flex flex-col items-center gap-3 pt-16 pb-12">
        <h2 className="font-bold text-2xl">Marcas Disponibles</h2>
        <p className="w-2/3 text-center text-sm md:text-base">
        Tenemos lo mas moderno de tecnologia y los ultimos modelos de celulares Disponibles</p>
        <div className="grid grid-cols-3 gap-6 items-center md:grid-cols-6">
            {
                brands.map((brand, index) =>(
                   <div key ={index}>
                    <img src={brand.image}
                         alt={brand.alt}
                         />
                   </div> 
                ))
            }
        </div>
    </div>
}