import { useMutation } from "@tanstack/react-query";
import ApiInstance from "../../api";

export const useDeleteDoctor = () => {
    return useMutation({
        mutationFn: (doctor_id) => {
            return ApiInstance.delete(`/doctors/delete/${doctor_id}`).then(res => res.data)
        }
    })
}