import React from 'react';

const GlassmorphismDiv = ({
  children,
  className = '',
  size = 'max-w-sm',
  ...props
}) => {
  return (
    <div
      className={`relative p-8 mx-auto my-10 bg-white/10 shadow-custom backdrop-blur-sm rounded-lg  ${size} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default GlassmorphismDiv;