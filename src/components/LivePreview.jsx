import { useRef } from 'react';
import html2canvas from 'html2canvas';

function LivePreview({ data }) {
  const {
    coupleNames,
    date,
    venue,
    schedule,
    loveStory,
    theme,
    image,
    backgroundColor,
    backgroundImage,
    fontFamily,
  } = data;

  const previewRef = useRef(null);
  const imageURL = image ? URL.createObjectURL(image) : null;
  const bgImageURL = backgroundImage ? URL.createObjectURL(backgroundImage) : null;

  const downloadAsImage = async () => {
    const canvas = await html2canvas(previewRef.current);
    const link = document.createElement('a');
    link.download = 'wedding-preview.png';
    link.href = canvas.toDataURL();
    link.click();
  };

  const themes = {
    classic: {
      backgroundColor: '#fffaf0',
      color: '#000',
      fontFamily: 'Georgia, serif',
      borderRadius: '10px',
      border: '2px solid #e0dccc',
    },
    modern: {
      backgroundColor: '#f0f2f5',
      color: '#333',
      fontFamily: 'Helvetica, Arial, sans-serif',
      borderRadius: '8px',
      border: '1px solid #ccc',
    },
    elegant: {
      backgroundColor: '#fdf6f0',
      color: '#4b2e2e',
      fontFamily: '"Playfair Display", serif',
      borderRadius: '12px',
      border: '1px solid #d2b48c',
    },
  };

  const baseTheme = themes[theme];

  const previewStyles = {
    ...baseTheme,
    backgroundColor: backgroundColor || baseTheme.backgroundColor,
    backgroundImage: bgImageURL ? `url(${bgImageURL})` : 'none',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    fontFamily: fontFamily || baseTheme.fontFamily,
    padding: '1.5rem',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    width: '100%',
    minHeight: '500px',
    overflow: 'hidden',
  };

  return (
    <div>
      <div ref={previewRef} style={previewStyles}>
        <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>You're Invited!</h2>
        {imageURL && (
          <img
            src={imageURL}
            alt="Couple"
            style={{ width: '100%', borderRadius: '8px', marginBottom: '1rem' }}
          />
        )}
        <h3 style={{ textAlign: 'center' }}>{coupleNames}</h3>
        <p><strong>Date:</strong> {date}</p>
        <p><strong>Venue:</strong> {venue}</p>
        <p><strong>Schedule:</strong><br />{schedule}</p>
        <p><strong>Message for the Guests:</strong><br />
          {loveStory?.trim()
            ? loveStory
            : "We’re so excited to celebrate our big day with you. Your presence means the world to us!"}
        </p>
      </div>

      <button onClick={downloadAsImage} style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>
        Download as Image
      </button>
    </div>
  );
}

export default LivePreview;
