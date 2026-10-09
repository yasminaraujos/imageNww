'use client'
import { Template, ImageCard } from '../components';
import { ImageService, useImageService } from '../resource/service';
import { useState } from 'react'; // Corrigida a aspa simples aqui
import { Image } from '../resource/image';
import { useRouter } from 'next/navigation';
import { Button } from '@/components';

export default function Galeria() {
    const router = useRouter();
    const useService = useImageService();
    const [images, setImages] = useState<Image[]>([]);
    const [query, setQuery] = useState<string>('');
    const [extension, setExtension] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false); // Estado de carregamento

    async function searchImages() {
        setLoading(true); // Ativa o loading
        try {
            const result = await useService.buscar(query, extension);
            setImages(result);
            console.table(result);
        } catch (error) {
            console.error("Erro ao buscar imagens:", error);
        } finally {
            setLoading(false); // Desativa o loading ao terminar (com sucesso ou erro)
        }
    }

    function renderImageCard(image: Image) {
        return (
            <ImageCard 
                key={image.url}
                imageName={image.name} 
                imageUrl={image.url}
                imageSize={`${image.size}`}
                uploadDate={image.uploadDate}
                extension={image.extension} 
            />
        );
    }

    function renderImageCards() {
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
                            placeholder="Buscar..."
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
                            className={`flex items-center gap-2 bg-pink-300 text-white font-bold py-2 px-4 rounded-lg
                                       shadow-[0_0_10px_rgba(57,255,20,0.4)] hover:bg-pink-400 transition-all duration-300
                                       ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                            onClick={searchImages}
                            disabled={loading} // Impede múltiplos cliques enquanto carrega
                        >
                            {loading ? (
                                <>
                                    {/* Ícone de Spinner giratório */}
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    <span>Carregando...</span>
                                </>
                            ) : (
                                <span>Search</span>
                            )}
                        </button>
                        
                        <Button
                            type="button"
                            variant="danger"
                            onClick={() => router.push('/upload')}
                            >
                            Add New
                        </Button>
                    </div>
                </section>

                {/* Se estiver carregando, mostra uma mensagem / spinner na área do grid */}
                <section className="grid grid-cols-3 gap-4 p-4">
                    {loading ? (
                        <div className="col-span-3 flex justify-center items-center py-12">
                            <p className="text-xl font-semibold text-purple-200 animate-pulse">
                                Buscando imagens...
                            </p>
                        </div>
                    ) : (
                        renderImageCards()
                    )}
                </section>

            </div>
        </Template>
    );
}