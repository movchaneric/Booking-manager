import styled from "styled-components";
import Modal from "../../components/Modal";

const CabinDeletForm = () => {
  console.log("delete modal opened");
  return <Delete>Delet modal</Delete>;
};

const Delete = styled.div`
  background-color: red;
`;
export default CabinDeletForm;
