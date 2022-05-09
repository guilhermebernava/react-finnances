//precisa importar ele como se fosse um OBJETO
//lembrando que precisa ter a palavra MODULE
import axios from "axios";
import { useEffect, useState } from "react";
import Login from "../login/login";

interface User {
  email: string;
  name: string;
}

function App() {
  const [users, setUsers] = useState([{}] as any);
  useEffect(() => {
    //faz a REQUEST usando o axios
    //VERBO HTTP e URL do ENDPOINT
    axios
      //tipagem da REQUEST
      .get<User[]>(
        "http://localhost:8000/users"
        //Vai receber uma CALLBACK que vai trazer os dados da REQUEST
        //pode acessar o body atráves do  -- .data --
      )
      .then((result) => setUsers(result.data));
  }, []);
  //e para passaar as classes devemos acessar como se fosse um ATRIBUTO de OBJETO
  return (
    <div>
      <Login />
    </div>
  );
}

export default App;
