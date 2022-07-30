import React from 'react'
import  './tabstyle.css';
export default function Iday3() {
  return (
    <div>
        <p>
        <h1 >1.Difference between Axios and fetch</h1>
        <hr style={{width:"500px"}}/>
        <h3>Answer:</h3>
        </p>
        <table>
            <tr>
                <th>Axios</th>
                <th>Fetch</th>
            </tr>
            <tr>
                <td>Axios has url in request object.</td>
                <td>Fetch has no url in request object.</td>
            </tr>
            <tr>
                <td>Axios is a stand-alone third party package that can be easily installed.</td>
                <td>Fetch is built into most modern browsers; no installation is required as such.</td>
            </tr>
            <tr>
                <td>Axios enjoys built-in XSRF protection.</td>
                <td>Fetch does not.</td>
            </tr>
            <tr>
                <td>Axios uses the data property.</td>
                <td>Fetch uses the body property.</td>
            </tr>
            <tr>
                <td>Axios’ data contains the object.</td>
                <td>Fetch’s body has to be stringified.</td>
            </tr>
            <tr>
                <td>Axios request is ok when status is 200 and statusText is ‘OK’.</td>
                <td>Fetch request is ok when response object contains the ok property.</td>
            </tr>
            <tr>
                <td>Axios performs automatic transforms of JSON data.</td>
                <td>Fetch is a two-step process when handling JSON data- first, to make the actual request; second, to call the .json() method on the response.</td>
            </tr>
        </table>
    </div>
  )
}

