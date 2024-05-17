import { useMutation } from "@tanstack/react-query";
import ApiInstance from "../../api";


export const useBookAppointment =() => {
    return useMutation({
        mutationFn: (booking) =>{
            return ApiInstance.post('/bookings/create', booking)
        }
    })
}