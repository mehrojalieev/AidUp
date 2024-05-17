import { useMutation } from "@tanstack/react-query";
import ApiInstance from "../../api";
export const useRegister = () => {
    return useMutation({
        mutationFn: (data) => {
            return ApiInstance.post("/auth/register", data).then((res) => res.data);
        }
    });
};