import { Fragment } from 'react';
import { calcGems } from 'src/_libs/calc/gems';
import { ArmoryGem } from 'src/_libs/types';
import { Spacing } from '../../_common/Spacing/spacing';
import { Txt } from '../../_common/Txt/Txt';
import { INFO, INFO_SPAN_BOLD, GEMS_COLOR, SUB_INFO_SPAN } from '../CharCard.css';

export function Gems({ data }: { data: ArmoryGem }) {
  const [gemsAmount, GEMS] = calcGems(data);
  return (
    <Txt as="p" styleVariant={INFO}>
      {GEMS.map(k => {
        const amount = gemsAmount.get(k) || 0;
        return (
          <Fragment key={k}>
            <Txt as="span" styleVariant={`${INFO_SPAN_BOLD} ${GEMS_COLOR[k]}`}>
              {`${k}`}
              {amount > 0 && (
                <Txt as="span" styleVariant={SUB_INFO_SPAN}>
                  {`×${amount}`}
                </Txt>
              )}
            </Txt>
            <Spacing size="0.3rem" dir="hori" />
          </Fragment>
        );
      })}
    </Txt>
  );
}
