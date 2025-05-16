import { useQuery } from "@tanstack/react-query";
import { getProductsBySlug } from "../../actions";

export const useProduct = (slug: string) => {
  const {
    data: product,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProductsBySlug(slug),
    retry: false,
  });
  return { product, isError, isLoading };
};
