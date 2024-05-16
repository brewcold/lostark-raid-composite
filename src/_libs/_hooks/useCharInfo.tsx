import { useQuery } from '@tanstack/react-query';
import env from '../../env';
import { Armory } from '../types';

export const useCharInfo = (characterName: string) => {
  const headers = {
    headers: new Headers({ Authorization: `bearer ${env.larkKey}`, accept: 'application/json' }),
  };
  const name = characterName.trim();
  const url = `https://developer-lostark.game.onstove.com/armories/characters/${name}`;
  return useQuery<Armory>({
    queryKey: ['info', name],
    queryFn: async () => {
      const res = name.length ? await fetch(url, headers) : null;
      return res ? await res.json() : null;
    },
  });
};
