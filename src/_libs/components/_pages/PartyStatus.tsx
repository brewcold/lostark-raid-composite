'use client';
import { useCharInfo } from '../../hooks/useCharInfo';
import { Fragment } from 'react';
import { Spacing } from '../_common/Spacing/spacing';
import { View } from '../_common/View/View';
import { CharCard } from '../CharCard/CharCard';
import { useAtom } from 'jotai';
import { partyInfo } from 'src/store/party';
import { Txt } from '../_common/Txt/Txt';
import { GRID, GRID_ITEM_PARTY_NUM, PARTY_NUM, CENTERED, SITE_TITLE, INFO } from './PartyStatus.css';
import { Loader } from '../_common/Loader/Loader';
import { input } from 'src/store/input';
import ui from 'src/_libs/constants/ui';
import meta from 'src/_libs/constants/meta';

export default function PartyStatus() {
  const [characterName] = useAtom(input);
  const { isLoading } = useCharInfo(characterName);
  const [party] = useAtom(partyInfo);

  return (
    <View>
      <Spacing size="2rem" />
      {party.size === 0 && <PartyStatus.Init />}
      {party.size === 0 && isLoading ? (
        <PartyStatus.IsLoading />
      ) : (
        <View styleVariant={GRID}>
          {Array.from(party).map((members, idx) => {
            if (idx % 4 !== 0) return <CharCard key={members.characterName} characterName={members.characterName} />;
            else
              return (
                <Fragment key={idx}>
                  <View styleVariant={GRID_ITEM_PARTY_NUM}>
                    <Txt styleVariant={PARTY_NUM}>{Math.floor(idx / 4) + 1} 파티</Txt>
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

PartyStatus.Init = () => {
  return (
    <View>
      <Txt as="h1" styleVariant={SITE_TITLE}>
        {meta.TITLE}
      </Txt>
      <Spacing size="1rem" />
      <Txt as="h2" styleVariant={INFO}>
        {ui.fallbacks.init}
        <br />
        {ui.fallbacks.example}
      </Txt>
    </View>
  );
};

PartyStatus.IsLoading = () => {
  return (
    <View styleVariant={CENTERED}>
      <Loader />
    </View>
  );
};
