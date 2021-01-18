import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import createEngine, {
    DefaultLinkModel,
    DefaultNodeModel,
    DiagramModel
} from '@projectstorm/react-diagrams';

import {
    CanvasWidget
} from '@projectstorm/react-canvas-core';

// create an instance of the engine with all the defaults
const engine = createEngine();

// node 1
const node1 = new DefaultNodeModel({
    name: 'Node 1',
    color: 'rgb(0,192,255)',
});
node1.setPosition(100, 100);
let port1 = node1.addOutPort('Out');

// node 2;
const node2 = new DefaultNodeModel({
    name: 'Node 2',
    color: 'rgb(0,192,255)',
});
node2.setPosition(300,100);
let port2 = node2.addInPort('In');

const link = port1.link(port2);
link.addLabel('Hello World!');


const model = new DiagramModel();
model.addAll(node1, node2, link);
engine.setModel(model);

export default class Componente extends Component {

    render() {
        return (
            <CanvasWidget className="srd-demo-canvas" engine={engine} />
        );
    }
}



if (document.getElementById('componente')) {
    ReactDOM.render(<Componente />, document.getElementById('componente'));
}
