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
      	<h1>Novo Bullet</h1>

            <form>
                  <label>Tipo:</label>
                  <select name="type">
                        <option value="1">Tarefa</option>
                        <option value="2">Anotação</option>
                        <option value="3">Evento</option>
                  </select>
                  <br/>
                  <label>Descrição:</label>
                  <input type="textbox" className="textbox" name="decrição" placeholder="Descrição"/>
                  <br/>
                  <button type="button" onclick="" className="salvarTask">Salvar</button>
            </form>

      </div>
      </div>
 );
 }
}

export default NewTask;