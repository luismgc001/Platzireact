import React, {Component} from "react";
import axios from "axios";


class App extends Component {
  constructor(){
    super();
    this.state = {
      usuarios: []
    }
  }

  async componentDidMount(){
    const respuesta = await axios.get("https://jsonplaceholder.typicode.com/users")
    console.log(respuesta)
    this.setState({
      usuarios: [
        {
          nombre: "Rodolfo",
          correo: "Rodolfo@saldivar.com",
          enlace: "Rodolfo.com"
        },
        {
          nombre: "Platzi",
          correo: "Platzi@Platzi.com",
          enlace: "Platzi.com"
        }

      ]
  });
  };

  ponerFilas = () => (

    this.state.usuarios.map((usuario) => (
      <tr key={usuario.nombre}>
        <td key={usuario.nombre}>
          {usuario.nombre}
        </td>
        <td key={usuario.correo}>
          {usuario.correo}
        </td>
        <td key={usuario.enlace}>
          {usuario.enlace}
        </td>
      </tr>

    ))


  );
  render(){
    return(
      <div className="margen">
        <table className="tabla">
      <thead>
        <tr>
          <th>
            Nombre
          </th>
          <th>
            Correo          
          </th>
          <th>
            Enlace          
          </th>
        </tr>
        {this.ponerFilas()}

      </thead>
      <tbody>
        
        
      </tbody>
    </table>
      </div>

  
    
    )
    }
  
}  

  

export default App;