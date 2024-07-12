import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { postLogout as logoutAPI} from "../../../services/apiAuthentication";
import toast from "react-hot-toast";

export function useLogout(){
    const queryClient = useQueryClient();
    const navigate = useNavigate()

    const {mutate: logout, isLoading} = useMutation({
        mutationFn: (userId) => logoutAPI(userId),
        onSuccess:() => {
            queryClient.removeQueries(["user"])
            navigate("/login", {replace: true})
        },
        onError: () => {
            toast.error("Error loggin out");
        },
    })
    return {logout, isLoading}
}