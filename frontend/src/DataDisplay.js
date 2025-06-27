// src/DataDisplay.js
import React from 'react';
import {faker} from '@faker-js/faker';

const DataDisplay = () => {
    const data = Array.from({ length: 100 }, () => ({
        id: faker.string.uuid(),
        name: faker.person.firstName(),
        email: faker.internet.email(),
    }));

    return (
        <div>
            <h2>Data Display</h2>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default DataDisplay;
