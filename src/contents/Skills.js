import React, { Component } from 'react'

class Skills extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            'myskills':['HTML','CSS','JS','PHP','REACT JS','angularjs','Ruby', 'AWS', 'mySQL'],
            'Tools': ['Bootstrap','Github','Visual Studio Code','Window Subsystem for Linux', 'Atom']
        };
    }

    render() {
        return (
            <React.Fragment>
            <div className="condiv skills">
            <h1 className="subtopic">Languages i speak:</h1>
            <ul>
            {this.state.myskills.map((value)=>{
                return <li>{value}</li>
            })}
            </ul>
            </div>
            <div className="condiv skills">
            <h1 className="subtopic">Tools i use:</h1>
            <ul>
            {this.state.Tools.map((value)=>{
                return <li>{value}</li>
            })}
            </ul>
            </div>
            </React.Fragment>
            )
        }
    };

    export default Skills
    