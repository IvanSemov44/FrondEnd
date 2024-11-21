import { useQuery } from "@tanstack/react-query";
import Item from "../entities/Item";
import ApiClient from "../services/apiClient";

const apiClient = new ApiClient<Item[]>("/items");

const useItems = () =>
  useQuery({
    queryKey: ["items"],
    queryFn: apiClient.getAll,
  });

export default useItems;
