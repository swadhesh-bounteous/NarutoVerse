import { Character } from "./character_types";

export interface VillageData {
  villages: Village[];
  currentPage: number;
  pageSize: number;
  totalVillages: number;
}

export interface Village {
  id: number;
  name: string;
  characters: Character[];
}
