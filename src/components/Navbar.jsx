import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="glass" style={{
      position: 'fixed',
      top: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '95%',
      maxWidth: '1200px', // Increased width to fit the larger buttons
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 1000,
      overflow: 'hidden' // Ensure leaves don't fall outside the navbar
    }}>


      <div style={{ display: 'flex', alignItems: 'center', gap: '15px', zIndex: 1 }}>
        <img
          src="/BADAM SUDHEER REDDY .jpeg.png"
          alt="Badam Sudheer Reddy"
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            objectFit: 'cover',
            objectPosition: 'center top',
            border: '2px solid var(--primary-color)',
            boxShadow: '0 0 10px rgba(255,153,51,0.5)'
          }}
        />
        <div className="text-gradient" style={{ fontWeight: 900, fontSize: '1.4rem', letterSpacing: '2px' }}>
          BADAM SUDHEER REDDY
        </div>
      </div>
      <div style={{ display: 'flex', gap: '1rem', zIndex: 1 }}>
        {[
          { name: 'Home', href: '#home', bg: 'linear-gradient(45deg, #FF512F, #DD2476)' },
          { name: 'About', href: '#about', bg: 'linear-gradient(45deg, #11998e, #38ef7d)' },
          { name: 'Academics', href: '#academics', bg: 'linear-gradient(45deg, #F09819, #EDDE5D)' },
          { name: 'Skills', href: '#skills', bg: 'linear-gradient(45deg, #4facfe, #00f2fe)' },
          { name: 'Projects', href: '#projects', bg: 'linear-gradient(45deg, #f12711, #f5af19)' },
          { name: 'Certificates', href: '#certificates', bg: 'linear-gradient(45deg, #8E2DE2, #4A00E0)' },
          { name: 'Contact', href: '#contact', bg: 'linear-gradient(45deg, #ff0844, #ffb199)' }
        ].map((link) => (
          <motion.a key={link.name} href={link.href} style={{ 
            textDecoration: 'none', 
            fontSize: '1rem',
            fontWeight: '900',
            padding: '8px 16px',
            borderRadius: '20px',
            background: link.bg,
            boxShadow: `0 4px 10px rgba(255,255,255,0.15)`,
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            textShadow: '0 1px 3px rgba(0,0,0,0.5)' // Keep shadow for readability
          }}
          whileHover={{ scale: 1.1 }}
          >
            <motion.span
              animate={{ color: ['#FFFFFF', '#FFE600', '#00FFFF', '#FF00FF', '#FFFFFF'] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              {link.name}
            </motion.span>
          </motion.a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
