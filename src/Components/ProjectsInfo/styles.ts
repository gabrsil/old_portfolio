import styled from 'styled-components';

export const Container = styled.div`
    
    margin: 10px 0;



    p {
        font-size: 1.2rem;
        color: var(--main-gray2);
        margin: 10px 5px;
 
    }

    p.pjct-title {
       
        line-height: 35px;
        width: 120px;

    }

    @media (max-width: 1180px) {
    
        width: 900px;
        margin: 0 auto;

    }

    @media (max-width: 920px){
        padding: 0 15px;
    }

    @media (max-width: 900px) {
    
    width: 100%;
    margin: 0 auto;

}
`;
