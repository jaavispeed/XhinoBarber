import "../css/Formulario.css";

export const Formulario = () => {



  return (
    <>
      <div className="centered">
        
        <h1>Formulario</h1>
        <div className="form-container">
          <form className="form">

          <div className="form-row">
            <div>
              <h4>Nombre:</h4>
              <input type="text"/>
            </div>
            <div>
              <h4>Apellido:</h4>
              <input type="text"/>
            </div>

          </div>
            <h4>Telefono: </h4>
            <input type="text"/>

            <h4>Correo: </h4>
            <input type="text"/>

          </form>
        </div>
      </div>
    </>

  );
};
