//precisa importar ele como se fosse um OBJETO
//lembrando que precisa ter a palavra MODULE
import axios from "axios";
import { useEffect, useState } from "react";
import css from "./index.module.css";

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
    <div className={css.main}>
      {users.map((user: User, index: number) => (
        <h1 key={index}>userEmail: {user.email}</h1>
      ))}
    </div>
  );
}

export default App;
