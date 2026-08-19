import React from 'react';

export const ImageCard: React.FC = () => {
  return (
    
    <div className="card relative bg-white rounded-md shadow-md transition-transform ease-in duration-300 transform hover:shadow-lg translate-y-2">
        <img src ="https://share.google/d0yTN7ucdDdtZMpV6" alt="Image" className="h-56 w-full object-cover rounded-md"/>
            <div className="card-body p-4">
                <h1 className="text+xl font-semibold mb-2 text-gray-600">Nome da Imagem</h1>
                <p className="text+xl font-semibold mb-2 text-gray-600"> Tamanho </p>
                <p className="text+xl font-semibold mb-2 text-gray-600"> TData upload </p>
            </div>
    </div>

  )
}