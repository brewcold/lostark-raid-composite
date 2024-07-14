import type { ArmoryCard } from '../types';

export function calcCard(ArmoryCard: ArmoryCard): [
  {
    Name: string;
    Description: string;
  }[],
  string
] {
  const cards = ArmoryCard?.Effects[0]?.Items;
  const cardOption = ArmoryCard?.Effects[0]?.Items[cards.length - 1]?.Name;
  return [cards, cardOption];
}
