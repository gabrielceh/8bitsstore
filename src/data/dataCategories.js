import categoryComics382 from '../assets/img/category-comics382.jpg';
import categoryMangaAnime382 from '../assets/img/category-manga-anime382.jpg';
import categoryMovies382 from '../assets/img/category-movies382.jpg';
import categoryVideoGames382 from '../assets/img/category-videogames382.jpg';
import categoryOthers382 from '../assets/img/category-others382.jpg';

export const validCategories = ['comics', 'manga-anime', 'videogames', 'movies-series', 'others'];

export const dataCategories = [
  {
    img382: categoryComics382,
    alt: 'Categoria Comics',
    route: '/tematica/comics?pg=1',
    label: validCategories[0],
    attribution: 'https://www.freepik.es/vectores/nube',
    labelAttri: 'Vector de Nube creado por jcomp - www.freepik.es',
    active: true,
  },
  {
    img382: categoryMangaAnime382,
    alt: 'Categoria Anime Manga',
    route: '/tematica/manga-anime?pg=1',
    label: validCategories[1],
    attribution: 'https://www.freepik.es/vectores/agua',
    labelAttri: 'Vector de Agua creado por rawpixel.com - www.freepik.es',
    active: true,
  },
  {
    img382: categoryVideoGames382,
    alt: 'Categoria Videogames',
    route: '/tematica/videogames?pg=1',
    label: validCategories[2],
    attribution: 'https://www.freepik.es/vectores/ordenador',
    labelAttri: 'Vector de Ordenador creado por catalyststuff - www.freepik.es',
    active: true,
  },
  {
    img382: categoryMovies382,
    alt: 'Categoria Movies - Series',
    route: '/tematica/movies-series?pg=1',
    label: validCategories[3],
    attribution: 'https://www.freepik.es/vectores/patron',
    labelAttri: 'Vector de Patrón creado por dgim-studio - www.freepik.es',
    active: true,
  },
  {
    img382: categoryOthers382,
    alt: 'Categoria Otros',
    route: '/tematica/others?pg=1',
    label: validCategories[4],
    attribution: 'https://www.freepik.es/vectores/fiesta',
    labelAttri: 'Vector de Fiesta creado por pikisuperstar - www.freepik.es',
    active: true,
  },
];
