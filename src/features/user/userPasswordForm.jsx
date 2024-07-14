import { useForm } from "react-hook-form";
import Form from "../../components/Form";
import Input from "../../components/Input";
import VerticalFormRow from "../../components/VerticalFormRow";
import Button from "../../components/Button";
import FormRow from "../../components/FormRow";
import Spinner from '../../components/Spinner'
import { useUpdatePassword } from "./hooks/useUpdatePassword";
import { useUser } from "../authentication/hooks/useUser";

const UpdatePassword = () => {
    const { register, handleSubmit, formState: { errors }, getValues, reset } = useForm()
    const {updateUserPassword, isLoading} = useUpdatePassword()
    const {user} = useUser()
    
    const {_id: userId} = user
    
    function onUpdate(data){
        const {password} = data;
        
        // New password doesnot exist
        if(!getValues("password") && !getValues("passwordConfirm")) return;

        // Update user password
        updateUserPassword({password, userId}, {
            onSettled: reset()
        })
        
    }

    if(isLoading) return <Spinner/>

  return (
    <Form onSubmit={handleSubmit(onUpdate)}>
      <FormRow label="New password" errors={errors?.password?.message}>
        <Input type="password" disabled={isLoading} {...register("password", {minLength: {value: 6, message: "Password must be over 6 digits"}})} />
        
      </FormRow>
      <FormRow label="Confirm new password" errors={errors?.passwordConfirm?.message}> 
        <Input type="password" disabled={isLoading} {...register("passwordConfirm",
                 {validate: (value) =>
                     getValues("password") === value || "Password must match"})}
                  />
      </FormRow>
      <VerticalFormRow>
        <Button type="submit" disabled={isLoading}>Update password</Button>
      </VerticalFormRow>
    </Form>
  )
};

export default UpdatePassword;
