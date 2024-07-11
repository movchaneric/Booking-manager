import FormRow from "../../components/FormRow";
import styled from "styled-components";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Textarea from "../../components/Textarea";
import FileInput from "../../components/FileInput";
import Form from "../../components/Form";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addNewCabin, updateCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";
import useCreateCabin from "./useCreateCabin";
import { useEditCabin } from "./useEditCabin";

const CreateCabinForm = ({ cabinToEdit = {}, onCloseModal, isModal }) => {
  const { createCabin, isCreating } = useCreateCabin();
  const { _id: editId, ...editValues } = cabinToEdit;
  const { editCabin, isEditing } = useEditCabin(editId);

  // check if there is cabin that needs an edit
  const isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });

  //get all error messages, each one is seperated by the registered name.
  const { errors } = formState;

  function onSubmit(data) {
    if (isEditSession) {
      editCabin(data);
    } else {
      createCabin(data);
    }
  }

  function onError(error) {
   
  }

  const isWorking = isEditing || isCreating;

  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      type={isModal ? "modal" : "regular"}
    >
      {/* Form rows */}
      <FormRow label="Cabin name">
        <Input
          type="text"
          id="name"
          disabled={isWorking}
          {...register("name", {
            required: "This field is required.",
          })}
        />
        {errors?.name?.message && <Error>{errors.name.message}</Error>}
      </FormRow>
      <FormRow label="Max capacity">
        <Input
          type="number"
          id="maxCapacity"
          disabled={isWorking}
          {...register("maxCapacity", {
            required: "This field is required.",
          })}
        />
        {errors?.maxCapacity?.message && (
          <Error>{errors.maxCapacity.message}</Error>
        )}
      </FormRow>
      <FormRow label="Regular price">
        <Input
          type="number"
          id="regularPrice"
          disabled={isWorking}
          {...register("regularPrice", {
            required: "This field is required.",
          })}
        />
      </FormRow>
      <FormRow label="Discount">
        <Input
          type="number"
          id="discount"
          disabled={isWorking}
          {...register("discount", {
            validate: (value) =>
              value <= getValues().regularPrice ||
              "Discount should be less than the regular price",
          })}
          defaultValue={0}
        />
        {errors?.discount?.message && (
          <Error>{errors?.discount?.message}</Error>
        )}
      </FormRow>

      <FormRow label="Description" id="description">
        <Textarea
          id="description"
          disabled={isWorking}
          {...register("description", {
            required: "This field is required.",
          })}
        />
        {errors?.description?.message && (
          <Error>{errors?.description?.message}</Error>
        )}
      </FormRow>

      {/* TODO: work on image upload and edit cabin  */}
      <FormRow label="Image">
        <FileInput id="image" type="image/*" />
      </FormRow>

      {/* Buttons */}
      <FormRow>
        {/* type is an HTML attribute! - to reset form*/}
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </Button>

        <Button disabled={isWorking}>
          {isEditSession ? "Edit cabin" : "Create new cabin"}
        </Button>
      </FormRow>
    </Form>
  );
};

const Error = styled.span`
  color: var(--color-red-700);
`;

export default CreateCabinForm;
