import { useState } from "react";
import { CardProduct } from "../components/products/CardProduct";
import { ContainerFilter } from "../components/products/ContainerFilter";
import { prepareProducts } from "../helpers";
import { useFilteredProduct, useProduct } from "../hooks";
import { Pagination } from "../components/shared/Pagination";

export const CellPhonesPage = () => {
  const [page, setPage] = useState(1);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const {
    data: products,
    isLoading,
    totalProducts,
  } = useFilteredProduct({
    page,
    brands: selectedBrands,
  });

  if (isLoading || !products) return;

  const preparedProducts = prepareProducts(products);

  return (
    <>
      <h1 className="text-5xl font-semibold text-center mb-12">Celulares</h1>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        <ContainerFilter
          setSelectedBrands={setSelectedBrands}
          selectedBrands={selectedBrands}
        />

        {isLoading ? (
          <div className="col-span-2 flex items-center justify-center h-[500px]">
            <p className="text-2xl">Cargando....</p>
          </div>
        ) : (
          <div className="col-span-2 lg:col-span-2 xl:col-span-4 flex flex-col gap-12">
            <div className="grid  gap-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
              {preparedProducts.map((product) => (
                <CardProduct
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  colors={product.colors}
                  img={product.images[0]}
                  slug={product.slug}
                  variants={product.variants}
                />
              ))}
            </div>
            {/** Todo Paginacion */}
            <Pagination
              totalItems={totalProducts}
              page={page}
              setPage={setPage}
            />
          </div>
        )}
      </div>
    </>
  );
};
