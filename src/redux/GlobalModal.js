import { useSelector } from "react-redux";
import Friend from "../pages/Friend";
import Letter from "../pages/Letter";
import Todo from "../pages/Todo";
import { selectModal } from "./modalSlice";

const modals = [
  {
    type: "FriendModal",
    component: <Friend />,
  },
  {
    type: "LetterModal",
    component: <Letter />,
  },
  {
    type: "TodoModal",
    component: <Todo />,
  },
];

function GlobalModal() {
  // modal type을 string 형태로 받습니다.
  const { modalType, isOpen } = useSelector(selectModal);
  if (!isOpen) return; //isOpen이 false일때 모달을 닫아줌

  const renderModal = () => {
    const findModal = modals.find((modal) => {
      return modal.type === modalType;
    });
    return findModal.component;
  };
  return (
    <div>
      {renderModal()}
    </div>
  );
}

export default GlobalModal;
