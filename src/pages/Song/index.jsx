import React from 'react';
import './style.css';
import Player from '../../components/Player';

const Song = () => {
    return (
        <div className='song'>
            <div className="song__container">
                <div className='song__image-container'>
                    <img
                        src="https://i.scdn.co/image/ab67616d00001e022774b00531d558bc19e12a24"
                        alt="Imagem da mnusica x"
                    />
                </div>
            </div>

            <div className='song__bar'>
                <div className='song__artist-image'>
                    <img 
                        src="https://i.scdn.co/image/ab67616d00001e022774b00531d558bc19e12a24"
                        alt="Imagem do artista x"
                        width={75}
                        height={75}
                    />
                </div>

                <Player />
                
                <div>
                    <p className='song__name'>nome da musar</p>
                    <p>nome do artista</p>
                </div>
            </div>
        </div>
    )
}

export default Song;