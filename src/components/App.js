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
    
    this.setState({
      usuarios: respuesta.data
  });
  };

  ponerFilas = () => (

    this.state.usuarios.map((usuario) => (
      <tr key={usuario.name}>
        <td key={usuario.name}>
          {usuario.name}
        </td>
        <td key={usuario.email}>
          {usuario.email}
        </td>
        <td key={usuario.website}>
          {usuario.website}
        </td>
      </tr>

    ))


  );
  render(){
    console.log(this.state.usuarios)
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