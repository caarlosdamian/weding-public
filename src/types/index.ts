export interface Guest {
    confirm: boolean;
    guests: number;
    id: number;
    name: string;
    phone: number;
  }

  export type monthsTranslations = {
    en:string;
    es:string 
  }
  

  export type Names = {
    name: string;
  };

  export interface EventI {
    saveTitle: string;
    parents: Names[] | null;
    godFathers: Names[] | null;
    ceremonyTime: null | string;
    partyTime: string;
    dress: string;
    present: string;
    date: string;
    month: number;
    partyMapRef: string;
    photo: string;
  }
  