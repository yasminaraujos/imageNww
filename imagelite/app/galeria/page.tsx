"use client";
import { Template, ImageCard } from '../components';
import { Image } from '../resource/image';
import { useImage } from '../resource/service'
import { useState } from 'react'

export default function Galeria() {
  /* const image1 = "https://www.rbsdirect.com.br/imagesrc/34536229.jpg?w=700";
  const image2 = "https://upload.wikimedia.org/wikipedia/pt/thumb/1/18/Olivia_Rodrigo_-_You_Seem_Pretty_Sad_for_a_Girl_So_in_Love.png/250px-Olivia_Rodrigo_-_You_Seem_Pretty_Sad_for_a_Girl_So_in_Love.png?utm_source=pt.wikipedia.org&utm_campaign=parser&utm_content=thumbnail";

  const [codigoImage, setCodigoImage] = useState<number>(2);
  const [urlImage, setUrlImage] = useState<string>(image1);  */

  const useService = useImage();
  const [images, setImages] = useState<Image[]>([])

  async function searchImages() {
    const result = await useService.buscar();
    setImages(result);
    console.table(result)
  }

  /*renderizando a imagem na tela*/
  function renderImageCard(image: Image ) {
    return (
      <ImageCard imageName = {image.name} 
                 imageUrl={image.url}
                 imageSize = {`${image.size} MB`}
                 uploadDate={image.uploadDate} />
    )
  }

  function renderImageCards() {
    //return images.map((image) => renderImageCard(image));
    return images.map(renderImageCard);
  }

  return (
    //<main>
    <Template>
      <button className="bg-purple-800 hover:bg-purple-950 text-white font-bold py-2 px-4 rounded" onClick={searchImages}>
        Mudar Imagem </button>
      <section className="grid grid-cols-4 gap-4  p-4">
        {
          renderImageCards()
        }
      </section>
    </Template>
    //</main>
  )
}