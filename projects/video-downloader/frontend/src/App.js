/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
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
  );
}

export default App;
*/
import React , { useState } from "react";
import axios from "axios";

function App(){
  const [url ,setUrl] = useState("");
  const [quality , setQuality] = useState("highest");
  const [platform , setPlatform] = useState("youtube");
  const [message , setMessage] = useState("");

  const handleSubmit = async (e) =>{
    e.preventDefault();
    try{
      const response = await axios.post('http://127.0.0.1:5000/download',{
        url,quality,platform
      });
      setMessage(response.data.message);
    }catch(err){
      setMessage("Error downloading videos.");
    }
  };
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Video Downloader</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Video URL:
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
            style={{ width: '100%', padding: '10px', margin: '10px 0' }}
          />
        </label>
        <br />
        <label>
          Platform:
          <select
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
            style={{ padding: '10px', margin: '10px 0' }}
          >
            <option value="youtube">YouTube</option>
            <option value="facebook">Facebook</option>
            <option value="twitter">Twitter</option>
            <option value="instagram">Instagram</option>
            <option value="tiktok">TikTok</option>
          </select>
        </label>
        <br />
        <label>
          Quality:
          <select
            value={quality}
            onChange={(e) => setQuality(e.target.value)}
            style={{ padding: '10px', margin: '10px 0' }}
          >
            <option value="highest">Highest</option>
            <option value="720p">720p</option>
            <option value="480p">480p</option>
            <option value="360p">360p</option>
          </select>
        </label>
        <br />
        <button type="submit" style={{ padding: '10px 20px', marginTop: '10px' }}>
          Download
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
export default App;