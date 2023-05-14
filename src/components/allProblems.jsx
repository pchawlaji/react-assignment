import React from 'react';
import { Link } from 'react-router-dom';

/**
 * This function return the HTML Conent of the Problem Statements/all Route
 * @returns 
 */
function ProblemsSet({problems}) {
    return (
        <div>
            <h2>Problem Set Page</h2>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Acceptance</th>
                        <th>Difficulty</th>
                    </tr>
                </thead>
                <tbody>
                    {problems.map((problem, index) => (
                        <ProblemStatement
                            key={index}
                            title={problem.title}
                            acceptance={problem.acceptance}
                            difficulty={problem.difficulty}
                            slug={problem.slug}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

/**
 * This function returns the HTML content for the problem passed in the row and column format of the table
 * @param {*} param0 
 * @returns 
 */
function ProblemStatement({ title, acceptance, difficulty, slug }) {
    return (
        <tr>
            <td>
                <Link to={`/problems/${slug}`}>{title}</Link>
            </td>
            <td>{acceptance}</td>
            <td>{difficulty}</td>
        </tr>
    );
}

export default ProblemsSet