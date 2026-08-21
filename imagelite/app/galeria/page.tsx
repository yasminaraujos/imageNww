import { Template, ImageCard } from '@/components';

export default function Galeria() {
  return (
    <main>
      <Template>
        <section className="grid grid-cols-4 gap-4  p-4">
          <ImageCard
            imageName='Sour'
            imageUrl='https://www.rbsdirect.com.br/imagesrc/34536229.jpg?w=700'
            imageSize='15 mb'
            uploadDate='2021-05-21'
          />
          <ImageCard
            imageName='Guts (Spilled)'
            imageUrl='https://akamai.sscdn.co/letras/360x360/albuns/0/7/4/a/2163601711109652.jpg'
            imageSize='15 mb'
            uploadDate='2023-09-08'
          />
          <ImageCard
            imageName='You seem pretty sad'
            imageUrl='https://upload.wikimedia.org/wikipedia/pt/thumb/1/18/Olivia_Rodrigo_-_You_Seem_Pretty_Sad_for_a_Girl_So_in_Love.png/250px-Olivia_Rodrigo_-_You_Seem_Pretty_Sad_for_a_Girl_So_in_Love.png?utm_source=pt.wikipedia.org&utm_campaign=parser&utm_content=thumbnail'
            imageSize='15 mb'
            uploadDate='2026-06-12'
          />
          <ImageCard
            imageName='Badlands'
            imageUrl='https://upload.wikimedia.org/wikipedia/pt/thumb/4/4c/Halsey_-_Badlands.png/250px-Halsey_-_Badlands.png?utm_source=pt.wikipedia.org&utm_campaign=parser&utm_content=thumbnail'
            imageSize='15 mb'
            uploadDate='2015-08-28'
          />
          <ImageCard
            imageName='1989'
            imageUrl='https://upload.wikimedia.org/wikipedia/pt/thumb/c/c3/1989_de_Taylor_Swift.jpg/250px-1989_de_Taylor_Swift.jpg?utm_source=pt.wikipedia.org&utm_campaign=parser&utm_content=thumbnail'
            imageSize='15 mb'
            uploadDate='2014-10-27'
          />
          <ImageCard
            imageName='Addison'
            imageUrl='https://upload.wikimedia.org/wikipedia/pt/thumb/7/7c/AddisonAlbum.jpg/250px-AddisonAlbum.jpg?utm_source=pt.wikipedia.org&utm_campaign=parser&utm_content=thumbnail'
            imageSize='15 mb'
            uploadDate='2025-06-06'
          />
          <ImageCard
            imageName='Prima'
            imageUrl='https://static.wikia.nocookie.net/adelajergova/images/1/16/Prima.jpg/revision/latest/scale-to-width-down/268?cb=20260723171002'
            imageSize='15 mb'
            uploadDate='2026-09-04'
          />
        </section>
      </Template>
    </main>
  )
}