import React from 'react';
import "./ChefParty.css";
import Continentals from '../common/Continentals';
import ChefPartyCollections from './ChefPartyCollections';
import ExploreSection from '../common/ExploreSection';
import { useState, useEffect } from 'react';

const chefPartyContinentals = [
    {
        id: 1,
        title: "Indian",
    },
    {
        id: 2,
        title: "Italian",
    },
    {
        id: 3,
        title: "European",
    },
    {
        id: 4,
        title: "Arabic",
    },
    {
        id: 5,
        title: "Korean",
    },
    {
        id: 3,
        title: "Japanese",
    },
];

const ChefParty = () => {

    const [dishes, setDishes] = useState([]);

    useEffect(() => {
        fetch('https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/')
            .then(response => response.json())
            .then(data => {
                const { dishes } = data;
                setDishes(dishes);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            <div className="max-width">
                <Continentals contList={chefPartyContinentals} />
                <ChefPartyCollections />
                <ExploreSection collectionName={"Recommended Dishes"} list={dishes}/>
            </div>
        </div>
    )
}

export default ChefParty;