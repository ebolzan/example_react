import React from 'react';
//import Conteudo from './Conteudo';
import Lateral from './Lateral';

class Principal extends React.Component {
  render() {
    return (
      <div className="wrapper d-flex align-items-stretch">
        <Lateral />

      </div>
    );
  }
}

export default Principal;