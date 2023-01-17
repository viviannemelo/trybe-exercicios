import React, { useState } from "react";

function Login() {
  const [fullname, setFullname] = useState('');
  const [age, setAge] = useState('');
  const [location, setLocation] = useState('');
  const [module, setModule] = useState();

  return(
    <form className="Form">
        <input type="text" placeholder="Nome completo"
            value={fullname}
            onChange={({ target }) => setFullname(target.value)}
        />
        <input type="number" placeholder="Idade"
            value={age}
            onChange={({ target }) => setAge(target.value)}
        />
        <input type="text" placeholder="Cidade" 
            value={location}
            onChange={({ target }) => setLocation(target.value)}
        />
        <label htmlFor="Fundamentos">
        <input 
            type="radio"
            name="Fundamentos"
            checked={module === 'Fundamentos'}
            onChange={({ target }) => setModule(target.value)}
        />
        Fundamentos
        </label>
        <label htmlFor="Front-end">
        <input 
            type="radio"
            name="Front-end"
            checked={module === 'Front-end'}
            onChange={({ target }) => setModule(target.value)}
        />
        Front-end
        </label>
        <label htmlFor="Back-end">
        <input
            type="radio"
            name="Back-end"
            checked={module === 'Back-end'}
            onChange={({ target }) => setModule(target.value)}
        />
        Back-end
        </label>
        <label htmlFor="Ciência da Computação">
        <input
            type="radio"
            name="Ciência da Computação"
            checked={module === 'Ciência da Computação'}
            onChange={({ target }) => setModule(target.value)}
        />
        Ciência da Computação
        </label>
        <input type="button" name="button" value="Enviar"
            onClick={(event) => {
                event.preventDefault();
                console.log({fullname}, {age}, {location});
            }}
        />
    </form>
  );
}

export default Login;