import React, { Component } from 'react'
import './background.css'

class Background extends Component {

    state = {
        backgroundNumber: 1
    }

    componentDidMount = () => {
        setInterval(() => {
            let newBackground = this.state.backgroundNumber >= 4 ? 1 : ++this.state.backgroundNumber

            this.setState({
                backgroundNumber: newBackground
            })
        }, 3000)
    }

    allBackgrounds = () => {
        let backgrounds = []
        for (let index = 1; index < 10; index++) {
            backgrounds.push( <div className="principal" style={{
                backgroundImage: "url('/images/background_"+index+".jpg')",
                opacity: this.state.backgroundNumber == index ? 1 : 0,
            }}>
            </div>)
        }

        return backgrounds
    }

    render() {
        return (<div style={{position: 'relative'}}>
            <div style={{height: '100%', position: 'relative', backgroundColor: 'black'}}>
               {this.allBackgrounds()}
            </div>
          
        </div>

        )

    }

}

export default Background