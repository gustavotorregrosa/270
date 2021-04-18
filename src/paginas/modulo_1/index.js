import React, { Component } from 'react'
import Background from './background'
import './index.css'
import ScrollDownMessage from './scrollDownMessage'
import LogoCentral from './logoCentral'
import SideMessage from './sideMessage'
import LogoContenido from './logoContenido'

class Modulo_1 extends Component {

    state = {
        topPresentacion: '0',
        topContenido: '-100%'
    }


    arreglaEstado = () => {
        this.setState({
            topPresentacion: '-100%',
            topContenido: '0'
        })
    }

    componentDidMount = () => {
        setTimeout(() => {
            document.addEventListener('wheel', () => {
                this.arreglaEstado()
            })

            document.addEventListener('touchmove', () => {
                this.arreglaEstado()
            })

        }, 3000)

    }


    render() {
        return (<div>
            <div className="relativo">
                <Background className="absoluto" />
                <div style={{
                    transition: 'all 3s ease-in-out',
                    top: this.state.topPresentacion
                }} className="absoluto">
                    <SideMessage />
                    <SideMessage right />
                    <LogoCentral />
                    <ScrollDownMessage />
                </div>
                <div style={{
                    transition: 'all 3s ease-in-out',
                    top: this.state.topContenido

                }}
                    className="absoluto contenido">

                    <LogoContenido />

                </div>
            </div>

        </div>)

    }

}

export default Modulo_1