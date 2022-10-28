import React from 'react'
import { Form, Button, Col, Row, Container, Card, Alert, ListGroup } from 'react-bootstrap';

const Formulario = () => {


    const inputName = React.useRef();
    const inputLstName = React.useRef();

    //number variable for update
    const [isUpdate, setIsUpdate] = React.useState();
    // default value string to form btn
    const [btnTxt, setBtnTxt] = React.useState('Ingresar')

    const [show, setShow] = React.useState(false);
    const [msg, setMsg] = React.useState('');

    const [nombre, setNombre] = React.useState('')
    const [apellido, setApellido] = React.useState('')
    const [lista, setLista] = React.useState([])


    const eliminar = (index) => {
        setLista(lista.filter(row => row !== lista[index]))

    }


    const editar = (index) => {


        let nombre = lista[index].name
        let apellido = lista[index].last_name
        inputName.current.value = nombre;
        inputLstName.current.value = apellido;
        setBtnTxt('Guardar')
        setNombre(nombre)
        setApellido(apellido)
        setIsUpdate(index)

        // console.log('editar:'+index+' '+nombre+' '+apellido+'')
    }


    const guardarDatos = (e) => {
        e.preventDefault()
        // alert https://react-bootstrap.github.io/components/alerts/#dismissing

        if (!nombre.trim()) {

            setMsg('No se encuentran valores para el campo nombre');
            setShow(true)
            inputName.current.focus();
            window.setTimeout(() => {
                setShow(false)
            }, 3000)
        } else if (!apellido.trim()) {
            setMsg('No se encuentran valores para el campo apellido');
            setShow(true)
            inputLstName.current.focus();
            window.setTimeout(() => {
                setShow(false)
            }, 3000)

        } else {
            //console.log(nombre.trim() + apellido.trim())

            if (isUpdate != null) {
                console.log('se actualizara ' + e)

                lista[isUpdate].name = nombre
                lista[isUpdate].last_name = apellido

                e.target.reset()
                setNombre('')
                setApellido('')
                setIsUpdate(null)
                setBtnTxt('Ingresar')
            } else {
                setLista([
                    ...lista, { name: nombre, last_name: apellido }
                ])
                e.target.reset()
                setNombre('')
                setApellido('')


            }

        }


    }

    return (

        <Card>
            <Alert show={show} variant='warning'>{msg}</Alert>

            <Card.Header className="cardForm">Formulario</Card.Header>

            <Container>
                <Row className='rowTB'>
                    <Col lg={6} md={12} className="header">
                        <Form onSubmit={guardarDatos} action="">
                            <Form.Group className="mb-3" controlId="formFieldName">
                                <Form.Label className="Form-Label" >Nombre</Form.Label>
                                <Form.Control type="text" placeholder="Ingresar nombre" onChange={(e) => setNombre(e.target.value)} ref={inputName} />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formFieldLastName">
                                <Form.Label className="Form-Label" >Apellido</Form.Label>
                                <Form.Control type="text" placeholder="Ingresar apellido" onChange={(e) => setApellido(e.target.value)} ref={inputLstName} />

                            </Form.Group>

                            <Button type='sumbit' variant="success" >{btnTxt}</Button>

                        </Form>


                    </Col>

                    <Col lg={6} md={12}>

                        <ListGroup>
                            {lista.map((element, index) => (
                                <ListGroup.Item key={index}>
                                    <Row>
                                        <Col lg={6} md={6}><p>{element.name} {element.last_name} </p></Col>
                                        <Col lg={3} md={3} style={{paddingBottom: '5px'}} ><Button style={{ width: '100%' }} variant="warning" onClick={() => editar(index)} >Editar</Button></Col>
                                        <Col lg={3} md={3} style={{paddingBottom: '5px'}} ><Button style={{ width: '100%' }} variant="danger" onClick={() => eliminar(index)} >Eliminar</Button></Col>
                                    </Row>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Col>

                </Row>
            </Container>
        </Card>




    )



}
export default Formulario