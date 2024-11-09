import React from 'react';
import ReactDOM from 'react-dom/client';
import Hero from './components/hero';

function App() {
  return (
    <div>
      <Hero />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
