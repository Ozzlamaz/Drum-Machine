import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const data = [
  {
    button: 'Heater1',
    id: 'Q',
    source: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" 
  },
  {
    button: 'Heater2',
    id: 'W',
    source: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" 
  },
  {
    button: 'Heater3',
    id: 'E',
    source: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  },
  {
    button: 'Heater4',
    id: 'A',
    source: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" 
  },
  {
    button: 'Clap',
    id: 'S',
    source: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  {
    button: 'Open-HH',
    id: 'D',
    source: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" 
  },
  {
    button: "Kick-n'-Hat",
    id: 'Z',
    source: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" 
  },
  {
    button: 'Kick',
    id: 'X',
    source: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" 
  },
  {
    button: 'Closed-HH',
    id: 'C',
    source: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" 
  }
]


function App() {

  useEffect(() => {
    document.addEventListener('keydown', function (e) {
      data.map(element => {
        const {button, id} = element;
        if(e.key.toUpperCase() == id) {          
          document.getElementById(button).click();
          document.getElementById(button).classList.add('active');
          setTimeout(() => {
            document.getElementById(button).classList.remove('active');
          }, 100)
        }
      })
    })
  },[])

  const play = (audio, name) => {
    const sound = document.getElementById(audio);
    
    if(!sound.paused) {
      sound.currentTime = 0;
    }
    sound.play();
    document.getElementById('display').innerText= name;
  }

  return (
    <>
      <div id="drum-machine">
        <div className='btn-wrapper'>
          {data.map(element => {
            const {button,id,source} = element;
            return <button key={id} onClick={()=>{play(id, button)}} id={button} className='drum-pad'><audio className='clip' id={id} src={source}></audio>{id}</button>
          })}
        </div>
        <div>
          <div id="display">hello</div>
        </div>
      </div>
    </>
  )
}

export default App
