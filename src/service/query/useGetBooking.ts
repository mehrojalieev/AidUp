import { useQuery } from "@tanstack/react-query";
import ApiInstance from "../../api";


export const useGetBooking = () => {
    return useQuery({
        queryKey: ['get-booking'],
        queryFn: () => {
            return ApiInstance.get('/bookings/get-all').then(res => res.data)
        }
    })
}