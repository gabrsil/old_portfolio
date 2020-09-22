import styled from 'styled-components';



export const Container = styled.div`

  
  display: flex;
  padding: 10px;
  min-height: 230px;

  

  div.project-photo {
      width: 322px;
      min-height: 230px;

      background-size: cover;
      background-position: center;
      border-radius: 8px;
      min-width: 322px;
  }

  @media (max-width: 920px){
    flex-direction: column;
    padding: 10px;
    
    justify-content: center;
    align-items: center;

    div.project-photo {
        width: 100%;
        margin-bottom: 20px;
        min-width: 100px;
    }

  }

  @media (max-width: 400px){
      div.project-photo {
      width: 100%;
      margin: 10px auto;
      min-height: 200px;
      }
  }




`;

export const Info = styled.section`
    
    margin-left: 15px;

    align-self: flex-start;

    h3.project-title {
        font-weight: 500;
        font-size: 1.3rem;
        color: #333333;
    }

    p.project-description {
        margin: 10px 0;
        padding: 0;
        font-weight: 400;
        color: #828282;
        font-size: 1.1rem;

    }

    button.code-btn {
        border: none;
        margin: 10px 0;
        padding: 10px 20px;
        border: 1px solid #8c6bd6;
      
        font-weight: 500;
        font-size: 0.9rem;
        border-radius: 5px;
        color: #fff;
        background-color: #8c6bd6;
        cursor: pointer;
        outline:none;
        transition: 0.2s linear;
    }

    button.code-btn:hover {
       

        background-color: transparent;
        color: #8c6bd6;
    }

    @media (max-width: 920px){
        margin: 0;
        
    }


`

interface IPjctProps {
    color: string | undefined,
    font: string | undefined,
}

export const TecTag = styled("li")<IPjctProps>`

    max-width: 100px;
    color: #fff;
    background-color: ${props => props.color};
    padding: 5px 10px;
    color: ${props => props.font};
    text-transform: lowercase;
    font-size: 0.8rem;
    border-radius: 8px;
    -webkit-box-shadow: 2px 2px 5px -9px rgba(0,0,0,0.75);
-moz-box-shadow: 2px 2px 5px -9px rgba(0,0,0,0.75);
box-shadow: 2px 2px 5px -9px rgba(0,0,0,0.75);;
    @media (max-width: 450px){
        
        font-size: 0.8rem;
    }


`

export const TagArea = styled.ul`
    display: flex;
    margin-bottom: 15px;

    li {
        margin-right: 10px;
        /* color: var(--main-gray2); */
    

    }
    
    @media (max-width: 450px){

     align-items: center;
     justify-content: center;

     li {margin: 0 2px;}
    }

    @media (max-width: 400px){
        flex-direction: column;
        
        align-items: flex-start;

        li {margin: 4px;}

    }
    

`