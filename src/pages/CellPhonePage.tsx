import { Separator } from "../components/shared/Separator";
import { formarPrice } from "../helpers";

export const CellPhonePage = () => {
  return (
    <>
      <div className="h-fit flex flex-col md:flex-row gap-16 mt-8">
        {/* Grid de imagenes */}
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
            <div className="flex gap-3"></div>
          </div>
        </div>
      </div>
    </>
  );
};
