import { ComponentPropsWithRef, forwardRef, Ref } from 'react';
import ui from 'src/_libs/constants/ui';
import { Input } from '../_common/Input/Input';
import { PARTY_NAME, PARTY_NAME_BORDER_COLOR, PARTY_NUMBER_COLOR } from './CharCard.css';
import { PartyNumberProps } from './PartyNumber';

type PartyNameProps = ComponentPropsWithRef<'input'> &
  PartyNumberProps & {
    partyNumber: number;
    partyName: string;
  };

function Component({ partyNumber, partyName, onChange, value, ...props }: PartyNameProps, ref: Ref<HTMLInputElement>) {
  return (
    <Input
      className={`${PARTY_NAME} ${PARTY_NUMBER_COLOR[partyNumber]} ${PARTY_NAME_BORDER_COLOR[partyNumber]}`}
      name="partyName"
      ref={ref}
      value={partyName}
      onChange={onChange}
      maxLength={12}
      placeholder={ui.placeholders.partyNameInput}
      {...props}
    />
  );
}

export const PartyNameForm = forwardRef(Component);
