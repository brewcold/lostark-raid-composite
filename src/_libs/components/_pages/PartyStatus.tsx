'use client';

import { useCharInfo } from '../../_hooks/useCharInfo';
import { Fragment } from 'react';
import { Spacing } from '../_common/Spacing/spacing';
import { View } from '../_common/View/View';
import { CharCard } from '../CharCard/CharCard';
import { useAtom } from 'jotai';
import { partyInfo } from 'src/store/party';
import { Txt } from '../_common/Txt/Txt';
import { GRID, GRID_ITEM_PARTY_NUM, PARTY_NUM, CENTERED } from './PartyStatus.css';
import { Loader } from '../_common/Loader/Loader';
import { input } from 'src/store/input';

export default function PartyStatus() {
  const [characterName] = useAtom(input);
  const { isLoading } = useCharInfo(characterName);
  const [party] = useAtom(partyInfo);

  return (
    <View>
      {party.size === 0 && isLoading ? (
        <>
          <View styleVariant={CENTERED}>
            <Loader />
          </View>
        </>
      ) : (
        <View styleVariant={GRID}>
          {Array.from(party).map((members, idx) => {
            if (idx % 4 !== 0) return <CharCard key={members.characterName} characterName={members.characterName} />;
            else
              return (
                <Fragment key={idx}>
                  <View styleVariant={GRID_ITEM_PARTY_NUM}>
                    <Txt styleVariant={PARTY_NUM}>{Math.floor(idx / 4) + 1}파티</Txt>
                  </View>
                  <CharCard key={members.order} characterName={members.characterName} />
                </Fragment>
              );
          })}
        </View>
      )}
    </View>
  );
}
