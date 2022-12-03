import styled from 'styled-components';

const Modals = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 10px;
  background-color: aliceblue;
  text-align: center;
  filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.25));
  margin-right: 16px;
  h1 {
    background-color: white;
    margin: 4px;
    padding: 16px;
  }
`;

const Modal = ({children}) => {
  return (
    <Modals>{children}</Modals>
  )
}

export default Modal;