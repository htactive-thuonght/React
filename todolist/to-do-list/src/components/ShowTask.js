import React from 'react'

export default (props) => {
    const listsTask = props.listsTask
    const listItems = listsTask.map((list) =>
        <li className="list-group-item" key={list.id}>{list.name}</li>
    )   
    return (
        <ul className="ul">{listItems}</ul>
        
    )
}


