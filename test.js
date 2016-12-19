import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import {Pagination} from './index.js';

// Root component defination
class Root extends Component {
    render() {
        return (
            <div>
                <h1>ZetUI Test Page</h1>
                <Pagination total={100} current={2} />
            </div>
        );
    }
}

// Add container dom to page
let root = document.createElement('div');
root.className = 'root';
document.body.appendChild(root);

// Render react to container
render(<Root />, root);
