import React from 'react';
import { Container, SkillsArea, SkillsCard } from './styles'
import InfoCard from '../InfoCard'
import ProjectsInfo from '../ProjectsInfo'

const MainPanel: React.FC = () => {
  return (
      <Container>
        
          <SkillsArea>
           
          
              <SkillsCard>
                  <InfoCard>

                  <h1>Front end</h1>
                  <ul>
                      <li>Html</li>
                      <li>Css</li>
                      <li>Javascript</li>
                      <li>React</li>
                      <li>Typescript</li>
                      <li>Redux</li>
                      <li>Styled-Components</li>
                      <li>Sass</li>
                  </ul>
                  </InfoCard>
                  
              </SkillsCard>
              <SkillsCard>
                  <InfoCard>
          

                 
                  <h1>Back end</h1>
                  <ul>
                      <li>Nodejs</li>
                      <li>Express</li>
                      <li>Hapi</li>
                      <li>Knex</li>
                      <li>Mongoose</li>
                      <li>Sequelize</li>
                      <li>TypeOrm</li>
                      <li>AdonisJS</li>
                      <li>RabbitMQ</li>
                      <li>Java Spring</li>
                      <li>Mysql</li>
                      <li>Postgres</li>
                      <li>MongoDB</li>
                      <li>Redis</li>
                      <li>Acess</li>
                  </ul>
     
                  </InfoCard>
                
              </SkillsCard>
        
            
            
        
              
          </SkillsArea>


          <ProjectsInfo/>
              
          
      
      </Container>

  );
}

export default MainPanel;