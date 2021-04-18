import React, { Component } from 'react'
import './sideMessage.css'

class SideMessage extends Component {

    constructor(props){
        super(props)
        console.log(props)
    }

    state = {
        estado: 'inicial'
    }

    componentDidMount = () => {
        setTimeout(() => {
            this.setState({estado: 'final'})
        }, 1000)
    }

    animationStyle = () => {
        let estado = {
            backgroundImage:  "url('/images/left_text.png')"
        }

        let top = '100%'
        
        if(this.props.right){
            top =  '-100%'
            estado = {
                ...estado,
                right: '0',
                backgroundImage:  "url('/images/right_text.png')"
            }
        }

        if(this.state.estado == 'inicial'){
            estado = {
                ...estado,
                top
            }
        }

        return estado
    }

    render(){
        return (<div style={{...this.animationStyle()}} className="sideMessage"></div>)
    }

}

export default SideMessage