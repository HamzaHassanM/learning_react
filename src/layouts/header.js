import React, { Component } from 'react';


class Headera extends Component{

    constructor()
    {
        super();
        this.state = {
            title : 'Refuge News with React',

        }
    }

    render()
    {
        return(
            <div>
                <nav className={"navbar navbar-expand-sm bg-light"}>

                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link" href="#">Link 1</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Link 2</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Link 3</a>
                    </li>
                </ul>
            </nav>
            </div>
        )
    }
}


export default Headera;