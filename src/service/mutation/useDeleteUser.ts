import { useMutation } from "@tanstack/react-query";
import ApiInstance from "../../api";

export const useDeleteUser = () => {
    return useMutation({
        mutationFn: (user_id) => {
            return ApiInstance.delete(`/users/delete/${user_id}`)
            .then(res => res.data )
        }
    })
}