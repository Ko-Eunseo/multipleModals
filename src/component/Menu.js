import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { openModal } from '../redux/modalSlice';

const Nav = styled.nav`
  width: 400px;
  border-radius: 10px;
  background-color: aliceblue;
  text-align: center;
  filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.25));
  margin-right: 16px;
  ul {
    display: flex;
    list-style: none;
    padding: 0;
    justify-content: space-between;
  }
  li {
    padding: 8px;
  }
`;

const Menu = ({children}) => {
  const dispatch = useDispatch();
  const handleFriendModal = () => {
    dispatch(
      openModal({
        modalType: "FriendModal",
        isOpen: true,
      })
    )
  }
  const handleLetterModal = () => {
    dispatch(
      openModal({
        modalType: "LetterModal",
        isOpen: true,
      })
    )
  }
  const handleTodoModal = () => {
    dispatch(
      openModal({
        modalType: "TodoModal",
        isOpen: true,
      })
    )
  }
  return (
    <Nav>
    <ul>
      <li onClick={handleFriendModal}>친구모달</li>
      <li onClick={handleLetterModal}>편지모달</li>
      <li onClick={handleTodoModal}>투두모달</li>
    </ul>
  </Nav>
  )
}

export default Menu;