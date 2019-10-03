import React, {useState} from 'react';
import './Home.css';

export default ({history}) => {

  const [height, setHeight] = useState(window.innerHeight)
  const [isSubmit, setIsSubmit] = useState(false);

  function handleSubmit(event){
    event.preventDefault();
    setIsSubmit(true);
    setTimeout(() => {
        history.push('/ImageLoad')
    },1000)
    
  }

  return (
    <div className="Container" style={{height: height}}>
        <form className={!isSubmit ? "Form" : "FormSubmited"} onSubmit={(event) => handleSubmit(event)}>
            <h1>Cadastrar</h1>
            <h3 className="Title">Digite seu nome</h3>
            <input type="text" placeholder="Nome"></input>
            <h3 className="Title">Digite seu email</h3>
            <input type="email" placeholder="Email"></input>
            <h3 className="Title">Digite sua senha</h3>
            <input type="password" placeholder="Senha"></input><br/>
            <button>Confirmar</button>

          
        </form>
        <img src="https://blog.emania.com.br/content/uploads/2019/07/fotografo-capta-imagem-incrivel-do-eclipse-solar-no-chile-Blog-eMania-03-07.jpg" onLoad={() => {console.log("dahudsaui")}}></img>

    </div>
  )
}
