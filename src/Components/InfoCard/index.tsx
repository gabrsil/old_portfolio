import React from 'react';

// import { Container } from './styles';
import { Container } from './styles'


interface IInfoCardProps {
    children: any;
}

const InfoCard: React.FC<IInfoCardProps> = ( {children} ) => {
  return (
    <Container>
        {children}
    </Container>
    
    );
}

export default InfoCard;