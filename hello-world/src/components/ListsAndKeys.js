import React from 'react';

export default (props) => {
    const lists = props.lists;
    const listItems = lists.map((list) =>
        <li className="list-group-item" key={list.id}>{list.name}</li>
    );
    return (
        <ul className="ul">{listItems}</ul>
    )
}
