import React, { Component } from 'react';

import './Key.css';

import Header from './components/Header';
import Body from './components/Body';
import StickyNote from './components/StickyNote';
class Key extends Component {
  render() {
    return (
      <div>
      <Header />
      <Body>
      <p>Key</p>
      <StickyNote /> <h2>Tarefas</h2>
      <StickyNote /> <h2>Eventos</h2>
      <StickyNote /> <h2>Notas</h2>
      </Body>
      </div>
    );
  }
}

export default Key;
