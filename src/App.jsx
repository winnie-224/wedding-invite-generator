import { useState } from 'react'; 
import WeddingForm from './components/WeddingForm';
import LivePreview from './components/LivePreview';
import './App.css';
const defaultWeddingData = {
  coupleNames: '',
  date: '',
  venue: '',
  schedule: '',
  loveStory: '',
  theme: 'classic',
  image: null,
  backgroundColor: '#fffaf0',
  backgroundImage: null,
  fontFamily: 'Georgia, serif',
  fontColor: '',
  giftQR: null,
  showQR: true,
};
function App() {
  const [weddingData, setWeddingData] = useState(defaultWeddingData);
  return (
    <><div className='app-container' style={{ display: 'flex', gap: '2rem', padding: '2rem' }}>
      <div style={{ flex: 1 }}>
        <WeddingForm
          data={weddingData}
          setData={setWeddingData}
          defaultWeddingData={defaultWeddingData} />
      </div>
      <div style={{ flex: 1 }}>
        <LivePreview data={weddingData} />
      </div>
    </div>
    <footer
      style={{
        textAlign: 'center',
        marginTop: '3rem',
        padding: '1rem 0',
        fontSize: '0.9rem',
        color: '#666',
        borderTop: '1px solid #eee',
      }}
    >
      Made with 💘 by Vineeta —
      <a
        href="https://buymeacoffee.com/winnie_224"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: '#e28b20', marginLeft: '0.4rem', textDecoration: 'none' }}
      >
        Support the Developer ☕
      </a>
    </footer>




    </>
    
      
  );
}

export default App
