import { useMutation } from "@tanstack/react-query";
import ApiInstance from "../../api";

export const useUpdateUser = () => {
    return useMutation({
        mutationFn: (updateData) => {
            return ApiInstance.put('/users/update', updateData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${localStorage.getItem('user-token')}`,
                }
            })
        }
    })
}