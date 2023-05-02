import React, { Component } from 'react';
import './login.js';

class Inventory extends Component {
    state = {  } 
    render() { 
        return (
            <table border={1}>
                <tr>
                    <th>Medicine</th>
                    <th>Type of Medicine</th>
                </tr>
                <tr>
                    <td>Biogesic</td>
                    <td>Tablet</td>
                </tr>
            </table>
        );
    }
}
 
export default Inventory;