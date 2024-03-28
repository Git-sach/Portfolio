export interface Post {
  id: number;
  title: string;
  resum: string;
  content: string;
  coverImageName: string;
  keywords: Keyword[];
  readTime: number;
  date: Date;
}

interface Keyword {
  id: number;
  name: string;
}
