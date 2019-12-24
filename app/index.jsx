import React from 'react';
import ReactDOM from 'react-dom';

import './css/styles1.css';

import * as divComponents from './components/divComponents.jsx';

var DivHola = divComponents.DivHola; 

class Newdiv  extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      width: "300"
    }

    this.inputWidth = React.createRef();
  }

  refresh(event) {

    this.setState({ width: this.inputWidth.current.state.text });
  }

  render() {

    var filters = {color: "blue", width: this.state.width};

    return (
      <div>	
        <DivHola filtros={filters} mostrar={true} />

        <div>
            Width: <InputWidth ref={this.inputWidth} />

           <a href="#" onClick={(e) => this.refresh(e)}>Refresh</a>
        </div>

      </div>
    );
  }

}


class InputWidth  extends React.Component {

 constructor(props) {

    super(props);

    this.state = {text: "300"};
  }

  change(event) {

    this.setState({ text: event.target.value });
  }


  render() {
    return <input type="text" onChange={(e) => this.change(e)} value={this.state.text} />
  }

}

ReactDOM.render(<Newdiv />, document.getElementById('content'));



