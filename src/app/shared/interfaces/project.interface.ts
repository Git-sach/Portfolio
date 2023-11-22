
export interface Project {
  title: string;
  resum: string;
  keyWords: string[];
  sources: {
    website?: string;
    codeSource?: string;
  };
  images: {
    imgLeft: string;
    imgBetween: string;
    imgRight: string;
  },
  blured: boolean
}
