import React, { Component } from 'react'
import './logoContenido.css'

class LogoContenido extends Component {

    constructor(props){
        super(props)
    }

    state = {
        estado: 'inicial'
    }

    render(){
        return (<div style={{
            backgroundImage:  "url('/images/logo_contenido.png')",
        }} className="logoContenido"></div>)
    }

}

export default LogoContenido