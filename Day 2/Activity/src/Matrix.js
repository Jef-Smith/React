import React from 'react';
import './Assets/css/table.css';
import { Apple, Beef, Fish, Soup, Dessert, CakeSlice, Lollipop, CandyCane, Croissant, CupSoda, Coffee, Pizza, Popcorn, Grape, GlassWater, Banana } from 'lucide-react'; // Replace with your actual component paths

export const Matrix = () => {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Food Table</h1>
      <table border={2} style={{ justifyContent: 'center', alignItems: 'center' }}>
        <tr>
          <td><Apple size={50} color='red' strokeWidth={1} /></td>
          <td><Beef size={50} color='red' strokeWidth={1} /></td>
          <td><Fish size={50} color='red' strokeWidth={1} /></td>
          <td><Soup size={50} color='red' strokeWidth={1} /></td>
        </tr>
        <tr>
          <td><Dessert size={50} color='red' strokeWidth={1} /></td>
          <td><CakeSlice size={50} color='red' strokeWidth={1} /></td>
          <td><Lollipop size={50} color='red' strokeWidth={1} /></td>
          <td><CandyCane size={50} color='red' strokeWidth={1} /></td>
        </tr>
        <tr>
          <td><Croissant size={50} color='red' strokeWidth={1} /></td>
          <td><CupSoda size={50} color='red' strokeWidth={1} /></td>
          <td><Coffee size={50} color='red' strokeWidth={1} /></td>
          <td><Pizza size={50} color='red' strokeWidth={1} /></td>
        </tr>
        <tr>
          <td><Popcorn size={50} color='red' strokeWidth={1} /></td>
          <td><Grape size={50} color='red' strokeWidth={1} /></td>
          <td><GlassWater size={50} color='red' strokeWidth={1} /></td>
          <td><Banana size={50} color='red' strokeWidth={1} /></td>
        </tr>
      </table>
    </>
  );
};


