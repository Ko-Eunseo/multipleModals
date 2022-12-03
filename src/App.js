import React from 'react';
import GlobalModal from './redux/GlobalModal';
import Card from './pages/Card';
import styled from 'styled-components';
import Menu from './component/Menu';
const Box = styled.div`
  width: 420px;
  margin: 0 auto;
`;
const ModalWrap = styled.div`
  display: flex;
`;
function App() {
  return (
    <div className="App">
      <Box>
        <Menu />
        <ModalWrap>
          <Card />
          <GlobalModal />
        </ModalWrap>
      </Box>
    </div>
  );
}

export default App;
