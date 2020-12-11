import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="Diploma of Computer Science" where="SAIT" from="Sept 2009" to="July 2011"/>
            </div>
            )
        }
    }
    
export default Education
    