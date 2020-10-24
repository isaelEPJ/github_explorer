import React, { FormEvent, useEffect, useState } from 'react';
import { Title, Form, Repositories, Error } from './styles';
import logo from '../assets/logo.svg';
import { FiChevronRight } from 'react-icons/fi';
import api from '../services/api';
import { Link } from 'react-router-dom';

interface Repository {
    full_name: string;
    description: string;
    owner: {
        login: string;
        avatar_url: string;
    };
}

const Dashboard: React.FC = () => {
    const [repositories, setRepositories] = useState<Repository[]>(() => {
        const storagedRepositories = localStorage.getItem(
            '@Github_explorer:repositories',
        );
        if (storagedRepositories) {
            return JSON.parse(storagedRepositories);
        }
        return [];
    });
    const [inputError, setInputError] = useState('');
    const [newRepo, setNewRepo] = useState('');

    useEffect(() => {
        localStorage.setItem(
            '@Github_explorer:repositories',
            JSON.stringify(repositories),
        );
    }, [repositories]);

    async function handleAddRepositorie(
        event: FormEvent<HTMLElement>,
    ): Promise<void> {
        event.preventDefault();

        if (!newRepo) {
            setInputError('digite nome/autor do repositorio');
            return;
        }
        try {
            setInputError('');
            const response = await api.get<Repository>(`repos/${newRepo}`);

            const repository = response.data;

            setRepositories([...repositories, repository]);
            setNewRepo('');
        } catch (err) {
            setInputError('erro na busca desse repositorio');
        }
    }
    return (
        <>
            <img src={logo} alt="Github Explorer" />
            <Title>Explore Repositórios no github</Title>

            <Form hasError={!!inputError} onSubmit={handleAddRepositorie}>
                <input
                    value={newRepo}
                    onChange={(e) => setNewRepo(e.target.value)}
                    placeholder="digite o nome do repositorio"
                />

                <button type="submit">Pesquisar</button>
            </Form>

            <Error>{inputError}</Error>

            <Repositories>
                {repositories.map((repository) => (
                    <Link
                        key={repository.full_name}
                        to={`repositories/${repository.full_name}`}
                    >
                        <img
                            src={repository.owner.avatar_url}
                            alt={repository.owner.login}
                        />
                        <div>
                            <strong>{repository.full_name}</strong>
                            <p>{repository.description}</p>
                        </div>
                        <FiChevronRight size={20} />
                    </Link>
                ))}
            </Repositories>
        </>
    );
};
export default Dashboard;
