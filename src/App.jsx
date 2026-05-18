import React from 'react';
import Navbar from './components/Navbar';
import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import Hero from './sections/Hero';
import About from './sections/About';
import Academics from './sections/Academics';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Certificates from './sections/Certificates';
import Contact from './sections/Contact';
import './App.css';

function App() {
  React.useEffect(() => {
    const img = new Image();
    img.src = '/BADAM SUDHEER REDDY .jpeg.png';
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const size = 128; // High-res favicon size
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d');
      
      // Apply perfect circular crop mask
      ctx.beginPath();
      ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
      ctx.closePath();
      ctx.clip();
      
      // Draw the image
      ctx.drawImage(img, 0, 0, size, size);
      
      // Update or create the tab favicon link dynamically
      let link = document.querySelector("link[rel~='icon']");
      if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.getElementsByTagName('head')[0].appendChild(link);
      }
      link.type = 'image/png';
      link.href = canvas.toDataURL('image/png');
    };
  }, []);

  return (
    <div className="app-container">
      {/* Fixed Background Image */}
      <div className="yt-bg-wrapper">
        <img
          src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2070&auto=format&fit=crop"
          alt="Portfolio Background"
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover', 
            pointerEvents: 'none',
            filter: 'brightness(0.6) saturate(1.2)'
          }}
        />
      </div>
      {/* Dark overlay for readability */}
      <div className="yt-bg-overlay" />

      {/* Bottom-right Logo Watermark */}
      <img
        src="/Screenshot 2023-11-27 185847.png"
        alt="Logo"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '90px',
          height: 'auto',
          opacity: 0.85,
          zIndex: 10,
          borderRadius: '10px',
          pointerEvents: 'none',
          filter: 'drop-shadow(0 0 8px rgba(255,153,51,0.6))',
        }}
      />

      {/* Bottom-left Profile Picture */}
      <img
        src="/BADAM SUDHEER REDDY .jpeg.png"
        alt="Badam Sudheer Reddy"
        style={{
          position: 'fixed',
          bottom: '20px',
          left: '20px',
          width: '90px',
          height: '90px',
          objectFit: 'cover',
          objectPosition: 'center top',
          opacity: 0.9,
          zIndex: 10,
          borderRadius: '50%',
          border: '3px solid #FF9933',
          pointerEvents: 'none',
          filter: 'drop-shadow(0 0 10px rgba(255,153,51,0.7))',
        }}
      />

      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Academics />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      
      <footer style={{ 
        textAlign: 'center', 
        padding: '40px 20px', 
        color: 'rgba(255,255,255,0.9)',
        borderTop: '2px solid var(--glass-border)',
        marginTop: '40px',
        position: 'relative',
        overflow: 'hidden',
        background: 'rgba(5,5,20,0.7)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '160px',
      }}>
        {/* Footer Background Image */}
        <img
          src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop"
          alt="Footer Background"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
            opacity: 0.5,
          }}
        />
        {/* Dark overlay for readability */}
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.4)', zIndex: 0 }}></div>

        {/* Center Text */}
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 20px' }}>
          <p className="rainbow-text" style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '8px' }}>
            © 2026 Badam Sudheer Reddy
          </p>
          <p className="rainbow-text" style={{ 
            fontSize: '0.85rem',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            gap: '5px',
            fontWeight: 500
          }}>
            <MapPin size={14} /> Narasingapadu Village, Nekarikallu Mandal, Palnadu District - 522615
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
