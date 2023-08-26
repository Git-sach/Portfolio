
export interface Experience {
  title: string;
  companyLogo?: string;
  companyName?: string;
  dateStart: Date;
  dateEnd: Date|null;
  resum: string;
  agile: boolean;
  keyWords: string[];
}

export interface ExperienceWithStyle extends Experience {
  style: {
    img: string;
    isOpen: boolean;
  }
}
