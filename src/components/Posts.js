import React, {Component} from 'react';
import InstaService from "../services/instaService";


export default class Posts extends Component {

    InstaService = new InstaService();
    state = {
        posts: [],
        error: false  
    }

    render() {
        return (
            <div className="left">

            </div>
        )
    }
}
