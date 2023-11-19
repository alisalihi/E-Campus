// RectangleUtils.tsx
import React from 'react';

interface RectangleProps {
  left: number;
  right: number;
  top: number;
  height: number;
}

const createDuplicatedRectangle = (originalProps: RectangleProps): React.ReactElement => {
  const { left, right, top, height } = originalProps;

  // Increment the top position by 320 pixels
  const newTop = top + 320;

  // Create a new CSS element with the updated top position
  const duplicatedProps: RectangleProps = {
    left,
    right,
    top: newTop,
    height,
  };

  // You can apply these props to your React component or use them in your styling logic
  return (
    <div
      style={{
        position: 'absolute',
        left: `${duplicatedProps.left}px`,
        right: `${duplicatedProps.right}px`,
        top: `${duplicatedProps.top}px`,
        height: `${duplicatedProps.height}px`,
        borderRadius: '23px',
        backgroundColor: '#212837',
      }}
    ></div>
  );
};

export default createDuplicatedRectangle;
