import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Form from "../../components/Form";
import FormRow from "../../components/FormRow";
import Input from "../../components/Input";
import { useRegiter } from "./hooks/useRegister";


//Email regex validator = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const SignUpForm = () => {
    const { register, handleSubmit, formState: { errors }, reset, getValues } = useForm();
    const {register: userRegister, isLoading} = useRegiter();
    
    function onSubmit(data) {  
        const {fullName, email, password} = data;
        userRegister({fullName, email, password},
             {
                onSettled: reset
            })
    }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Full name" errors={errors?.fullName?.message}>
          <Input type="text" {...register("fullName", {required: "This field is required"})}/>
        </FormRow>
        <FormRow label="Email address" errors={errors?.email?.message}>
          <Input type="email" disabled={isLoading}
            id="email"
            {...register("email",
            {required: "This field is required",
            pattern: {
             value: /\S+@\S+\.\S+/,
             message: "Entered value does not match email format"
          }})}/>
        </FormRow>
        <FormRow label="Password (min 6 digits)" errors={errors?.password?.message}>
          <Input type="password" disabled={isLoading} {...register("password", {required: "This field is required", minLength:{
            value: 6, message: "Password must be over 6 digits"
          }})}/>
        </FormRow>
        <FormRow label="Repeat password" errors={errors?.passwordConfirm?.message}>
        <Input type="password" disabled={isLoading} {...register("passwordConfirm", {
          required: "This field is required",
          validate: (value) => value === getValues("password") || "Passwords must match"
        })} />
      </FormRow>
        <FormRow>
          <Button variation="secondary" type="reset" disabled={isLoading}>Cancel</Button>
          <Button type="submit" disabled={isLoading}>Add new user</Button>
        </FormRow>
    </Form>
  )
};

export default SignUpForm;
