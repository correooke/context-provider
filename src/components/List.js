import React from 'react';
import Item from './Item';
import ListTitle from './ListTitle';

const List = ({ items }) => {
    return (
        <div className='list'>
            <ListTitle title='Technologies'></ListTitle>
            {
                items.map((item, i) => <Item key={item.title} {...item} />)
            }
        </div>
    );
};

export default List;