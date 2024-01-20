import React from 'react'
import Typed from 'typed.js'

const Texto = () => {
  const textRef = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(textRef.current, {
      strings: ['Luis Ernesto Pérez Lechuga'],
      typeSpeed: 50,
      loop: true,
      backSpeed: 50,
      backDelay: 1000
    });
    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <div className='mx-16'>
      <div className="text-white text-3xl font-mono	font-black">
        <span ref={textRef}></span>
      </div>
      <div className="text-white text-2xl font-mono	font-black">
        <p>Ingeniero en sistemas computacionales</p>
      </div>
    </div>
    
  )
}

export default Texto