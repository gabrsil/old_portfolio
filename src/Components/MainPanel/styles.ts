import styled from "styled-components";


export const Container = styled.div`
    

    width: calc(100% - 380px - 60px);
    padding: 20px 0;
    

    section.wrapper {
       
        
    }

    @media (max-width: 1180px) {
        width: 100%;
    }

`;


export const SkillsArea = styled.section`


width: 100%;
display: flex;
flex-direction: row;

flex-wrap: wrap;
margin: 0 auto;
align-items: start;
justify-content: center;


@media (max-width: 920px){
    flex-direction: column;
    align-items: center;

}


`

export const SkillsCard = styled.section`

 width: 50%;

 max-width: 350px;
 min-width: 350px;
 height: auto;



 h1 {
   
     text-transform: uppercase;
     font-weight: 760;
     color: var(--main-gray2);
    
 }


 ul {
     margin: 15px 8px;
    

    li {
        margin: 10px 0;
        color: var(--main-gray2);
    }

 }




 :nth-child(1) {
    margin-right: 12px;
}

:nth-child(2) {
    margin-left: 12px;
}

@media (max-width: 920px){
  
     width: 80%;
     max-width: 500px;

    :nth-child(1) {
    margin-right: 0;
    }

:nth-child(2) {
    margin-left: 0;
}
    
     
 }

 @media (max-width: 400px){
    min-width: 260px;
 }
 


`