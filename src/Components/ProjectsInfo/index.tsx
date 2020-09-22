import React from 'react';
import InfoCard from '../InfoCard';
import { Container } from './styles';
import ProjectCard from '../ProjectCard'


interface IProject {
    title: String, 
    img: String,
    tags: Array<String>
    description: String,
    code: string,
}


const ProjectsInfo: React.FC = () => {


    const projects: Array<IProject> = [

        {
            title: 'Employee manager with React & Typescript',
            img: 'https://github.com/morninn/Job-Test-Reactjs/raw/master/assets/pjct-img.png',
            tags: [
                "Html",
                "Css",
                "Javascript",
                "Typescript"
            ],
            description: `Crud simples de gerenciamento de funcionários, feito para um teste de vaga.`,
            code: 'https://github.com/morninn/Job-Test-Reactjs'
        },
        {
            title: 'Mobile Plans Calculator with React',
            img: 'https://camo.githubusercontent.com/5236dbc24386998056381cfc08ce368ecd878fd4/68747470733a2f2f692e696d6775722e636f6d2f534931767161322e706e67',
            tags: [
                "Html",
                "Css",
                "Javascript"
            ],
            description: `Calcula a diferença de preço de ligações entre usar um plano de celular hipotético e não usar nenhum plano.`,
            code: 'https://github.com/morninn/RandomJobTest',
        },
        {
            title: 'Random Job Test with React',
            img: 'https://i.imgur.com/mZdOH4N.png',
            tags: [
                "Html",
                "Css",
                "Javascript",
            ],
            description: `Lista de citações recebidas de API, com o titulo, texto e autor.`,
            code: 'https://github.com/morninn/GrowthChallenge',
        },
        {
            title: 'Posts App with React',
            img: 'https://i.imgur.com/KvIT5oa.png',
            tags: [
                "Html",
                "Css",
                "Javascript",
            ],
            description: `Design de App feito com React.`,
            code: 'https://github.com/morninn/ReactPosts',
        },
        {
            title: 'Spot App With React',
            img: 'https://i.imgur.com/WryAweK.jpg',
            tags: [
                "Html",
                "Css",
                "Javascript",
            ],
            description: `App de anuncios, inspirado na olx, feito com Reactjs e Nodejs.`,
            code: 'https://github.com/morninn/SpotsApp',
        },
        {
            title: 'Replicate Design Challenge with React',
            img: 'https://i.imgur.com/iYfvaWu.png',
            tags: [
                "Html",
                "Css",
                "Javascript"
                
            ],
            description: `Desafio de replicar Design mostrado, com ReactJS e Styled-Components. Repositório do Desafio Original: https://github.com/1STi/desafio-frontend/`,
            code: 'https://github.com/morninn/desafioFrontend',
        }
        
        
        
    ]


  return (
    <Container>
        <InfoCard>
            <p className="pjct-title">Projetos ({projects.length})</p>
        </InfoCard>
        {
            projects.map((project) => (
            <ProjectCard
            project={project}
            />
            ))
        }
        
    </Container>  
    );
}

export default ProjectsInfo;