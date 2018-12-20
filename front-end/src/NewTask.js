import React, { Component } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import StickyNote from './components/StickyNote';
import ButtonCreate from './components/ButtonCreate';
import './App.css';

class NewTask extends Component {
 render() {
 return (
    <div>
      <Header />
      <Body />
      <div className="content">
      	<h1>Nova tarefa</h1>
      	<ul>
      	<li>
      		<div className="Conteudo">
      		<h2></h2>
      		
      		</div>
      	</li>

      	</ul>
      </div>
      </div>
 );
 }
}

export default NewTask;