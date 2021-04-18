import React, { Component } from 'react'
import './scrollDownMessage.css'

class ScrollDownMessage extends Component {

    constructor(props){
        super(props)
    }

    state = {
        estado: 'inicial'
    }

    componentDidMount = () => {
        setTimeout(() => {
            this.setState({estado: 'final'})
            setInterval(() => {
                let estado = this.state.estado == 'inicial' ? 'final' : 'inicial'
                this.setState({estado})
            
               }, 1000)

        }, 6000)
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
            backgroundImage:  "url('/images/scroll_down_text.png')",
        }} className="scrollDownMessage"></div>)
    }

}

export default ScrollDownMessage