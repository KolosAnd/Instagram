import React, {Component} from 'react';
import Posts from './Posts';
import User from './User';

export default function Feed () {
    return (
        <div className="container feed">
            <Posts/>
            {/*<User/>*/}
        </div>
    )
}
