import { useMutation } from "@tanstack/react-query";
import ApiInstance from "../../api";


export const useDeleteBooking = () =>{
    return useMutation({
        mutationFn: (booking_id) => {
            return ApiInstance.delete(`/bookings/delete/${booking_id}`).then(res => res.data)
        }
    })
}