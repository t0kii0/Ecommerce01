import { useGlobalStore } from "../../store/global.store";

export const Sheet = () => {
  const sheetContent = useGlobalStore((state) => state.sheetContent);
  const closeSheet = useGlobalStore((state) => state.closeSheet);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
      <div className="bg-white  text-black h-screen w-[500px] shadow-lg">
        {}
      </div>
    </div>
  );
};
