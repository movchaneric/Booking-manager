import { useMutation } from "@tanstack/react-query";
import { postUserRegister as registerAPI} from "../../../services/apiAuthentication";
import toast from "react-hot-toast";

export function useRegiter() {
    const {mutate: register, isLoading} = useMutation({
        mutationFn: ({fullName, email, password}) => registerAPI({fullName, email, password}),
        onSuccess: () => {
            toast.success("New user has been created")
            
        },
        onError: (err) => {
            toast.error(err.message)
        },
        
    })
    return {register, isLoading} 
}