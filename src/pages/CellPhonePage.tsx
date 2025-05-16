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

export const CellPhonePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { product, isLoading, isError } = useProduct(slug || " ");
  return (
    <>
      <div className="h-fit flex flex-col md:flex-row gap-16 mt-8">
        <GridImages images={[]} />

        <div>Galeria de imagenes</div>
        <div className="flex-1 space-y-5">
          <h1 className="text-3xl font-bold tracking-tight">
            Samsung Galaxy S21 Ultra 5g
          </h1>
          <div className="flex gap-5 item-center">
            <span className="tracking-wide text-lg font-semibold">
              {formarPrice(1200)}
            </span>
            <div className="relative">
              {/* TAG -> Agotado */}
              <span>Agotado</span>
            </div>
          </div>
          <Separator />
          {/* Caracteristicas */}
          <ul className="space-y-2 ml-7 my-10">
            <li className="text-sm flex items-center gap-2 tracking-tight font-medium">
              <span className="bg-black w-{5px] h-[5px] rounded-full"></span>
              256 GB de almacenamiento
            </li>
          </ul>
          <div className="flex flex-col gap-3">
            <p>color: Azul</p>
            <div className="flex gap-3">
              <button
                className={`w-8 h-8 rounded-full flex justify-center items-center ${
                  true ? "border border-slate-800" : ""
                }`}
              >
                <span
                  className="w-[26PX] h-[26PX] rounded-full"
                  style={{ backgroundColor: "blue " }}
                />
              </button>
            </div>
          </div>

          {/* OPCIONES DE ALMACENAMIENTO */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-medium">Almacenamiento disponible</p>
            <div className="flex gap-3">
              <select className="border border-gray-300 rounded-lg px-3 py-1">
                <option value="">256Gb</option>
              </select>
            </div>
          </div>
          {/* COMPRAR */}
          {false ? (
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
      <ProductDescription />
    </>
  );
};
