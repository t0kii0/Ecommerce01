import { Separator } from "../components/shared/Separator";
import { formarPrice } from "../helpers";
import { Minus } from "lucide-react";
import { Plus } from "lucide-react";
import { CiDeliveryTruck } from "react-icons/ci";
import { Link, useParams } from "react-router-dom";
import { BsChatLeftText } from "react-icons/bs";
import { ProductDescription } from "../components/one-product/ProductDescription";
import { GridImages } from "../components/one-product/GridImages";
import { useProduct } from "../hooks";
import { useEffect, useMemo, useState } from "react";
import { VariantProduct } from "../interface";
import { Tag } from "../components/shared/Tag";
import { Loader } from "../components/shared/Loeder";

interface Acc {
  [key: string]: {
    name: string;
    storage: string[];
  };
}

export const CellPhonePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { product, isLoading, isError } = useProduct(slug || " ");

  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedStorage, setSelectedStorage] = useState<string | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<VariantProduct | null>(
    null
  );

  //Agrupamos las varinates por color
  const colors = useMemo(() => {
    return (
      product?.variants.reduce((acc: Acc, variant: VariantProduct) => {
        const { color, color_name, storage } = variant;
        if (!acc[color]) {
          acc[color] = {
            name: color_name,
            storage: [],
          };
        }

        if (!acc[color].storage.includes(storage)) {
          acc[color].storage.push(storage);
        }
        return acc;
      }, {} as Acc) || {}
    );
  }, [product?.variants]);

  //Obten4r el primer color predeterminado si no se ha seleccionado ninguna

  const availableColors = Object.keys(colors);
  useEffect(() => {
    if (!selectedColor && availableColors.length > 0) {
      setSelectedColor(availableColors[0]);
    }
  }, [availableColors, selectedColor]);

  // Actualizar el almacenamiento seleccionado cuando cambia el color
  useEffect(() => {
    if (selectedColor && colors[selectedColor] && !selectedStorage) {
      setSelectedStorage(colors[selectedColor].storage[0]);
    }
  }, [selectedColor, colors, selectedStorage]);

  // obtener la variante seleccionada
  useEffect(() => {
    if (selectedColor && selectedStorage) {
      const variant = product?.variants.find(
        (variant) =>
          variant.color === selectedColor && variant.storage === selectedStorage
      );
      setSelectedVariant(variant as VariantProduct | null);
    }
  }, [product?.variants, selectedColor, selectedStorage]);

  // obtener el stock

  const isOutOfStock = selectedVariant?.stock === 0;

  if(isLoading) return <Loader />

  if(!product || isError) 
    return(  
  <div className="flex justify-center items-center h-[80hv]">
    <p>Producto no encontrado</p>
  </div>
  );

  return (
    <>
      <div className="h-fit flex flex-col md:flex-row gap-16 mt-8">
        <GridImages images={product.images} />

        <div>Galeria de imagenes</div>
        <div className="flex-1 space-y-5">
          <h1 className="text-3xl font-bold tracking-tight">
           {product.name}
          </h1>
          <div className="flex gap-5 item-center">
            <span className="tracking-wide text-lg font-semibold">
              {formarPrice(selectedVariant?.price || product.variants[0].price)}
            </span>
            <div className="relative">
              {isOutOfStock && <Tag contentTag='agotado' />}
            </div>
          </div>
          <Separator />
          {/* Caracteristicas */}
          <ul className="space-y-2 ml-7 my-10">
            { product.features.map((feature) => (
              <li key = {feature} 
              className="text-sm flex items-center gap-2 tracking-tight font-medium">
              <span className="bg-black w-[5px] h-[5px] rounded-full" />
              {feature}
            </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3">
            <p>color: {selectedColor && colors[selectedColor].name}</p>
            <div className="flex gap-3">
              {
                availableColors.map(color => (
                <button
                key ={color}
                className={`w-8 h-8 rounded-full flex justify-center items-center ${
                  selectedColor === color ? "border border-slate-800" : ""
                }`}
                onClick={() => setSelectedColor(color)}
              >
                <span
                  className="w-[26PX] h-[26PX] rounded-full"
                  style={{ backgroundColor: color }}
                />
              </button>))
              }
              
            </div>
          </div>

          {/* OPCIONES DE ALMACENAMIENTO */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-medium">Almacenamiento disponible</p>
            {selectedColor && (
              <div className="flex gap-3">
              <select className="border border-gray-300 rounded-lg px-3 py-1" 
              value = {selectedStorage || ' '}
              onChange={e => setSelectedStorage(e.target.value)}
              >
                {colors[selectedColor].storage.map(storage => (
                  <option value = {storage} key={storage}>{storage}</option>
                ))}
              </select>
            </div>
            )}
          </div>
          {/* COMPRAR */}
          {isOutOfStock? (
            <button
              className="bg-[#f3f3f3] uppercase fonr-semibold tracking-widest text-xs py-4 rounded-full transition-all
                        duration-300 hover:bg-[#e2e2e2] w-full"
              disabled
            >
              Agotado
            </button>
          ) : (
            <>
              {/*Contador */}
              <div className="space-y-3">
                <p className="text-sm font-medium">Cantidad:</p>

                <div className="flex gap-8 px-3 border-slate-200 w-fit rounded-full">
                  <button>
                    <Minus size={15} />
                  </button>
                  <span className="text-slate-500 text-sm">1</span>
                  <button>
                    <Plus size={15} />
                  </button>
                </div>
              </div>

              {/* BOTONES DE ACCION */}
              <div className="flex flex-col gap-3">
                <button
                  className="bg-[#f3f3f3] uppercase fonr-semibold tracking-widest text-xs py-4 rounded-full transition-all
                        duration-300 hover:bg-[#e2e2e2] w-full"
                >
                  Agregar al carro
                </button>
                <button className="bg-black text-white uppercase font-semibold tracking-widest text-xs py-4 rounded-full ">
                  Comprar ahora
                </button>
              </div>
            </>
          )}
          <div className="flex pt-2">
            <div className="flex flex-col gap-1 flex-1 items-center">
              <CiDeliveryTruck size={35} />
              <p className="text-xs font-semibold">Envio Gratis</p>
            </div>
            <Link to="#" className="flex flex-col gap-1 flex-1 items-center">
              <BsChatLeftText size={30} />
              <p className="flex flex-col items-center texter-xs">
                <span className="font-semibold">Necesitas ayuda</span>
                Contactanos aqui
              </p>
            </Link>
          </div>
        </div>
      </div>

      {/* Descripcion */}
      <ProductDescription content={product.description} />
    </>
  );
};
