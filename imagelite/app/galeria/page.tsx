'use client'
import { Template, ImageCard } from '../components';
import { ImageService, useImageService } from '../resource/service';
import { useState } from 'react';
import { Image } from '../resource/image';

export default function Galeria() {

    const useService = useImageService();
    const [images, setImages] = useState<Image[]>([]);
    const [query, setQuery] = useState<string>('')
    const [extension, setExtension] = useState<string>('')

    async function searchImages() {
        const result = await useService.buscar(query,extension);


        setImages(result);
        console.table(result);
    }
    /*renderizando a imagem na tela*/
  function renderImageCard(image: Image ) {
    return (
      <ImageCard key = {image.url}
                 imageName = {image.name} 
                 imageUrl={image.url}
                 imageSize = {`${image.size}`}
                 uploadDate={image.uploadDate}
                 extension ={image.extension} />
    )
  }

  function renderImageCards() {
    //return images.map((image) => renderImageCard(image));
    return images.map(renderImageCard);
  }


    return (
        <Template>
          <div className="min-h-screen bg-gradient-to-br from-purple-200 via-purple-900 to-black text-white p-6">
            
            <section className="flex flex-col items-center justify-center my-5">
              <div className="flex space-x-4">
                <input 
                  type="text" 
                  onChange={event => setQuery(event.target.value)}
                  className="border px-4 py-2 rounded-lg text-black"
                />
                
                <select 
                  onChange={event => setExtension(event.target.value)}
                  className="border px-4 py-2 rounded-lg text-black" 
                >
                  <option value="">All formats</option>
                  <option value="PNG">PNG</option>
                  <option value="JPG">JPG</option>
                  <option value="JPEG">JPEG</option>
                  <option value="GIF">GIF</option>
                </select>

                <button 
                  className="bg-pink-300 border border-[#39ff14] text-white font-bold py-2 px-4 rounded-lg
                             shadow-[0_0_10px_rgba(57,255,20,0.4)] hover:bg-purple-600 transition-all duration-300" 
                  onClick={searchImages}
                >
                  Search
                </button>
                
                <button className="bg-pink-600 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-lg transition-all">
                  Add New
                </button>
              </div>
            </section>

            <section className="grid grid-cols-3 gap-4 p-4">
              {renderImageCards()}
            </section>

          </div>
        </Template>
    );
}