import React, {useContext, memo} from 'react';
import CheckedContext from '../contexts/checkedList';
import PropTypes from 'prop-types'

const Item = ({item, state}) => {
    const [context, setContext] = useContext(CheckedContext)
    let checked = !!context.find(itm => itm.id === item.id)

    const handleChange = () => {
        checked = !checked
        setContext(checked ? [...context, item] : 
            context.filter(itm => itm.id !== item.id))
    }

    return (
        <li className='item-li'>
            <label>
                {state === 'selected' ? null :
                    <input 
                        type='checkbox'
                        checked={checked}
                        onChange={handleChange}
                    />}
                {item.name}
            </label>
        </li>
    );
}

Item.propTypes = {
    item: PropTypes.object.isRequired,
    state: PropTypes.string.isRequired
}

Item.defaulteProps = {
    state: 'all'
}

export default memo(Item);
