import React from 'react';
import '../styles/UserRow.css'
import styleclass from '../styles/_UserRow.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Urow({ user, isAbleUser, deleteUser }) {

    const { id, imgsrc, Name, LastName, Email, is_active } = user;
    //<img src={require(props.img).default}></img>
    //<img src={require(`${props.img}`).default}></img>
    //<img src={require('./assets/f1.jpg').default}></img>
    //<img src={require(`${listado[0].imgsrc}`).default}/>
    let color = "";
    return (
        <div className="Contenido">
            {/*is_active ? color="Green" : color="Red"*/}
            {/*<img style={{borderRadius:54,border:`5px solid ${color}`}} src={require(`../assets/${imgsrc}`).default} /> */}
            <div style={{marginLeft:10,width: "17%"}}>
                <img style={{ marginTop:10, borderRadius: 100, border: `5px solid ${is_active ? "Green" : "Red"}`, width: 80, height: "auto" }} src={imgsrc} />
            </div>
            {/* 
            <p>{imgsrc}</p>
            <p>{is_active ? "Salio" : "No Salio"}</p>
            */}

            <div style={{width: "63%"}}><p>{Name}  {LastName}  ({Email})</p></div>
            <div style={{width: "20% ", textAlign:'center', color:'#757575', display:'flex',justifyContent:'space-around' }}>
                {
                    is_active ?
                    
                        /*<button onClick={() => isAbleUser(id)}><FontAwesomeIcon icon={['fas','times']} /></button>*/
                        <FontAwesomeIcon icon={['fas','times']} 
                            onClick={() => isAbleUser(id)}
                            />
                        :
                        /*<button onClick={() => isAbleUser(id)}>Y</button>*/
                        <FontAwesomeIcon icon={['fas','check']} 
                            onClick={() => isAbleUser(id)}
                            />
                }

{/*<button onClick={() => deleteUser(id)}>T Delete</button> */}
<FontAwesomeIcon icon={['fas','trash']} 
                           onClick={() => deleteUser(id)}
                            />
                
            </div>
        </div>
    );

}

export default Urow;