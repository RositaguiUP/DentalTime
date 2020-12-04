import React, { Component } from 'react';
import Header from '../components/header';
import Forms from '../components/form'

class Login extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <Header/>
                <main>
                    <Forms/>
                </main>
            </React.Fragment>
         );
    }
}
 
export default Login;