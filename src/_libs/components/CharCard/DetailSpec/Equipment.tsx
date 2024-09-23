import { Fragment } from 'react';
import { armorTypes, ArmoryEquipment } from 'src/_libs/types';
import { Txt } from '../../_common/Txt/Txt';
import { INFO, INFO_SPAN } from '../CharCard.css';

export function Equipments({ data }: { data: ArmoryEquipment[] }) {
  return (
    <Txt as="p" styleVariant={INFO}>
      {data?.map(a => {
        const type = a.Type;
        if (armorTypes.includes(type)) {
          return (
            <Fragment key={a.Name}>
              <Txt as="span" styleVariant={INFO_SPAN}>
                {a.Type === '무기' ? a.Type + ' ' + a.Name : a.Name}
              </Txt>
              <br />
            </Fragment>
          );
        }
        // TODO: 세트 레벨별 이름 및 계승상태 매칭 필요
      })}
    </Txt>
  );
}
