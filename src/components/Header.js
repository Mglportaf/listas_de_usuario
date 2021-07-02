//import React, { useState } from 'react';
import React from 'react';
//import reactDom from 'react-dom';
//import Modal from './AddUserModal';
import './Modal.css';

//function Header({countf,list,handledNewUserApp,mostrarModalInsertar}) {
function Header({ countf, mostrarModalInsertar }) {

    /*
// mis param q modal
    const handledNewUser = (fimgsrc,fName,fLastName,fEmail) => {
       // console.log(fimgsrc,fName,fLastName,fEmail);
        //suponiendo que esta en  app.js y asi se pasan los param al padre
        
        handledNewUserApp(fimgsrc,fName,fLastName,fEmail);
    };

    */

    // hijo padre 
    return (
        <div className="title">
            <div style={{ display:'inline-flex',alignItems:'center', width:600}}>
            <h1>User Manager ({countf})</h1>
            <button style={{borderRadius:5,marginLeft:11,fontWeight:'bold', background: "#3F51B5", color: "white", width:95,height:40 }} onClick={mostrarModalInsertar}>AGREGAR</button>
            {
                // showModal ? <div onClick={ocultarModalInsertar} className="back-drop"></div> : null
            }

            {/*<UserRowsModal onOnClickShHead={true} onOnClickHiHead={false} /> */}
            {
                //showModal ? <Modal show={showModal} close={ocultarModalInsertar} handledNewUserh={handledNewUser}/> : null 
                // showModal ? <Modal show={showModal} close={ocultarModalInsertar} handledNewUserh={handledNewUserApp}/> : null
            }
</div>
        </div>
    );

}

export default Header;