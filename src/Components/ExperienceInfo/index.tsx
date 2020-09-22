import React from 'react';
import InfoCard from '../InfoCard/index'
import { 
  Container, 
  JobList,
  JobItem
} from './styles';

const ExperienceInfo: React.FC = () => {
  return (
    <InfoCard>
      <Container>
        <h2>Experiências</h2>
        <JobList>
        <JobItem>
                <div className="company-img" >
                  </div>
                <section className="job-info">
                  <span className="job-time">Jan 2020 - Atual</span>  
                  <h4>Freelancer</h4>



                </section>
              
            </JobItem>
            <JobItem>
                <div style={{backgroundImage: "url(" + "https://logodownload.org/wp-content/uploads/2016/10/cnpq-logo-7.png" + ")"}} className="company-img" >
                  </div>
                <section className="job-info">
                  <span className="job-time">Jul 2019 - Mar 2020</span>  
                  <h4>Estagiário</h4>



                </section>
              
            </JobItem>
          <JobItem>
                <div style={{backgroundImage: "url(" + "https://logodownload.org/wp-content/uploads/2016/10/cnpq-logo-7.png" + ")"}} className="company-img" >
                  </div>
                <section className="job-info">
                  <span className="job-time">Jan 2017 - Ago 2018</span>  
                  <h4>Jovem Aprendiz</h4>



                </section>
              
            </JobItem>
         
            
            
            
       

        </JobList>

      </Container>

    </InfoCard>
  );
}

export default ExperienceInfo;