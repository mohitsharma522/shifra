import React, { useState } from 'react'
import { createContext } from 'react'
import main from '../gemini';

export const datacontext = createContext()

function Usercontext({ children }) {

  let [speaking, setSpeaking] = useState(false)
  let [prompt, setPrompt] = useState("listening...")
  let [response, setResponse] = useState(false)

  function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.volume = 1;
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.lang = "en-GB"  // en- women voice and hi- men voice 
    window.speechSynthesis.speak(text_speak)
  }

  async function aiResponse(prompt) {
    let text = await main(prompt.split('shifra') && prompt.split('shifra'))
    let newText = text.split("**") && text.split("*") && text.replace("google", "mohit sharma") && text.replace("Google", "mohit sharma")
    speak(newText)
    setPrompt(newText)
    setResponse(true)
    setTimeout(() => {
      setSpeaking(false)
    }, 5000);

  }

  let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
  let recognition = new speechRecognition()
  recognition.onresult = (e) => {
    let currentIndex = e.resultIndex
    let transcript = e.results[currentIndex][0].transcript
    setPrompt(transcript)
    takeCommand(transcript.toLowerCase())
  }

  function takeCommand(command) { 
    if (command.includes('open') && command.includes('youtube')) {
      window.open("https://www.youtube.com", "_blank")
      speak("opening youtube...")
      setResponse(true)
      setPrompt("opening youtube...")
      setTimeout(() => {
        setSpeaking(false)
      }, 5000);
    }
    else if (command.includes('open') && command.includes('google')) {
      window.open("https://www.google.com", "_blank")
      speak("opening google...")
      setResponse(true)
      setPrompt("opening google...")
      setTimeout(() => {
        setSpeaking(false)
      }, 5000);
    }
    else if (command.includes('open') && command.includes('instagram')) {
      window.open("https://www.instagram.com", "_blank")
      speak("opening instagram...")
      setResponse(true)
      setPrompt("opening instagram...")
      setTimeout(() => {
        setSpeaking(false)
      }, 5000);
    }
    else if (command.includes('open') && command.includes('chatgpt')) {
      window.open("https://www.chatgpt.com", "_blank")
      speak("opening chatgpt...")
      setResponse(true)
      setPrompt("opening chatgpt...")
      setTimeout(() => {
        setSpeaking(false)
      }, 5000);
    }
    else if (command.includes('open') && command.includes('whatsapp')) {
      window.open("https://www.whatsapp.com", "_blank")
      speak("opening whatsapp...")
      setResponse(true)
      setPrompt("opening whatsapp...")
      setTimeout(() => {
        setSpeaking(false)
      }, 5000);
    }
    else if (command.includes('time')) {
      let time = new Date().toLocaleString(undefined, {
        hour: "numeric",
        minute: "numeric"
      });

      speak(time);
      setResponse(true);
      setPrompt(time);

      setTimeout(() => {
        setSpeaking(false);
      }, 5000);
    }

    else if (command.includes('date')) {
      let date = new Date().toLocaleString(undefined, {
        day: "numeric",
        month: "short",
        year: "numeric"
      });

      speak(date);
      setResponse(true);
      setPrompt(date);

      setTimeout(() => {
        setSpeaking(false);
      }, 5000);
    }

    else {
      aiResponse(command)
    }
  }


  let value = {
    recognition,
    speaking,
    setSpeaking,
    prompt,
    setPrompt,
    response,
    setResponse
  }
  return (
    <div>
      <datacontext.Provider value={value}>
        {children}
      </datacontext.Provider>
    </div>
  )
}

export default Usercontext
