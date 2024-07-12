
import Heading from "../components/Heading";
import SignUpForm from "../features/authentication/SignUpForm";

const Users = () => {
  return (
    <div>
      <Heading as="h1">Create new user</Heading>
      <SignUpForm/>
    </div>
  );
};

export default Users;
