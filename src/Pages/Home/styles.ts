import styled from 'styled-components';

export const Container = styled.div`
  
    display: flex;
    max-width: 1200px;
    padding-top: 40px;
    background-color: #f2f2f2;
    margin: 0 auto;

    @media(max-width: 1180px){
    /* display: flex; */
    flex-direction: column;
  }

`;
