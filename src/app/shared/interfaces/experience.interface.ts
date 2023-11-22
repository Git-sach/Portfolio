
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

export class ExperienceImpl {

  constructor(public props: ExperienceWithStyle){
  }

  get title() {
    return this.props.title;
  }
  get companyLogo() {
    return this.props.companyLogo;
  }
  get companyName() {
    return this.props.companyName;
  }
  get dateStart() {
    return this.props.dateStart;
  }
  get dateEnd() {
    return this.props.dateEnd;
  }
  get resum() {
    return this.props.resum;
  }
  get agile() {
    return this.props.agile;
  }
  get keyWords() {
    return this.props.keyWords;
  }
  get style() {
    return this.props.style;
  }

  monthDiffExperenceDate(){
    const dateEnd = (this.dateEnd ? this.dateEnd.getTime() : new Date().getTime())
    return Math.ceil((dateEnd - this.dateStart.getTime())/(1000*60*60*24*30));
  }

}
