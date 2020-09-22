import React from 'react';

import { Container, Info, TagArea, TecTag } from './styles';
import InfoCard from '../InfoCard'
import { Link, Redirect } from 'react-router-dom'

interface IProject {
    title: String, 
    img: String,
    tags: Array<String>
    description: String,
    code: string,
}

interface IInfoCardProps {
    project: IProject
}

interface ITag {
    name: string,
    numb: string,
    font: string,
}

const colorList: ITag[] = [
  {name: "Javascript", numb:"#fcf4b6", font: "#a6940d"},
  {name: "Css", numb:"#bbd6f2", font: "#1569bf"},
  {name: "Html", numb:"#fcd4ca", font: "#e34117"},
  {name: "Typescript", numb:"#cbd8f5", font: "#4c76d4"},
]

const ProjectCard: React.FC<IInfoCardProps> = ({project}) => {
  return (
    <InfoCard>
        <Container>
            <div style={{backgroundImage: `url(" ${project.img} ")`}} className="project-photo">
                
            </div>
          
            <Info>
            <TagArea>
            {project.tags.map((tag) => (
                <TecTag color={colorList.find((color) => color.name == tag)?.numb} font={colorList.find((color) => color.name == tag)?.font}>#{tag}</TecTag>
            ))}

            </TagArea>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>

            <a target="_blank" href={project.code}>
                <button className="code-btn">Código</button>
            </a>
            
    
            </Info>
            
        </Container>
    </InfoCard>
    );
}

export default ProjectCard;