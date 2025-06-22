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
};
function App() {
  const [weddingData, setWeddingData] = useState(defaultWeddingData);
  return (
    <div className='app-container' style={{ display: 'flex', gap: '2rem', padding: '2rem' }}>
      <div style={{flex:1}}>
        <WeddingForm 
        data={weddingData} 
        setData={setWeddingData} 
        defaultWeddingData={defaultWeddingData}
        />
      </div>
      <div style={{flex:1}}>
        <LivePreview data={weddingData}/>
      </div>
    </div>
      
  );
}

export default App
