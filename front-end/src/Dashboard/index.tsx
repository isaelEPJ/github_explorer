import React from 'react';
import { Title, Form, Repositories } from './styles';
import logo from '../assets/logo.svg';
import { FiChevronRight } from 'react-icons/fi';

const dashboard: React.FC = () => {
    return (
        <>
            <img src={logo} alt="Github Explorer" />
            <Title>Explore Repositórios no github</Title>

            <Form>
                <input placeholder="digite o nome do repositorio" />

                <button type="submit">Pesquisar</button>
            </Form>
            <Repositories>
                <a href="teste">
                    <img
                        src="https://avatars1.githubusercontent.com/u/70731079?s=460&u=1112841ac45309541c36292ecc9217931be4dc29&v=4"
                        alt="isael junior"
                    />
                    <div>
                        <strong>isaelEPJ/github_explorer</strong>
                        <p>No description, website, or topics provided.</p>
                    </div>
                    <FiChevronRight size={20} />
                </a>
            </Repositories>
        </>
    );
};
export default dashboard;
