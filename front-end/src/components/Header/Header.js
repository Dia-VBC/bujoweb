import React from 'react';

import './index.css';

export default function Header() {
  return (
    <div className="header pure-menu pure-menu-horizontal pure-menu-fixed">
      <a href="../models/key.js"><h1 className="label">BuJo</h1></a>
      <ul> 
      	<li><a href="day.js"><h3 className="label">Dia</h3></a></li>
      	<li><a href="week.js"><h3 className="label">Semana</h3></a></li>
      	<li><a href="month.js"><h3 className="label">Mês</h3></a></li>
      </ul>
    </div>
  )
}
