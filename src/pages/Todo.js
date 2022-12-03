import Modal from "../component/Modal";
import { useDispatch } from "react-redux";
import { closeModal } from "../redux/modalSlice";

const Todo = () => {
  const dispatch = useDispatch();
  const handleCloseModal = () => {
    dispatch(closeModal());
  };
  return (
    <Modal>Todo page
      <h1 onClick={handleCloseModal}>투두</h1>
    </Modal>
  )
}

export default Todo;