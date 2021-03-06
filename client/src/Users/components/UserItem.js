import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../../shared/components/UIElements/Avatar';
import Card from '../../shared/components/UIElements/Card';
import './UserItem.css';

const UserItem = props => {
    return (
        <li className="user-item">
            <Card className="user-item__content">
                <Link to={`/users/${props.id}/gardens`}>
                    <div className="user-item__image">
                        <Avatar image='https://www.pngarts.com/files/3/Avatar-Free-PNG-Image.png' alt={props.name} />
                    </div>
                    <div className="users-item__info">
                        <h2>{props.name}</h2>
                        <h3>
                            {props.itemCount} {props.itemCount === 1 ? 'Item' : 'Items'}
                        </h3>
                    </div>
                </Link>
            </Card>
        </li>
    );
};

export default UserItem;