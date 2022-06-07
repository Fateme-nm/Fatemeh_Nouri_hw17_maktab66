import React, {useEffect, useState, useCallback} from 'react';
import Item from './Item';

const Allitems = () => {
    const [listItems, setListItems] = useState([])

    useEffect(() => {
        // fetch items and put them in listItems state
        fetch('https://61f6a7ea2e1d7e0017fd6e8b.mockapi.io/api/v1/list')
            .then(res => res.json()).then(data => setListItems(data))
        return () => {
            setListItems([])
        };
    }, []);

    return (
        <div className='allitems'>
            <div className="allitems-header">
                <h3>All Items</h3>
            </div>
            <div className="allitems-body">
                <ul className='items-ul'>
                    {listItems.map(item => 
                        <Item 
                            item={item} 
                            state='all' 
                            key={item.id}
                        />
                    )}
                </ul>
            </div>
        </div>
    );
}

export default Allitems;
