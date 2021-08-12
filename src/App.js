import React from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [showLogo, setShowLogo] = React.useState(true)
  const [color, setColor] = React.useState('red')

  React.useEffect(() => {
    const colors = ['red', 'blue', 'yellow']
    let i = 0
    const id = setInterval(() => {
      i++
      setColor(colors[i % 3])
    }, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div
      className="App"
      onClick={() => {
        console.log('clicked')
        setShowLogo(p => !p)
      }}
    >
      <header className="App-header">
        {showLogo && <img src={logo} className="App-logo" alt="logo" />}
        <p color={color}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
