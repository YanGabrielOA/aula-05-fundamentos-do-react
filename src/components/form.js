import { useState } from "react"

const Form = ()=>{

    const [name,setName] = useState("")
    const [email,setEmail] = useState("")

    {/*FUNCAO PARA EVITAR O COMPORTAMENTO PADRAO DO FORMULARIO*/}
    const handleSubmit = (event) =>{
         event.preventDefault()

         //AQUI VAI O CODIGO PARA ENVIAR OS DADOS PARA O BACKEND(API)
         console.log(name,email )
    }
    return(
    <>
    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
    <h1>Formulario de cadastro</h1>
    <br />
    <form onSubmit={handleSubmit}>
    <input 
        type="text"
        placeholder="Digite seu nome"
        //QUANDO O VALOR DO INPUT MUDAR, PEGUE O NOVO VALOR E ATUALIZE O STATE
        onChange={(event)=> setName(event.target.value)}
    />
    <br />
    <input 
        type="email"
        placeholder="Digite seu email"
        onChange={(event)=> setEmail(event.target.value)}
    />
    <br /><br />
    <button type="submit">Cadastrar</button>
    </form>
    </div>
    <br /><br />
    <br />
    </>
)}

export default Form