import React  from 'react'

const Cont = () => {
const [cont,setContador] = React.useState(0)
const add=()=>{
    setContador(cont+1)
}

const redo=()=>{
    setContador(cont-1)
}

return (
<div>
<hr />
<h3>Contador: {cont}</h3>
<button onClick={()=>add()}>Aumentar</button>
<button onClick={()=>redo()}>Disminuir</button>
</div>



)

}
export default Cont