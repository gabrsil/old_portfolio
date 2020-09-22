import styled from 'styled-components';

export const Container = styled.div`
    
    padding: 10px;

    h2 {
        font-weight: 540;
        color: var(--main-gray2);
        font-size: 1.3rem;
        margin: 0;
        padding: 0;
     

    }
`;


export const JobList = styled.ul`

padding: 1px 5px;

list-style-type: none;




`


export const JobItem = styled.li`

    margin: 15px 0;

    display: flex;

    div.company-img {
        background-size: cover;
        
        width: 50px;
        height: 50px;
        background-repeat: no-repeat;
    }

    section.job-info {
        
        padding: 5px;
        margin: 0 10px; 

        span {
            color: #828282;
            font-size: 0.9rem;
            
        }


        h4 {
            margin: 0;
            padding: 0;
            line-height: 1.8rem;
            color: #333333;
            font-size: 1rem;
            
        }

    }


`