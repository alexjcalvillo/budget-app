import delay from 'delay';
import React, { useEffect, useState } from 'react';

// Importing animation effects
import { useSpring, animated } from 'react-spring';

function Title(props) {
  const fade = useSpring({
    to: async (next, cancel) => {
      while (true) {
        await next({ opacity: 1 });
        await delay(300);
        await next({ opacity: 0 });
        await delay(1000);
      }
    },
    from: { opacity: 0 },
    reset: true,
  });
  return (
    <>
      <div className="text-4xl text-white text-center">
        <animated.h1 style={fade}></animated.h1>
      </div>
    </>
  );
}

export default Title;
