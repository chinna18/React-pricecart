import React from 'react';
import './style.css';
import Component from './Component';
import { FaCheck, FaTimes } from 'react-icons/fa';

export default function App() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <Component
            subscription="free"
            facheck={<FaCheck />}
            price="0"
            users="Single User"
            storage="5"
            privateProjects={<FaTimes />}
            reports={<FaTimes />}
            pprojects="text-muted"
            phoneSupport="text-muted"
            subDomain="text-muted"
            sreports="text-muted"
          />
          <Component
            subscription="plus"
            facheck={<FaCheck />}
            price="9"
            users="5 Users"
            style={{ fontWeight: 'bold' }}
            storage="50"
            privateProjects={<FaCheck />}
            reports={<FaTimes />}
            sreports="text-muted"
          />
          <Component
            subscription="pro"
            facheck={<FaCheck />}
            price="49"
            users="Unlimited Users"
            style={{ fontWeight: 'bold' }}
            storage="150"
            privateProjects={<FaCheck />}
            reports={<FaCheck />}
            unlimited={<b>Unlimited </b>}
            s={<span>s</span>}
          />
        </div>
      </div>
    </div>
  );
}
