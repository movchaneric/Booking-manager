import { useState } from "react";
import Button from "../../components/Button";
import Form from "../../components/Form";
import Input from "../../components/Input";
import VerticalFormRow from "../../components/VerticalFormRow";
import { useLogin } from "./hooks/useLogin";

const LoginForm = () => {
  const [email, setEmail] = useState("testuser@example.com");
  const [password, setPassword] = useState("password123");
  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    //One of the values are missing
    if (!email || !password) {
      return;
    }
    login({ email, password });
  }

  return (
    <Form onSubmit={handleSubmit}>
      {/* EMAIL */}
      <VerticalFormRow label="Email address">
        <Input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          disabled={isLoading}
        />
      </VerticalFormRow>
      {/* PASSWORD */}
      <VerticalFormRow label="Password">
        <Input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          disabled={isLoading}
        />
      </VerticalFormRow>
      {/* BUTTON */}
      <VerticalFormRow>
        <Button size="large" disabled={isLoading}>
          {isLoading ? <p>Loading...</p> : <p>Log in</p>}
        </Button>
      </VerticalFormRow>
    </Form>
  );
};

export default LoginForm;
