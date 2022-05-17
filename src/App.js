import './app.css'
import { useEffect, useState } from "react";
import {
  RecordVoiceOverOutlined, 
  VoiceOverOff,
  SettingsOutlined
} from '@mui/icons-material';
import Dialog from './Dialog'

function App() {
  const [showSpeechSettings, setShowSpeechSettings] = useState(false)
  const [highlightedText, setHighlightedText] = useState('')

  // function to get value of hightlighted text and save in state
  const handleTextSet = () => {
    const text = window.getSelection().toString()
    if(text !== '') setHighlightedText(text)
  }

  // setting highlightedText state onmouseup when text has been highlighted
  useEffect(() => {
    document.addEventListener('mouseup', handleTextSet)
    return () => {
      document.removeEventListener('mouseup', handleTextSet)
    }
  }, [])

  return (
    <div className="app">
      <h1>Text to Speech</h1>
      <span>Highligh text and click the speack icon to listen to highlighted text</span>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with 
        desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>

      <div className="speechMenu">
        {true
          ? <RecordVoiceOverOutlined />
          : <VoiceOverOff />
        }
        <SettingsOutlined onClick={() => setShowSpeechSettings(true)}/>
      </div>
        
      <Dialog open={showSpeechSettings} onClose={() => setShowSpeechSettings(false)}>

      </Dialog>
      
    </div>
  )
}

export default App;
