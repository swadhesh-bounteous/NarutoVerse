import { Character } from './character_types';

export interface ClanData {
  clans: Clan[];
  currentPage: number;
  pageSize: number;
  totalClans: number;
}

export interface Clan {
  id: number;
  name: string;
  characters: Character[];
}
