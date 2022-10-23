import React from "react";

const Listas = () => {
const estadoInit=["int1","int2","int3","int4"]
const estadoObjectos = [{id:1,texto:'text1'},{id:2,texto:'text2'},{id:3,texto:'text3'}]

const [lista,setLista]=React.useState(estadoInit)
const [listaO,setListaO]=React.useState(estadoObjectos)

const agg=()=>{

    setListaO([
        ...listaO,{texto:'agregado'}
    ])
}


return (
<div>

<h2>Listas</h2>
<ul>
{

    lista.map((element,index)=>(<li key={index}>{element}</li>) )
}


</ul>

<h2>Objetos</h2>
<ol>

    { listaO.map((element)=>(<li>{element.texto}</li>))}
</ol>

<button onClick={()=>agg()}> Agregar</button>
</div>


)

}
export default Listas