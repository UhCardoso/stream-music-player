import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import SingleItem from '../SingleItem';

const ItemList = ({title, itens, itemsArray, path, idPath}) => {
    return (
        <div className='item-list__'>
            <div className='item-list__header'>
                <h2>{title} populares</h2>
                <Link className='item-list__link' to={path}>Mostrar tudo</Link>
            </div>

            <div className='item-list__container'>
                {itemsArray
                    .filter((currentValue, index) => index < itens)
                    .map((currentObj, index) => (
                        <SingleItem
                            key={`${title}-${index}`}
                            idPath={idPath}
                            {...currentObj}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default ItemList;