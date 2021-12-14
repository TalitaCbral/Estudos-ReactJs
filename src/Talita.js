import React, { Component } from "react";
import User from "./User";
import photo from './user.jpg'

class Talita extends Component {
    render() {
        return (
            <div>
                Eu sou um componente chamado Talita
                <User name="Maria" photo={photo} ></User>
                <User name="João" ></User>
                <User name="Etc" ></User>
            </div>
        );
    }
}

export default Talita;