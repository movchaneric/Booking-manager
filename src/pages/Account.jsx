import { useEffect, useState } from "react";

import styled from "styled-components";
import Input from "../components/Input";
import Form from "../components/Form";
import Heading from "../components/Heading";
import FileInput from "../components/FileInput";
import Button from "../components/Button";
import VerticalFormRow from "../components/VerticalFormRow";

import { useUser } from "../features/authentication/hooks/useUser";
import { useUpdateData } from "../features/user/hooks/useUpdateData";
import UpdatePassword from "../features/user/userPasswordForm";
import FormRow from "../components/FormRow";

const Account = () => {
  //Get current user from cache
  const {user} = useUser()
  const {updateUserData, isLoading: isUpdaing} = useUpdateData();
  
  const {fullName, email, _id: userId} = user
  const [userFullName, setUserFullName] = useState(fullName);

  useEffect(() => {
    if(user){
      setUserFullName(fullName)
    }
  }, [user])

  function handleDataSubmit(e){
    e.preventDefault();
    console.log(userFullName)
    //update fullName
    updateUserData({fullName: userFullName, userId});
  }

  return <>
  {/* Update user section */}
      <UpdateSection>
        <Form onSubmit={handleDataSubmit}>
          <Heading as="h1">Update user data</Heading>
          <FormRow label="Email address">
            <Input type="email" value={email} disabled={true}/>
          </FormRow>
          <FormRow label="Full name">
            <Input type="text" value={userFullName} onChange={(e) => setUserFullName(e.target.value)} disabled={isUpdaing}/>
          </FormRow>
          <FormRow label="Avatar image">
            <FileInput type="file" disabled={isUpdaing}/>
          </FormRow>
          <VerticalFormRow>
            <Button disabled={isUpdaing}>Update</Button>
          </VerticalFormRow>
        </Form>
      </UpdateSection>

      <UpdateSection>
        <Heading as="h1">Update password</Heading>
        <UpdatePassword/> 
      </UpdateSection>
    </>;
};

const UpdateSection = styled.div`
  padding: 5rem;
`

export default Account;
