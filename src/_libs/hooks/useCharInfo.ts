import { useQuery } from '@tanstack/react-query';
import env from 'src/env';
import { Armory } from '../types';
import { http } from '../util/fetch';

export const useCharInfo = (characterName: string) => {
  const name = characterName.trim();
  const auth = new Headers({ Authorization: `bearer ${env.larkKey}`, accept: 'application/json' });

  const url = `https://developer-lostark.game.onstove.com/armories/characters/${characterName}`;
  return useQuery<Armory>({
    queryKey: ['info', name],
    queryFn: async () => await http.GET<Armory>(url, auth),
    enabled: !!name.length,
  });
};
