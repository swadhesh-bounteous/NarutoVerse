export interface Character {
  id: string;
  name: string;
  images: string[]; // Array of image URLs
  debut?: {
    manga?: string;
    anime?: string;
    novel?: string;
    movie?: string;
    game?: string;
    ova?: string;
    appearsIn?: string;
  };
  personal?: {
    birthdate?: string;
    status?: string;
    sex?: string;
    age?: { [key: string]: string }; // Age details for different parts
    height?: { [key: string]: string }; // Heights at different times
    weight?: { [key: string]: string }; // Weights at different times
    bloodType?: string;
    kekkeiGenkai?: string[]; // Kekkei Genkai abilities
    occupation?: string[]; // Array of occupations
    affiliation?: string[]; // Array of affiliations
    team?: string[]; // Array of teams
    clan?: string;
    titles?: string[]; // Array of titles
  };
  family?: { [key: string]: string }; // Key-value pairs for family members
  jutsu?: string[]; // Array of jutsu
  natureType?: string[]; // Array of nature types
  uniqueTraits?: string[]; // Array of unique traits
  rank?: {
    ninjaRank?: { [key: string]: string }; // Rank at different times
    ninjaRegistration?: string;
  };
  tools?: string[]; // Array of tools
  voiceActors?: {
    japanese?: string[]; // Array of Japanese voice actors
    english?: string[]; // Array of English voice actors
  };
}

export interface CharactersData {
  characters: Character[];
  currentPage: number;
  pageSize: number;
  totalCharacters: number;
}
