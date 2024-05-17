import { classEngravingType } from 'src/_libs/types';
import { cynergy } from 'src/_libs/_constants/cynergy';
import { useCharInfo } from 'src/_libs/_hooks/useCharInfo';
import { View } from '../_common/View/view';

export function CharCard({ characterName }: { characterName: string }) {
  const { data, isFetching, status } = useCharInfo(characterName);
  if (data) {
    const { ArmoryCard, ArmoryEngraving, ArmoryGem, ArmoryProfile, ArmoryEquipment, ArmorySkills } = data;

    const cards = ArmoryCard.Effects[0].Items;
    const cardOption = ArmoryCard.Effects[0].Items[cards.length - 1].Name;

    const classEngraving: (typeof classEngravingType)[number][] = ArmoryEngraving.Effects.filter(e => {
      const trimIdx = e.Name.indexOf('Lv');
      const trimmed = e.Name.slice(0, trimIdx).trim() as (typeof classEngravingType)[number];
      return classEngravingType.includes(trimmed);
    }).map(e => e.Name.slice(0, e.Name.indexOf('Lv')).trim() as (typeof classEngravingType)[number]);

    const classCynergy = Array.from(
      new Set(classEngraving.map(e => cynergy[ArmoryProfile.CharacterClassName][e]?.join(', ')))
    ).join(', ');

    const gemsList = ArmoryGem?.Gems.map(g => {
      const idx = g.Name.indexOf('보석');
      const level = g.Name.indexOf('10레벨');
      if (level !== -1) return g.Name.slice(idx - 9, idx - 2);
      else if (idx !== -1) return g.Name.slice(idx - 8, idx - 2);
      else return '0';
    }) || ['장착한 보석 없음'];
    const gems: Map<string, number> = new Map();

    const sortedGems = gemsList.sort((o1, o2) => {
      const level1 = parseInt(o1);
      const level2 = parseInt(o2);

      // 레벨이 높은 순서대로 정렬
      if (level1 !== level2) {
        return level2 - level1;
      }

      // 레벨이 같을 경우 "멸화"가 "홍염"보다 우선
      const type1 = o1.slice(4);
      const type2 = o2.slice(4);

      if (type1 === type2) {
        return 0;
      } else if (type1 === '멸화' && type2 === '홍염') {
        return -1;
      } else {
        return 1;
      }
    });

    sortedGems.forEach(g => {
      if (g === '장착한 보석 없음') gems.set(g, 0);
      else if (gems.has(g)) {
        const currentCount = gems.get(g) || 0;
        gems.set(g, currentCount + 1);
      } else {
        gems.set(g, 1);
      }
    });

    let armorLevel = 0;
    const armorTypes = ['투구', '상의', '하의', '장갑', '어깨'];

    return (
      <View>
        <h1>{ArmoryProfile.CharacterName}</h1>
        <p>
          <span>{`${ArmoryProfile.ItemAvgLevel} ${ArmoryProfile.CharacterClassName}(${classEngraving.join()})`}</span>
          <br />
          <span>{classCynergy}</span>
        </p>

        <View>
          <p>
            카드 <strong>{cardOption}</strong>
          </p>
          <p>
            보석{' '}
            <strong>
              {Array.from(gems.keys()).map(k => {
                const amount = gems.get(k) || 0;
                return (
                  <span key={k}>
                    <span>{`${k} `}</span>
                    {amount > 0 && <span style={{ color: 'grey' }}>×{amount} </span>}
                  </span>
                );
              })}
            </strong>
          </p>
        </View>

        <p>
          {`전투 레벨 ${ArmoryProfile.CharacterLevel} 원정대 레벨 ${ArmoryProfile.ExpeditionLevel} 스킬포인트 ${ArmoryProfile.UsingSkillPoint}/${ArmoryProfile.TotalSkillPoint}`}
        </p>
        <View style={{ marginTop: '1rem' }}>
          {ArmoryEquipment.map(a => {
            const type = a.Type;
            if (armorTypes.includes(type)) {
              armorLevel = armorLevel + parseInt(a.Name);
              return null;
            } else if (type === '무기')
              return (
                <p key={a.Name}>
                  {a.Type} {a.Name}
                </p>
              );
          })}
          <p>방어구 평균 레벨 {armorLevel + 1525} </p>
        </View>
      </View>
    );
  } else if (status === 'pending')
    return (
      <View>
        <p>서버에서 데이터를 가져오는 중입니다...</p>
      </View>
    );
  else return <></>;
}
