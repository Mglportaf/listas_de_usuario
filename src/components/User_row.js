import React from 'react';
import styleclass from '../styles/_UserRow.module.css'

function Urow({ user, isAbleUser, deleteUser }) {

    const { id, imgsrc, Name, LastName, Email, is_active } = user;
    //<img src={require(props.img).default}></img>
    //<img src={require(`${props.img}`).default}></img>
    //<img src={require('./assets/f1.jpg').default}></img>
    //<img src={require(`${listado[0].imgsrc}`).default}/>
let color="";
    return (
        <div>            
            {/*is_active ? color="Green" : color="Red"*/}
            {/*<img style={{borderRadius:54,border:`5px solid ${color}`}} src={require(`../assets/${imgsrc}`).default} /> */}
            <img style={{borderRadius:100,border:`5px solid ${is_active ? "Green" : "Red"}`, width:200,height:"auto"}} src={imgsrc} />
            {/* 
            <p>{imgsrc}</p>
            <p>{is_active ? "Salio" : "No Salio"}</p>
            */}
            <p>{Name}</p>
            <p>{LastName}</p>
            <p>{Email}</p>
            

            {
                is_active ?
                    <button onClick={() => isAbleUser(id)}>X to Inactive</button>
                    :
                    <button onClick={() => isAbleUser(id)}>ADD to Active</button>
            }

            <button onClick={() => deleteUser(id)}>T Delete</button>
        </div>
    );

}

export default Urow;