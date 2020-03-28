import React, {Component} from 'react';
import Post from "./Post";

export default class Posts extends Component {
    render() {
        return (
            <div className="left">
                <Post src="https://www.hello.com/img_/hellowithwaves.png" alt="inst" />
                <Post src="https://vignette.wikia.nocookie.net/hello-neighbor-game/images/8/85/Launcher.png/revision/latest?cb=20200109064945&path-prefix=ru" alt="second" />
            </div>
        )
    }
}
