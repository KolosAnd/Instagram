import React, {Component} from 'react';
import User from './User';
export default class Post extends Component {
    render() {
        return (
        <div className="post">
            <User src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR3iwvAXP04WvcWd6yuAWDjMY3Bzofr4ZU3aNvmXmnvYMY_uJQv"
                  alt="man"
                  name="NEW_PAGE"

            />
            <img src={this.props.src} alt={this.props.alt}/>
            <div className="post__name">
                some account
            </div>
            <div className="post__descr">
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi autem libero odit perspiciatis, quibusdam similique voluptate? Accusamus fuga fugit natus.
            </div>
        </div>
        )
    }
}
