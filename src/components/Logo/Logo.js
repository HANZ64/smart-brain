import React from 'react';
import Tilt from 'react-tilt'
import brain from './brain.png'
import './Logo.css';

const Logo = () => {
  return (
    <div className='ma4 mt0'>
      {/* https://www.npmjs.com/package/react-tilt */}
      <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
        {/* https://icons8.com/icons/set/brain */}
        <div className="Tilt-inner pa3">
          <img style={{paddingTop: '5px'}} src={brain} alt='logo'/>
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;