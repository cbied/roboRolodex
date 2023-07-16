import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    const cardArr = robots.map((user,i) => {
        return <Card key={i} 
                    id={user.id} 
                    name={user.name} 
                    username={user.username} 
                    email={user.email} />
    })

    return (
        <div>
            {cardArr}
        </div>
    )
}

export default CardList;