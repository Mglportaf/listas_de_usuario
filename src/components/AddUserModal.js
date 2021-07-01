//import React, { useState,useRef }  from 'react';
import React, { useState }  from 'react';

function Modal({ show, close,handledNewUserh }) {


// valor - funcion
const [fimgsrc, setfimgsrc] = useState("");
const [fName, setfName] = useState("");
const [fLastName, setfLastName] = useState("");
const [fEmail, setfEmail] = useState("");
const [fCheck, setfCheck] = useState(false  );

/*
//Parte de ref
const inputFile=useRef(null)
let file="";
const onButtonClick=()=>{
    inputFile.current.click();
    file=inputFile.current.file.name;
}
*/

    return (


        <div className="modal-wrapper"
     
            style={{
                transform: show ? 'translate(0vh)' : 'translate(100vh)',
                opacity: show ? '1' : '0'
            }}>
            <div className="modal-header">
                <span onClick={close}>x</span>
            </div>
            <div className="modal-content">
                <div className="modal-body">
                    <div className="form-group">
                        <label>Imagen:</label>
                        <input className="form-control" name="imgsrc" type="text" value={fimgsrc} onChange={(e)=> setfimgsrc(e.target.value)}/>
                        {// Parte de ref
                            /*
                            <input type="file" id="file" ref={inputFile} accept="image/*" style={{display:"none"}}/>
                                                   
                                                    <button id="fileSelect" onClick={onButtonClick}>Add image</button>
                            */
                        }
                    </div>
                    <div className="form-group">
                        <label>Nombre:</label>
                        <input className="form-control" name="Name" type="text" value={fName}  onChange={(e)=> setfName(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label>Apellido:</label>
                        <input className="form-control" name="LastName" type="text" value={fLastName} onChange={(e)=> setfLastName(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input className="form-control" name="Email" type="text" value={fEmail} onChange={(e)=> setfEmail(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label>Activo:</label>
                        <input className="form-control" name="is_active" type="checkbox" checked={fCheck} onChange={(e)=> setfCheck(e.target.checked)}/>                        
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <button color="danger" onClick={close}>Cancelar</button>
                {/* si no se usa fun anon se ejecuta al iniciar  */}
                <button onClick={()=>handledNewUserh(fimgsrc,fName,fLastName,fEmail,fCheck)}>Agregar</button> 
                
            </div>
        </div>




    );
    
}

export default Modal;

/*
function Modal(props) {
//
    const AddList = () => {
        const newRow = {
            imgsrc: 'path/img.jpg', Name: 'Paco', LastName: 'Rodriguez', Email: 'kikin@hotmail.com'
        }
        props.setListado([...props.setListado,{ imgsrc: 'path/img.jpg', Name: 'Paco', LastName: 'Rodriguez', Email: 'kikin@hotmail.com' }])
    }
//
    return (
        <>
            <Modal show={true} onHide={props.onOnClickHiHead}>
                <Modal.Header>
                    <div>
                        <h3>Add Person</h3>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <formGroup>
                        <label>Imagen:</label>
                        <input className="form-control" name="imgsrc" type="text" /><button>Add image</button>
                    </formGroup>
                    <formGroup>
                        <label>Nombre:</label>
                        <input className="form-control" name="Name" type="text" />
                    </formGroup>
                    <formGroup>
                        <label>Apellido:</label>
                        <input className="form-control" name="LastName" type="text" />
                    </formGroup>
                    <formGroup>
                        <label>Email:</label>
                        <input className="form-control" name="Email" type="text" />
                    </formGroup>
                </Modal.Body>
                <Modal.Footer>
                    {//
            <button color="danger" onClick={props.onClickHeader}>Cancelar</button>
            <button onClick={AddList}>AGREGAR</button>
            //}

                </Modal.Footer>

            </Modal>
        </>
    );
}

export default Modal;
*/