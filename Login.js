import React from 'react';
import './style.css';

export const Login = () => {
  return(
    <div>
      <h1>Log In </h1>
      <table >
       <tbody>
        <tr>
          <td> <h3>UserName</h3> </td>
          <td>:</td>
          <td> <input input = "text"/> </td>
        </tr>
        <tr>
          <td><h3>Password</h3></td>
          <td>:</td>
          <td><input input = "text"/></td>
        </tr>
       </tbody> 
      </table>
      <button>LOG IN </button>
  </div>
  )
}
