import { useQuery } from "@tanstack/react-query";
import ApiInstance from "../../api";

export const useGetDoctors = () => {
    return useQuery({
        queryKey: ["get-doctors"],
        queryFn: () => {
            return ApiInstance.get("/doctors/get-all").then((res) => res.data);
        },
    });
};