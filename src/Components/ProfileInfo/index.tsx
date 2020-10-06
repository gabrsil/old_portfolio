import React from 'react';

// import { Container } from './styles';

import {
    EmailIcon,
    PersonInfo,
    PersonContact,
    GithubIcon,
    LinkedinIcon,
    Container
   } from './styles';

import InfoCard from '../InfoCard/index'


const ProfileInfo: React.FC = () => {
  return (
    <InfoCard>
      <Container>

      
    <div style={{backgroundImage: "url("+"https://i.imgur.com/nR1Hbpk.jpg"+")"}} className="prof-photo"></div>
  
    <section className="infos">


    <PersonInfo className="person-info">
      <h2 className="name">Gabriel Angelo</h2>
      <span className="self-title">FullStack developer</span>
    </PersonInfo>

    <PersonContact>
        
        

     

          <EmailIcon/>
          <span className="email">
            gabriel.aconsurgens@gmail.com
          </span>

      
          <section style={{marginTop: '10px'}} className="contact-container">

          <GithubIcon/>
          <a target="blank" href="https://github.com/morninn" className="email">
            @morninn
          </a>

          </section>
          <section className="contact-container">

          <LinkedinIcon/>
          <a target="blank" href="https://www.linkedin.com/in/gabriel-angelo-3107801a2/" className="email">
            Gabriel Angelo
          </a>

          </section>
      
          
    </PersonContact>
      
        <p className="prof-description">
        Desenvolvo a três anos, com maior domínio
         na linguagem Javascript. Atualmente utilizo ReactJs e Nodejs junto ao ecossistema Javascript.

        </p>

        </section>
    </Container>
  </InfoCard> 
  );
}

export default ProfileInfo;