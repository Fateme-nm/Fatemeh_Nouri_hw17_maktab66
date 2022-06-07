import React, {useContext} from 'react';
import CheckedContext from '../contexts/checkedList';
import Item from './Item';

const Selecteditems = () => {
    const [context, setContext] = useContext(CheckedContext);

    return (
        <div className='selecteditems'>
            <div className="selecteditems-header">
                <h3>Selected items</h3>
            </div>
            <div className="selecteditems-body">
                <ul className='items-ul'>
                    {context.map(item => 
                        <Item 
                            item={item} 
                            state='selected' 
                            key={item.id}
                        />
                    )}
                </ul>
            </div>
        </div>
    );
}

export default Selecteditems;
