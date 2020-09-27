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
      <h4 style={props} className="text-4xl text-white">
        Welcome
        <br />
        to a new kind
        <br />
        of budget.
      </h4>
    </div>
  );
}

export default Title;
