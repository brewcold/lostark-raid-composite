import { useQuery } from '@tanstack/react-query';
import { Armory } from '../types';
import { http } from '../util/fetch';

export const useCharInfo = (characterName: string) => {
  const name = characterName.trim();
  const url = `/api/get_character?nickname=${name}`;
  return useQuery<Armory>({
    queryKey: ['info', name],
    queryFn: async () => await http.GET(url),
    enabled: !!name.length,
  });
};
