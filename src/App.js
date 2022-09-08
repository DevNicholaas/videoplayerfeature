
import './App.css';
import Footer from './footer';
import VideoPlayer from './videoplayer';

function App() {
  return (
    <div className="App">
      
    <div className='page-wrapper'>
    <div className='header'>
        Header
      </div>
      <div className='page'>
        <VideoPlayer />
      
      </div>
      <Footer />
    </div>
    </div>
  );
}

export default App;
