import React from 'react';

export const FooterComponent: React.FC = () => {
  const year: number = new Date().getFullYear();

  return (
    <div>
      <h3>Copyright © {year}</h3>
    </div>
  );
};

export default FooterComponent;
