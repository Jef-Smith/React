import React,{ useState } from 'react';
import './Assets/css/style1.css';
const ColorChangeBox = (props) => {
  const [isGreen, setIsGreen] = useState(true);

  const toggleColor = () => {
    setIsGreen(!isGreen);
  };

  const boxColor = isGreen ? 'green' : 'red';

  return (
    <div>
      <div
        style={{
          width: '200px',
          height: '200px',
          backgroundColor: boxColor,
          margin: '20px auto',
        }}
      ></div>
      <div className='st'>

      <button  onClick={toggleColor}>Change Color</button>
      </div>
    </div>
  );
};

export default ColorChangeBox;
