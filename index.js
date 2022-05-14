import React, { useState } from 'react';
import * as d3 from d3


d3.selectAll('p').style('color', 'red')

// function App() {
//     const [ text, setText ] = useState();

//     const load = function(){
//         fetch("/Users/Rajat_Other/Advance_Data_Visualization/Final_Project/Heart_Attack_detail.csv")
//             .then( response => response.text() )
//             .then( responseText => {
//                 setText( responseText );
//             });
//     };

//     return (
//         <div>
//             <button onClick={ load }>load</button>
//             <h2>text:</h2>
//             <pre>{ text }</pre>
//         </div>
    