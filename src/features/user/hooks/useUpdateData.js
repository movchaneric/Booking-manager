import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateData } from "../../../services/apiUser";


export function useUpdateData(){
    const queryClient = useQueryClient()

    const {mutate: updateUserData, isLoading} = useMutation({
        mutationFn: ({fullName, userId}) => updateData({fullName, userId}),
        onSuccess: () => {
            toast.success('User data has been updated')
            queryClient.invalidateQueries({queryKey: ['user']})
        },
        onError: (err) => {
            console.log("ERROR:", err)
            toast.error("Update user data error");
        }
    })

    return {updateUserData, isLoading}
}