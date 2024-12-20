export interface Slide {
  src: string;
  alt: string;
}

const slides: Slide[] = [
  { src: 'assets/images/naruto_slide.png', alt: 'Image 1' },
  { src: 'assets/images/sasuke_slide.png', alt: 'Image 2' },
  { src: 'assets/images/sakura_slide.png', alt: 'Image 3' },
  { src: 'assets/images/kakashi_slide.png', alt: 'Image 4' }
];

export default slides;

