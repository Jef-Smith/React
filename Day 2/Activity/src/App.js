import './Assets/css/style.css';
import {Play} from 'lucide-react';
export const App=()=>
{
  return (
    <>

      <form className='f1'>
        <input type='text' name='name' id='' placeholder='Name' className='fx1'/>
        <input type='email' name='' id='' placeholder='Email' className='fx1'/>
        <input type='number' name='' id='' placeholder='Phone' className='fx1'/>
        <input type='text' name='name' id='' placeholder='Username' className='fx1'/>
        <input type='password' name='' id='' placeholder='Password' className='fx1'/>
        <button type="submit"className='fx2'><Play /> Register</button>

      </form>

    </>
  )
}