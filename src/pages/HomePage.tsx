import { Brands } from "../components/home/Brands";
import { FeatureGrid } from "../components/home/FeatureGrid";
import { ProductGrid } from "../components/home/ProductGrid";
import { popularCelulares, recentCelulares } from "../data/initialData";
import { prepareProducts } from "../helpers";
import { useProduct } from "../hooks";

export const HomePage = () => {
    
    const {products, isLoading} = useProduct ();

    if(isLoading || !products) return <p>Cargando....</p>


    const preapredRecentProducts = prepareProducts(recentCelulares)
    const preparedPopularProducts = prepareProducts(popularCelulares)
    
    return (
    <div>
        <FeatureGrid />
        <ProductGrid 
            title="Nuevos Productos" 
            products={preapredRecentProducts} />

        <ProductGrid title="Productos Destacados"
        products={preparedPopularProducts} />

        <Brands />
    </div>
    )
};
