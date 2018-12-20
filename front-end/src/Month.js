import React, { Component } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Conteudo from './components/ConteudoPaginas';
import './App.css';

class Month extends Component {
 render() {
 return (
    <div>
      <Header />
      <Body />
<h3>PAGINA mes</h3>
<Conteudo />
</div>
 );
 }
}

export default Month;