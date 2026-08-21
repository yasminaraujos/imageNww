import React from 'react';

interface TemplateProps {
  children: React.ReactNode;
}

export const Template = ({ children }: TemplateProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

const Header: React.FC = () => {
  return (
    <header className="bg-pink-300 text-white p-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1>ImageLite</h1>
      </div>
    </header>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-pink-300 text-white p-3">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1>Developed by Yasmin Araujo</h1>
      </div>
    </footer>
  );
};
