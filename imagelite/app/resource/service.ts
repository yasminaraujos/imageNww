import { Image } from "./image";
class ImageService {
  baseURL: string = 'http://localhost:8080/image';

  async buscar(): Promise<Image[]> {
    const response = await fetch(this.baseURL);
    return await response.json();

  }
}
//React Hook 
export const useImage = () => new ImageService();