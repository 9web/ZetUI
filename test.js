import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import {Pagination, Progress} from './index.js';

// Root component defination
class Root extends Component {
    render() {
        return (
            <div>
                <h1>ZetUI Test Page</h1>
                <Pagination total={100} current={2} />

                <h2>Progress</h2>
                <div style={{width: '200px'}}>
                    <Progress type={'line'} percent={10} strokeLinecap={'round'}/>
                    <Progress type={'circle'} percent={20}  strokeLinecap={'square'} strokeWidth={6} />
                </div>
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
