import React, { Component } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Conteudo from './components/ConteudoPaginas';
import './App.css';

class Day extends Component {
 render() {
 return (
    <div>
      <Header />
      <Body />
<h3>PAGINA DIA</h3>
<Conteudo />
</div>
 );
 }
}

export default Day;