import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './style.css';
import SingleItem from '../SingleItem';

const ItemList = ({title, itens, itemsArray, path, idPath}) => {
    const { pathname } = useLocation();

    const isHome = pathname === '/';

    const finalItens = isHome ? itens : Infinity;

    return (
        <div className='item-list__'>
            <div className='item-list__header'>
                <h2>{title} populares</h2>
                {isHome && (
                    <Link className='item-list__link' to={path}>Mostrar tudo</Link>
                )}
            </div>

            <div className='item-list__container'>
                {itemsArray
                    .filter((currentValue, index) => index < finalItens)
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