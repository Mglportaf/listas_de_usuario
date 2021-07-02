import React from 'react';
//import reactDom from 'react-dom';
import UserRows from './User_row';
import styleclass from '../styles/_UserList.module.css'
import '../styles/UserList.css'

//function Ulist(props,{handledNewUserApp}) {
    function Ulist({list,deleteUser,isAbleUser}) {
//metodos arreglo, borrar y activo-inactivo 
/*
const handledDelUserl = (id) => {
    handledNewUserApp(id);
  };*/
    return (
        <div className="Checkout">
            {/*<p>Usuario</p> */}
            <ul>
                
                {/*{props.list.map((elemento,index) => */}
                {
                list.length> 0 ?
                list.map((elemento) =>
                (
                    <li className={styleclass.Card} key={elemento.id}>
                        <UserRows
                        user={elemento}
                        deleteUser={deleteUser}
                        isAbleUser={isAbleUser}                        
                        />
                        {/*console.log("List")*/}
                        {/*console.log(elemento)*/}
                    </li>
                ))
                :<li>
                    Sin usuarios
                </li>
            }
            </ul>

        </div>
    );

}

export default Ulist;