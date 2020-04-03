import React from "react";
import User from "./User";
import Palette from "./Palette";

const Profile = ()=>{
    return (
        <div className="container profile">
            <User src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR3iwvAXP04WvcWd6yuAWDjMY3Bzofr4ZU3aNvmXmnvYMY_uJQv"
                  alt="man"
                  name="NEW_PAGE"
            />
            <Palette/>
        </div>
    )
};
export default Profile;
