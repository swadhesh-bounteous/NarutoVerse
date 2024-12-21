export interface Character {
    id: string;
    name: string;
    images: string[];
    debut?: {
      manga?: string;
      anime?: string;
      game?: string;
      ova?: string;
      appearsIn?: string;
    };
    jutsu?: string[];
    personal?: {
      sex?: string;
      status?: string;
      height?: { [key: string]: string };
      affiliation?: string;
      team?: string;
      titles?: string[];
    };
    rank?: {
      ninjaRank?: { [key: string]: string };
    };
    voiceActors?: {
      japanese?: string;
      english?: string[];
    };
  }
  