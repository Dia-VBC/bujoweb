import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default function Header() {
  return (
    <div className="header pure-menu pure-menu-horizontal pure-menu-fixed">
      <a href="../"><h1 className="label">BuJo</h1></a>
      <ul> 
      	<li><Link to="/Day"><h3 className="label">Dia</h3></Link></li>
      	<li><Link to="/Week"><h3 className="label">Semana</h3></Link></li>
      	<li><Link to="/Month"><h3 className="label">Mês</h3></Link></li>
      </ul>
    </div>
  )
}
