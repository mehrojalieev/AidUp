import { useMutation } from "@tanstack/react-query";
import ApiInstance from "../../api";

export const useCreateDoctor = () => {
    return useMutation({
        mutationFn:  (data) => {
               return  ApiInstance.post('/doctors/create', data)
            }
        
    });
};
