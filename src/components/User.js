import React from "react";

const User = () => {
    const {min,src,alt,name} = this.props;
    return(
        <a href="/#" className={min ? "user min" : "user"}>
            <img src={src} alt={alt} />
            <div>{name}</div>
        </a>
    )
};
export default User;
