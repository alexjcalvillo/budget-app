import React from 'react';

// Importing animation effects
import { useSpring, animated } from 'react-spring';

function Title() {
  const props = useSpring({
    to: async (next, cancel) => {
      await next({ opacity: 1 });
      await next({ opacity: 0 });
    },
    from: { opacity: 0 },
  });
  return (
    <div>
      <h1 style={props} className="text-6xl text-white">
        Welcome to a new kind of budget.
      </h1>
    </div>
  );
}

export default Title;
