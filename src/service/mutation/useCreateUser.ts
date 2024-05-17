import ApiInstance from "../../api";
import { useMutation } from "@tanstack/react-query";

export const useCreateUser = () => {
    return useMutation({
        mutationFn: (data) => {
            return ApiInstance.post('/users/create', data)
        }
    })
}