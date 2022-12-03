import Modal from "../component/Modal";
import { useDispatch } from "react-redux";
import { closeModal } from "../redux/modalSlice";

const Friend = () => {
  const dispatch = useDispatch();
  const handleCloseModal = () => {
    dispatch(closeModal());
  };
  return (
    <Modal>Friend page
      <h1 onClick={handleCloseModal}>친구</h1>
    </Modal>
  )
}

export default Friend;