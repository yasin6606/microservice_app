// src/DataDisplay.js
import React, {useEffect, useState} from 'react';
import {faker} from '@faker-js/faker';
import BackCard from "../Components/BackCard";

const DataDisplay = () => {
    const [state, setState] = useState([])

    useEffect(() => {
        const data = Array.from({length: 100}, () => ({
            id: faker.string.uuid(),
            name: faker.person.firstName(),
            email: faker.internet.email(),
            photo: faker.image.avatar()
        }));

        setState(data);
    }, [])

    return <>
        <BackCard>
            <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
                {state.map(person =>
                    <li className="my-2 sm:pb-4" key={person.id}>
                        <div className="flex items-center space-x-4 rtl:space-x-reverse">
                            <div className="shrink-0">
                                <img className="w-8 h-8 rounded-full" src={person.photo} alt={person.name}/>
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-200 truncate dark:text-blue-800">
                                    {person.name}
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-700">
                                    {person.email}
                                </p>
                            </div>
                            <div
                                className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-blue-800">
                                $320
                            </div>
                        </div>
                    </li>)}
            </ul>
        </BackCard>
    </>;
};

export default DataDisplay;
