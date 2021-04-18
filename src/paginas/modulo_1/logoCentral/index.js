import React, { Component } from 'react'
import './logoCentral.css'

class LogoCentral extends Component {

    constructor(props){
        super(props)
    }

    state = {
        estado: 'inicial'
    }

    componentDidMount = () => {
        setTimeout(() => {
            this.setState({estado: 'final'})
        }, 3000)
    }

    animationStyle = () => {
        let estado = {}
        let opacity = 0
        
        if(this.state.estado == 'inicial'){
            estado = {
                ...estado,
                opacity
            }
        }

        return estado
    }

    render(){
        return (<div style={{
            ...this.animationStyle(),
            backgroundImage:  "url('/images/logo_principal.png')",
        }} className="logoCentral"></div>)
    }

}

export default LogoCentral