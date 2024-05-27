import { useState } from "react";
import Button from "../../components/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../components/Modal";

const AddCabin = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <div>
      {/* add new cabin */}
      <Button onClick={() => setIsOpenModal((prevState) => !prevState)}>
        Add new cabin
      </Button>

      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <CreateCabinForm
            onCloseModal={() => setIsOpenModal(false)}
            isModal={isOpenModal}
          />
        </Modal>
      )}
    </div>
  );
};

export default AddCabin;
