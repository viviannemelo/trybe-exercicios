import React, { Component } from 'react'

class About extends Component {
  render() {
    const habilidades = ['HTML', 'CSS', 'JS'];

    return (
    <div>
        <h1>Vivianne Melo</h1>
        <p>Olá, como vai você?</p>
        <h2>Minhas Habilidades</h2>
        <ul>
            { habilidades.map((habilidade, index) => <li key={index}>{habilidade}</li>) }
        </ul>
    </div>
    )
  }
}

export default About;