//import logo from './logo.svg';
//import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import UserList from './components/UserList';
import Modal from './components/AddUserModal';
import {v4 as uuidv4} from 'uuid'

function App() {

  const [showModal, setShowModal] = useState(false);

  const mostrarModalInsertar = () => {
    setShowModal(true);
  };

  const ocultarModalInsertar = () => {
    setShowModal(false);
  };

  /*
  const userList = [
    { imgsrc: '../../assets/', Name: 'Paco', LastName: 'Rodriguez', Email: 'kikin@hotmail.com' },
    { imgsrc: 'path/img.jpg', Name: 'Serladan', LastName: 'Soviesky', Email: 'Serviesky@gmail.com' },
    { imgsrc: 'path/img.jpg', Name: 'Dante', LastName: 'Jr.', Email: 'Danrj@outllok.com' }
  ]
  const [listado, setListado] = useState(userList);

  }*/

/*
Mas imagenes
https://apps.cartoonnetworkla.com/
https://apps.cartoonnetworkla.com/uploads/galleries/app/app1/4/368/mini/f8377cc8ee8dc0cfeaed237648d961d727737371.png
https://apps.cartoonnetworkla.com/uploads/galleries/app/app1/4/375/mini/be345fc9c72e7377d2dbc5b5f51b3b2a4483620.png
https://apps.cartoonnetworkla.com/uploads/galleries/app/app1/4/376/mini/cfb210e6f108f5a2a097f2037543d45694203524.png
https://apps.cartoonnetworkla.com/uploads/galleries/app/app1/5/425/mini/4f2cec6c7f0255bddf8e173800c8299723800776.jpg
*/

  const [listado, setListado] = useState([
    {id:uuidv4(), imgsrc: 'https://apps.cartoonnetworkla.com/uploads/galleries/app/app1/5/428/mini/de9276b9fedd145b6d7ce6b8a19299c63885851.jpg', Name: 'Rigbone', LastName: 'Riggs', Email: 'Rigbone@cartoonnetwork.com', is_active:true },
    {id:uuidv4(), imgsrc: 'https://apps.cartoonnetworkla.com/uploads/galleries/app/app1/5/423/mini/830612af49c2cb31854ec84f781409fb74247971.png', Name: 'Ben', LastName: 'Diez', Email: 'Ben@cartoonnetwork.com', is_active:true },
    {id:uuidv4(), imgsrc: 'https://apps.cartoonnetworkla.com/uploads/galleries/app/app1/5/401/mini/5173732fd46f1e78ba5075e3ef82797e67885932.png', Name: 'Finn', LastName: 'Mertens ', Email: 'Finn@cartoonnetwork.com', is_active:false }
    
    
    

    
  ]);
/*
{id:uuidv4(), imgsrc: 'f2.jpg', Name: 'Serladan', LastName: 'Soviesky', Email: 'Serviesky@gmail.com', is_active:true },
    {id:uuidv4(), imgsrc: 'f3.jpg', Name: 'Dante', LastName: 'Jr.', Email: 'Danrj@outllok.com', is_active:  false }
*/
  

 // console.log("Mi lista "+listado[1].id);

  const handledNewUserApp = (fimgsrc, fName, fLastName, fEmail,fCheck) => {
    // console.log(fimgsrc,fName,fLastName,fEmail);
    //setListado(fimgsrc,fName,fLastName,fEmail);
    //const newval = { fimgsrc, fName, fLastName, fEmail };
    //console.log(newval);
    setListado([...listado, {id:uuidv4(), imgsrc: fimgsrc, Name: fName, LastName: fLastName, Email: fEmail,is_active:fCheck }]);
    //suponiendo que esta en  app.js y asi se pasan los param al padre
    //handledNewUserApp(fimgsrc,fName,fLastName,fEmail)
    setShowModal(false);
    
  };

  const handledDelUser = (id) => {
    //console.log("Este es el "+id);
    //console.log("Array "+listado.filter(list => list.id !==id));
    //console.log(listado);

    //setListado(listado.filter(list => list.id !==id))
    //para prevenir errores
    setListado(listado=>listado.filter(list => list.id !==id))
  };

  const isAbleUser=(id,updateList)=>{
    //setListado(listado.map(list=> (list.id === id ? console.log("Hola"+ updateList) : console.log("Hola"+list) )))

    //setListado(listado.map(list=> (list.id === id ? updateList.is_active=false: list)))
    //listado.map(list=> (list.id === id ? {...list,list.is_active:false} : "este no es"+list.id ))
    //listado.map(list=> (list.id !== id ? list : { ...list, list.is_active: !list.is_active } ))

    setListado(listado.map(list=> (list.id !== id ? list : { ...list, is_active: !list.is_active } )))

/*
    setListado( listado.map(list => {
      if (list.id !== id) return list
let _list={...list}
_list.is_active=!_list.is_active;
return _list
      
  }
    ))*/
console.log("id "+id+"Update list "+listado)
console.log(listado)
  }

  const isDisableUser=(id,updateList)=>{
  
    setListado(listado.map(list=> (list.id !== id ? list : { ...list, is_active: !list.is_active } )))

  }

//<img src="/logo512.png"></img>
//<img src={require(`./assets/${listado[0].imgsrc}`).default}/>
//console.log("zzzzzzzzzzzzzzzz"+listado[0].imgsrc)  
return (
    
    <div className="App">

      <Header
        countf={listado.length}
        list={listado}
        handledNewUserApp={handledNewUserApp}
        mostrarModalInsertar={mostrarModalInsertar}
      />
      {/*showModal ? <div onClick={ocultarModalInsertar} className="back-drop"></div> : null*/}
      {
        showModal &&
        <React.Fragment>
          <Modal
            show={showModal}
            close={ocultarModalInsertar}
            handledNewUserh={handledNewUserApp}
          />
          <div onClick={ocultarModalInsertar} className="back-drop"></div>
        </React.Fragment>
      }

      <UserList list={listado} deleteUser={handledDelUser} isAbleUser={isAbleUser}/>

    </div>

  );
}

export default App;
