import React from 'react';
import ProfileInfo from '../ProfileInfo/index';
import ExperienceInfo from '../ExperienceInfo/index';

import {
   Wrapper,
  } from './styles';

const SidePanel: React.FC = () => {
  return (

    <Wrapper>
        <ProfileInfo/>
        <ExperienceInfo/>
        
    </Wrapper>

  );
}

export default SidePanel;