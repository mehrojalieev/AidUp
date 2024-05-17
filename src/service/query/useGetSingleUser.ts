import { useQuery } from "@tanstack/react-query";
import ApiInstance from "../../api";


export const useGetSingleDoctor = (doctor_id: any) => {
    return useQuery({
        queryKey: ['single_doctor', doctor_id],
        queryFn: () => {
            return ApiInstance.get(`/doctors/get/${doctor_id}`).then(res => res.data)
        }
    })
}


// QUERY => GET SINGLE USER
export const useGetSingleUser = (user_id: any) => {
    return useQuery({
        queryKey: ['single_user', user_id],
        queryFn: () => {
            return ApiInstance.get(`/users/get/${user_id}`).then(res => res.data)
        }
    })
}
