import React from 'react';

export const FooterComponent: React.FC = () => {
  const year: number = new Date().getFullYear();

  return (
    <div>
      <h1>Copyright © {year}</h1>
    </div>
  );
};

export default FooterComponent;
