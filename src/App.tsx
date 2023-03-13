import React, { useState } from 'react';
import './App.css';

function App() {
  const [code, setCode] = useState("");
  
  function changeCode(ev: React.ChangeEvent<HTMLTextAreaElement>){
    setCode(ev.target.value);
  }

  function run(){
    eval(code);
  }

  return (
    <div className="App">
      <textarea value={code} onChange={(ev) => changeCode(ev)}></textarea>
      <button onClick={run}>Run Code</button>
      <div className='output-code'>

      </div>
    </div>
  );
}

export default App;
