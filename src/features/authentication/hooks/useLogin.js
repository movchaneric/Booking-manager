import { useMutation } from "@tanstack/react-query";
import { postLogin as loginApi } from "../../../services/apiAuthentication";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  // const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (data) => {

      navigate("/dashboard", {replace: true});
    },
    onError: (err) => {
      toast.error("Email or password are incorrect");
    },
  });

  return { login, isLoading };
}
