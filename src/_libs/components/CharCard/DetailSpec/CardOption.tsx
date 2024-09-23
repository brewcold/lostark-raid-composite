import { calcCard } from 'src/_libs/calc/card';
import { ArmoryCard } from 'src/_libs/types';
import { Txt } from '../../_common/Txt/Txt';
import { INFO, INFO_SPAN_BOLD } from '../CharCard.css';

export function CardOptions({ data }: { data: ArmoryCard }) {
  const [_, cardOption] = calcCard(data);

  return (
    <Txt as="p" styleVariant={INFO}>
      <Txt as="span" styleVariant={INFO_SPAN_BOLD}>
        {cardOption}
      </Txt>
    </Txt>
  );
}
