function WeddingForm({ data, setData, defaultWeddingData}) {
    const handleChange = (e) => {
      const { name, value, type, files } = e.target;
      setData(prev => ({
        ...prev,
        [name]: type === 'file' ? files[0] : value
      }));
    };
  
    return (
      <form style={{ width: '100%', border:'1px solid'}}>
        <h2>Wedding Invitation Setup</h2>
  
        <label>Couple Names</label><br />
        <input
          name="coupleNames"
          placeholder="Bride & Groom"
          value={data.coupleNames}
          onChange={handleChange}
        /><br /><br />
  
        <label>Wedding Date</label><br />
        <input
          type="date"
          name="date"
          value={data.date}
          onChange={handleChange}
        /><br /><br />
  
        <label>Venue</label><br />
        <input
          name="venue"
          placeholder="Venue location"
          value={data.venue}
          onChange={handleChange}
        /><br /><br />
  
        <label>Schedule / Events</label><br />
        <textarea
          name="schedule"
          placeholder="e.g. Haldi at 10AM, Wedding at 6PM"
          value={data.schedule}
          onChange={handleChange}
        ></textarea><br /><br />
  
        <label>Message for the Guests</label><br />
        <textarea
          name="loveStory"
          placeholder="Enter a personal message or invitation for your guests"
          value={data.loveStory}
          onChange={handleChange}
        ></textarea><br /><br />
  
        <h3>Customization</h3>
  
        <label>Theme</label><br />
        <select
          name="theme"
          value={data.theme}
          onChange={handleChange}
        >
          <option value="classic">Classic</option>
          <option value="modern">Modern</option>
          <option value="elegant">Elegant</option>
        </select><br /><br />
  
        <label>Choose Font</label><br />
        <select
          name="fontFamily"
          value={data.fontFamily}
          onChange={handleChange}
        >
          <option value="Georgia, serif">Georgia</option>
          <option value="Arial, sans-serif">Arial</option>
          <option value="Courier New, monospace">Courier New</option>
          <option value="'Playfair Display', serif">Playfair Display</option>
          <option value="'Dancing Script', cursive">Dancing Script</option>
        </select><br /><br />
  
        <label>Background Color</label><br />
        <input
          type="color"
          name="backgroundColor"
          value={data.backgroundColor}
          onChange={handleChange}
        /><br /><br />
  
        <label>Background Image</label><br />
        <input
          type="file"
          name="backgroundImage"
          accept="image/*"
          onChange={handleChange}
        /><br /><br />
  
        <label>Couple Photo</label><br />
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
        /><br /><br />
        <button type="button" onClick={() => setData({ ...defaultWeddingData })}>
        Reset
        </button>
      </form>
    );
  }
  
  export default WeddingForm;
  