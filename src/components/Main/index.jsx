import React from 'react';
import './style.css';

import ItemList from '../ItemList'; 

import {artistArray} from '../../assets/database/artists';
import {songsArray} from '../../assets/database/songs';

const Main = () => {
    return (
        <div className='main'>
            {/*Artists*/}
            <ItemList
                title="Artistas"
                itens={5}
                itemsArray={artistArray}
                path='/artist'
                idPath="artist"
            />

             {/*Musics*/}
            <ItemList
                title="Músicas"
                itens={10}
                itemsArray={songsArray}
                path="/songs"
                idPath="/song"
            />
        </div>
    );
};

export default Main;