import React from 'react';
import './style.css';

import ItemList from '../ItemList'; 

import {artistArray} from '../../assets/database/artists';
import {songsArray} from '../../assets/database/songs';

const Main = ({type}) => {
    return (
        <div className='main'>
            {/*Artists*/}
            {type  === 'artists' || type === undefined ? (
                <ItemList
                    title="Artistas"
                    itens={5}
                    itemsArray={artistArray}
                    path='/artists'
                    idPath="artist"
                />
            ) : <></>}

            {/*Musics*/}
            {type === 'songs' || type === undefined ? (
                 <ItemList
                    title="Músicas"
                    itens={10}
                    itemsArray={songsArray}
                    path="/songs"
                    idPath="/song"
                />
            ): <></>}
        </div>
    );
};

export default Main;