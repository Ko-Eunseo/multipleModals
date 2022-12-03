import Modal from "../component/Modal";
import { useDispatch } from "react-redux";
import { closeModal } from "../redux/modalSlice";

const Letter = () => {
  const dispatch = useDispatch();
  const handleCloseModal = () => {
    dispatch(closeModal());
  };
  return (
    <Modal>Letter page
      <h1 onClick={handleCloseModal}>편지</h1>
    </Modal>
  )
}

export default Letter;