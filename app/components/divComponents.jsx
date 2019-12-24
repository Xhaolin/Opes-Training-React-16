import React from 'react';
import ReactDOM from 'react-dom';

import Icono1 from '../images/icon1.png';

class DivHola  extends React.Component {

  constructor(props) {

    super(props);

    this.state = {filters: this.props.filtros, show: this.props.mostrar}
  }


static getDerivedStateFromProps(nextProps, prevState) {

      var _filters = prevState.filters;

      if (_filters.width != nextProps.filtros.width) {

        _filters.width = nextProps.filtros.width;

        return({filters: _filters});
      }

    // Return null to indicate no change to state.
    return null;

  }

  render() {

    var _style = {display: "inline-block", backgroundColor: "cyan", width: this.state.filters.width+"px"};

    return (

        <div style={_style}>
            <span>Hola!!!</span>
        </div>
    );
  }
}

export { DivHola}

