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

const Account = () => {
  //Get current user from cache
  const {user} = useUser()
  const {updateFullName, isLoading: isUpdaing} = useUpdateData();
  const {fullName, email, _id: userId} = user
  const [userFullName, setUserFullName] = useState(fullName);

  console.log(userFullName)

  useEffect(() => {
    if(user){
      setUserFullName(fullName)
    }
  }, [user])

  function handleDataSubmit(e){
    e.preventDefault();
    console.log(userFullName)
    //update fullName
    updateFullName({fullName: userFullName, userId}); //userFullName is undefined inside updateData api call 
  }

  return <>
  {/* Update user section */}
      <UpdateSection>
        <Form onSubmit={handleDataSubmit}>
          <Heading as="h1">Update data</Heading>
          <VerticalFormRow label="Email address">
            <Input type="email" value={email} disabled={true}/>
          </VerticalFormRow>
          <VerticalFormRow label="Full name">
            <Input type="text" value={userFullName} onChange={(e) => setUserFullName(e.target.value)} disabled={isUpdaing}/>
          </VerticalFormRow>
          <VerticalFormRow label="Avatar image">
            <FileInput type="file" disabled={isUpdaing}/>
          </VerticalFormRow>
          <VerticalFormRow>
            <Button disabled={isUpdaing}>Update</Button>
          </VerticalFormRow>
        </Form>
      </UpdateSection>

      <UpdateSection>
        <Form>
          <Heading as="h1">Update password</Heading>
          <VerticalFormRow label="New password">
            <Input type="password"/>
          </VerticalFormRow>
          <VerticalFormRow label="Confirm new password">
            <Input type="password"/>
          </VerticalFormRow>
          
          <VerticalFormRow>
            <Button>Update password</Button>
          </VerticalFormRow>
        </Form>
      </UpdateSection>
    </>;
};

const UpdateSection = styled.div`
  padding: 5rem;
`

export default Account;
