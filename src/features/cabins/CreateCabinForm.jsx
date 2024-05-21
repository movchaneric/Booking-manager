import FormRow from "../../components/FormRow";
import styled from "styled-components";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Textarea from "../../components/Textarea";
import FileInput from "../../components/FileInput";

const CreateCabinForm = () => {
  return (
    <Form>
      {/* Form rows */}
      <FormRow label="Cabin name">
        <Input type="text" />
      </FormRow>
      <FormRow label="Max capacity">
        <Input type="number" />
      </FormRow>
      <FormRow label="Regular price">
        <Input type="number" />
      </FormRow>
      <FormRow label="Discount">
        <Input type="number" />
      </FormRow>
      <FormRow label="Description">
        <Textarea />
      </FormRow>
      <FormRow label="Image">
        <FileInput />
      </FormRow>

      {/* Buttons */}
      <FormRow>
        {/* type is an HTML attribute! - to reset form*/}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>

        <Button>Create new cabin</Button>
      </FormRow>
    </Form>
  );
};

const Form = styled.form`
  padding: 2.4rem 6rem;
  display: flex;
  flex-direction: column;

  gap: 2.4rem;
  width: 120rem;
  font-size: 1.4rem;

  background-color: var(--color-grey-50);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
`;

export default CreateCabinForm;
