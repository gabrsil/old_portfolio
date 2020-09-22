import React from 'react';
import SidePanel from '../../Components/SidePanel'
import MainPanel from '../../Components/MainPanel'
import { Container } from './styles';


const Home: React.FC = () => {
  return (
    <Container>
   
      <SidePanel/>
      <MainPanel/>
    

    </Container>
  );
}

export default Home;