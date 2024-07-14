import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updatePassword } from "../../../services/apiUser";

export function useUpdatePassword(){
    const {mutate: updateUserPassword, isLoading} = useMutation({
        mutationFn: ({userId, password}) => updatePassword({userId, password}),
        onSuccess: () => {
            toast.success("Password has been updated")
        },
        onError: (err) => {
            console.log("ERROR:", err)
            toast.error(err.message)
        }
    })

    return {updateUserPassword, isLoading};
}