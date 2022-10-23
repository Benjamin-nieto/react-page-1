import React, { useState } from 'react'
const Estados = () => {
    const [texto, setTexto] = useState('texto inicial desde estado')
    const cambiar=()=>{
        setTexto('Cambiar')
    }
    const click = () => {
        setTexto('texto cambiado desde estado')
    }
    return (
        <div>
            <hr />
            <h2>Estados</h2>
            <h3>{texto}</h3>
            <button onClick={() => click()}>Haz
                Click</button>

                <button onClick={()=>cambiar()}>Cambiar</button>
        </div>
    )
}
export default Estados
///()=>editar()