import { useQuery } from "@tanstack/react-query";
import Company from "../entities/Company";
import ApiClient from "../services/apiClient";

const apiclient = new ApiClient<Company[]>("/companies");

const useCompanies = () =>
  useQuery({
    queryKey: ["comapnies"],
    queryFn: apiclient.getAll,
  });

export default useCompanies;
