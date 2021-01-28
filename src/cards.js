import React from 'react';
// import {Component} from 'react';

// class Card extends Component{
//     render(){
//         return(
//             <div className ='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
//                 <img alt = "robots" src = 'https://robohash.org/test'width = "200" height= "200"/>
//                 <div>
//                     <h2>Ajay</h2>
//                     <p>Email</p>
//                 </div>
//             </div>

//         );
//     }
// }
const Card = (props) => {
    return (
        <div className ='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
                <img alt = "robots" src = {`https://robohash.org/${props.id}`}width = '100' height = '100'
                />
                <div>
                    <h2>{props.name}</h2>
                    <p>{props.email}</p>
                </div>
         </div>
    );
} 

export default Card;