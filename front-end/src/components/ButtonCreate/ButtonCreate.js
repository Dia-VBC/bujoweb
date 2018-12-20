import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default function ButtonCreate() {
  return (
    <div className="btt-create">
      <Link to="/NewTask"><h1>+</h1></Link>
    </div>
  )
}
