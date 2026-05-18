import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home">
      <div style={{ textAlign: 'center', zIndex: 1 }}>
        <div style={{
          width: '180px',
          height: '180px',
          margin: '100px auto 2rem', // Pushed down 100px from the top
          borderRadius: '50%',
          overflow: 'hidden',
          border: '4px solid var(--glass-border)',
          boxShadow: '0 0 30px var(--glow-color)',
          background: 'var(--glass-bg)'
        }}>
          <img 
            src="/BADAM SUDHEER REDDY .jpeg.png" 
            alt="Badam Sudheer Reddy" 
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
          />
        </div>

        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-gradient"
          style={{ 
            fontSize: '4.5rem', // Slightly larger as calligraphy fonts tend to look smaller
            fontWeight: 800, 
            marginBottom: '1rem', 
            lineHeight: '1.1',
            fontFamily: '"Lucida Calligraphy", cursive, serif',
            paddingRight: '20px'
          }}
        >
          Badam Sudheer Reddy
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            color: ['#FF9933', '#FFFFFF', '#138808', '#FF9933'] // Indian Tricolor: Saffron, White, Green
          }}
          transition={{ 
            opacity: { delay: 0.5, duration: 1 },
            color: { duration: 4, repeat: Infinity, ease: 'linear' }
          }}
          style={{ 
            fontSize: '2.2rem', // Increased font size significantly
            lineHeight: '1.4',
            fontWeight: 800, // Thicker font for better visibility
            fontFamily: '"Lucida Calligraphy", cursive, serif', // User requested Lucida Calligraphy
            textShadow: '0 2px 10px rgba(0,0,0,0.9), 0 0 5px rgba(0,0,0,0.8)', // Strong dark shadow so bright colors pop over bright background
            maxWidth: '800px', // Widened max width to accommodate larger font
            margin: '0 auto',
            background: 'rgba(0, 0, 0, 0.75)', // Black rectangle background
            padding: '20px 40px', // Padding inside the rectangle
            borderRadius: '15px', // Rounded edges for a premium look
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)' // Shadow for the rectangle itself
          }}
        >
          A Future-Ready CSE Student & UI/UX Enthusiast.
          <br/>
          Building experiences that defy expectations.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          style={{ marginTop: '1.5rem' }}
        >
          <a href="#projects" className="glass" style={{ 
            padding: '1rem 2rem', 
            textDecoration: 'none', 
            color: '#fff',
            fontWeight: 600,
            transition: '0.3s',
            display: 'inline-block'
          }}
          onMouseEnter={(e) => e.target.style.background = 'rgba(255,255,255,0.1)'}
          onMouseLeave={(e) => e.target.style.background = 'var(--glass-bg)'}
          >
            Explore Projects
          </a>
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;
