import React from 'react';
import { NavLink } from 'react-router-dom';
import { PowerBtn } from '../AllSvg';
import { Power } from './PowerButtonStyle';

const PowerButton = () => {
  return (
      <Power>
          <NavLink to="/"> 
            <PowerBtn width={30} height={30}/>
          </NavLink>
      </Power>
  );
};

export default PowerButton;