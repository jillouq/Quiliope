import React, { Component } from 'react';
import "./loginStyle.css";

class Login extends Component {
    render() { 
        return (
            <html>
                <head>
                </head>
                <body>
                    <h1 style={{color: 'black'}}>
                        <center>
                            <b>MEDICINE INVENTORY MANAGEMENT SYSTEM</b>
                        </center>
                    </h1>
                    <div>
                        
                        <div>
                            <center>
                                <div class="inputs">
                                    <h2 id='plslgn' style={{fontStyle:'italic'}}>Please Login</h2>
                                    <div class="username">
                                        <input id="username" type="text" /><br/>
                                        <label  for="username">Username</label>
                                    </div>
                                    <div class="password">
                                        <input id="password" type="text" /><br/>
                                        <label for="password">Password</label><br/>
                                    </div>
                                    <div class='buttons'>
                                        <button id='btnlogin'>Login</button><br/>
                                        <button id='btnregister'>Register</button>
                                    </div>
                                </div>
                                
                            </center>
                        </div>
                    </div>
                </body>
            </html>
        );
    }
}
 
export default Login;