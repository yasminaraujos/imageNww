import React from 'react';

interface TemplateProps {
  children: React.ReactNode;
}

export const Template = ({ children }: TemplateProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-purple-900 to-black text-white flex flex-col justify-between">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

const Header: React.FC = () => {
  return (
    <header className="bg-pink-300 text-white p-4 shadow-md">
      <div className="container mx-auto px-4 flex justify-center items-center">
        <h1 className="text-xl font-bold">Image Lite</h1>
      </div>
    </header>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-pink-300 text-white p-3">
      <div className="container mx-auto px-4 flex justify-center items-center">
        <h1>Developed by Yasmin Araujo</h1>
      </div>
    </footer>
  );
};