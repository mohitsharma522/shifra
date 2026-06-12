import { useContext } from 'react';
import './App.css'
import va from "./assets/ai.png"
import { CiMicrophoneOn } from "react-icons/ci";
import { datacontext } from './Context/Usercontext';
import speakimg from "./assets/speak.gif"
import aigif from "./assets/aiVoice.gif"

function App() {
  let { recognition, speaking, setSpeaking,prompt,setPrompt, response, setResponse } = useContext(datacontext)

  return (
    <div className="main">
      <img src={va} alt="" id='shifra' />
      <span>I'm shifra,your advanced virtual assistant</span>
      {!speaking ? <button onClick={() => {
        setResponse(false)
        setPrompt("listening...")
        setSpeaking(true)
        recognition.start()
       }}> Click here <CiMicrophoneOn/> </button>

       :<div className='response'>
        {!response? <img src={speakimg} alt="" id='speakimg'/>
         :
        <img src={aigif} alt="" id='aigif'/>}

        <p>{prompt}</p>
       </div>
      }

    </div>
  )
}

export default App
