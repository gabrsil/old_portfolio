import React from 'react';
import { Container, SkillsArea, SkillsCard } from './styles'
import InfoCard from '../InfoCard'
import ProjectsInfo from '../ProjectsInfo'
// import 'antd/dist/antd.css';


import { Progress } from 'antd';

const MainPanel: React.FC = () => {
  return (
      <Container>
        
          <SkillsArea>
           
          
              <SkillsCard>
                  <InfoCard>

                  <h1>Front end</h1>
                  <ul>
                      <li>Html <Progress percent={90} showInfo={false} /></li>
                      <li>Css <Progress percent={90} showInfo={false} /></li>
                      <li>Javascript <Progress percent={90} showInfo={false} /></li>
                      <li>React <Progress percent={75} showInfo={false} /></li>
                      <li>Typescript <Progress percent={60} showInfo={false} /></li>
                      <li>Redux <Progress percent={60} showInfo={false} /></li>
                      <li>Styled-Components <Progress percent={80} showInfo={false} /></li>
                      <li>Sass <Progress percent={50} showInfo={false} /></li>
                  </ul>
                  </InfoCard>
                  
              </SkillsCard>
              <SkillsCard>
                  <InfoCard>
          

                 
                  <h1>Back end</h1>
                  <ul>
                      <li>Nodejs <Progress percent={85} showInfo={false} /></li>
                      <li>Express <Progress percent={90} showInfo={false} /></li>
                      <li>Hapi <Progress percent={60} showInfo={false} /></li>
                      <li>Knex <Progress percent={80} showInfo={false} /></li>
                      <li>Mongoose <Progress percent={80} showInfo={false} /></li>
                      <li>Sequelize <Progress percent={50} showInfo={false} /></li>
                      <li>TypeOrm <Progress percent={60} showInfo={false} /></li>
                      <li>AdonisJS <Progress percent={50} showInfo={false} /></li>
                      <li>RabbitMQ <Progress percent={50} showInfo={false} /></li>
                      <li>Java Spring <Progress percent={60} showInfo={false} /></li>
                      <li>Mysql <Progress percent={75} showInfo={false} /></li>
                      <li>Postgres <Progress percent={80} showInfo={false} /></li>
                      <li>MongoDB <Progress percent={80} showInfo={false} /></li>
                      <li>Redis <Progress percent={60} showInfo={false} /></li>
                      <li>Acess <Progress percent={75} showInfo={false} /></li>
                  </ul>
     
                  </InfoCard>
                
              </SkillsCard>
        
            
            
        
              
          </SkillsArea>


          <ProjectsInfo/>
              
          
      
      </Container>

  );
}

export default MainPanel;