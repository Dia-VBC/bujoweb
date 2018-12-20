import React, { Component } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import StickyNote from './components/StickyNote';
import ButtonCreate from './components/ButtonCreate';
import './App.css';

class Week extends Component {
 render() {
 return (
    <div>
      <Header />
      <Body />
      <div className="content">
      	<h1>Semana</h1>
      	<ul>
      	<li>
      		<div className="Conteudo">
      		<h2></h2>
      		
      		</div>
      	</li>
<div className="BB">
<li>
<ButtonCreate />
</li>
</div>
      	</ul>
      </div>
      </div>
 );
 }
}

export default Week;