import React, { Component } from 'react';
import {Route, Link } from 'react-router-dom';
import AboutTeam from './aboutTeam';
import AboutCompany from './aboutCompany';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                <h1>About Page</h1>
                <div className="row">
                    <div className="col-3">
                        <ul>
                            <li><Link to="/about/team">TeamPageGo</Link></li>
                            <li><Link to="/about/company">CompanyPageGo</Link ></li>
                        </ul>
                    </div>
                    <div className="col">
                        <Route path="/about/team" component={AboutTeam} />
                        <Route path="/about/company" component={AboutCompany} />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default About;