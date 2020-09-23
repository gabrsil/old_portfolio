import styled from 'styled-components';

import { Email } from '@styled-icons/material'

import { Github } from '@styled-icons/boxicons-logos'

import { Linkedin } from '@styled-icons/boxicons-logos'

export const Wrapper = styled.aside`
  
  min-height: 100vh;
  width: 350px;
  padding: 20px 30px;
  


`;

export const EmailIcon = styled(Email)`

    width: 25px;
    height: 30px;
    color: var(--main-gray2);

`

export const LinkedinIcon = styled(Linkedin)`

    width: 28px;
    height: 28px;
    /* color: #424242; */
    color: #7a7a7a;

`

export const GithubIcon = styled(Github)`


    width: 28px;
    height: 28px;
    /* color: #424242; */
    color: #7a7a7a;
`


export const Container = styled.section`

padding: 15px 10px 25px;


div.prof-photo {
    
    height: 300px;
    width: 100%;
    /* margin: 0 auto; */
    /* margin: 10px; */
    border-radius: 8px;
    background-size: cover;
}


p.prof-description {
    color: #828282;
    font-size: 1.1rem;
    margin: 20px 0 10px;
    line-height: 25px;
}

@media(max-width: 1180px) {
    display: flex;
    align-items: center;
    div.prof-photo {

        height: 270px;
        max-width: 260px;
    }

    section.infos {
        margin: 0 20px;
 
    }
}

@media(max-width: 915px) {
    
    /* flex-direction: column;
    justify-content: flex-start; */
    


    div.prof-photo {
        /* max-width: 300px; */
        max-width: 250px;
 
    }

    section.infos {
        width: 300px;
      
        width: 100%;
    
    }
}

@media(max-width: 695px) {
    flex-direction: column;
    justify-content: flex-start;
    
    div.prof-photo {
        max-width: 300px;
        
 
    }

}


`

export const PersonInfo = styled.section`

     margin-bottom: 25px;

    h2 {
     color: var(--main-gray2);
     
     margin: 20px 0 3px;
    }

    span {
        color: #828282;
    }

    @media(max-width: 1180px) {
  
    


}


`

export const PersonContact = styled.section`
   
    span {
        color: var(--main-gray2);
        margin-left: 10px;
       

    }

    @media (max-width: 400px){
        font-size: 0.9rem;
    }
    @media (max-width: 320px){
        font-size: 0.8rem;
    }
    @media (max-width: 290px){
        font-size: 0.7rem;
    }


    


    section.contact-container {
        margin: 3px 1px;
        display: flex;
        align-items: center;
        
        transition: transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        
        a {
            color: #a1a1a1;
            font-weight: bold;
            margin-left: 10px;
            text-decoration: none;
        
        }



    }

    section.contact-container:hover {
        transform: translateX(-5px);
     
    }


   
  


`
