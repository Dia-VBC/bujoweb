import React, { Component } from 'react';

import './App.css';

import Header from './components/Header';
import Body from './components/Body';
import StickyNote from './components/StickyNote';
class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <Body />
      <div className="content">
      	<h1>Key</h1>
      	<ul>
      	<li>
      	<StickyNote />
      		<h3>Tarefas</h3>
      		<p>o <br/>Não finalizada</p>
      		<p className="linethrough">Finalizada</p>
      	</li>
      	<li>
      	<StickyNote />
      		<h3>Notas</h3>
      		<p>- <br/>Anotação</p>
      	</li>
      	<li>
      	<StickyNote />
      		<h3>Eventos</h3>
      		<p># <br/>Não ocorreu ainda</p>
      		<p className="linethrough">Ocorreu</p>
      	</li>
      	</ul>
      </div>
      </div>
    );
  }
}

export default App;
