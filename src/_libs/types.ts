import { cynergy } from './_constants/cynergy';

interface ArmoryProfile {
  CharacterImage: string;
  ExpeditionLevel: number;
  PvpGradeName: string;
  TownLevel: number;
  TownName: string;
  Title: string | null;
  GuildMemberGrade: string | null;
  GuildName: string | null;
  UsingSkillPoint: number;
  TotalSkillPoint: number;
  Stats: Stat[];
  Tendencies: Tendency[];
  ServerName: string;
  CharacterName: string;
  CharacterLevel: number;
  CharacterClassName: (typeof classType)[number];
  ItemAvgLevel: string;
  ItemMaxLevel: string;
}

interface Stat {
  Type: string;
  Value: string;
  Tooltip: string[];
}

interface Tendency {
  Type: string;
  Point: number;
  MaxPoint: number;
}

interface ArmoryEquipment {
  Type: string;
  Name: string;
  Icon: string;
  Grade: string;
  Tooltip: Tooltip;
}

interface ArmoryEngraving {
  Effects: {
    Icon: string;
    Name: (typeof classEngravingType)[number];
    Description: string;
  }[];
  Engravings: {
    Slot: number;
    Name: string;
    Icon: string;
    Tooltop: string;
  }[];
}

interface Tooltip {
  Element_000: ElementNameTagBox;
  Element_001: ElementItemTitle;
  Element_002?: ElementSingleTextBox;
  Element_003?: ElementSingleTextBox;
  Element_004?: ElementMultiTextBox;
  Element_005?: ElementItemPartBox;
  Element_006?: ElementItemPartBox;
  Element_007?: ElementProgress;
  Element_008?: ElementSetItemGroup;
  Element_009?: ElementIndentStringGroup;
  Element_010?: ElementIndentStringGroup;
  Element_011?: ElementSingleTextBox;
  Element_012?: ElementSingleTextBox;
  Element_013?: ElementShowMeTheMoney;
}

interface ElementNameTagBox {
  type: string;
  value: string;
}

interface ElementItemTitle {
  type: string;
  value: ItemTitleValue;
}

interface ItemTitleValue {
  bEquip: number;
  leftStr0: string;
  leftStr1: string;
  leftStr2: string;
  qualityValue: number;
  rightStr0: string;
  slotData: SlotData;
}

interface SlotData {
  advBookIcon: number;
  battleItemTypeIcon: number;
  cardIcon: boolean;
  friendship: number;
  iconGrade: number;
  iconPath: string;
  imagePath: string;
  islandIcon: number;
  petBorder: number;
  rtString: string;
  seal: boolean;
  temporary: number;
  town: number;
  trash: number;
}

interface ElementSingleTextBox {
  type: string;
  value: string;
}

interface ElementMultiTextBox {
  type: string;
  value: string;
}

interface ElementItemPartBox {
  type: string;
  value: { [key: string]: string };
}

interface ElementProgress {
  type: string;
  value: ProgressValue;
}

interface ProgressValue {
  forceValue: string;
  maximum: number;
  minimum: number;
  title: string;
  value: number;
  valueType: number;
}

interface ElementSetItemGroup {
  type: string;
  value: SetItemGroupValue;
}

interface SetItemGroupValue {
  firstMsg: string;
  itemData: { [key: string]: SetItemData };
}

interface SetItemData {
  label: string;
  slotData: SlotData;
}

interface ElementIndentStringGroup {
  type: string;
  value: { [key: string]: IndentStringGroupValue };
}

interface IndentStringGroupValue {
  contentStr: { [key: string]: IndentContentStr };
  topStr: string;
}

interface IndentContentStr {
  bPoint: boolean;
  contentStr: string;
}

interface ElementShowMeTheMoney {
  type: string;
  value: string;
}

interface ArmorySkill {
  Name: string;
  Level: number;
  Icon: string;
  Tooltip: Tooltip;
}

interface ArmoryCard {
  Name: string;
  AwakeCount: number;
  AwakeTotal: number;
  Grade: string;
  Icon: string;
  Tooltip: Tooltip;
}

interface ArmoryGem {
  Effects: { Icon: string; GemSlot: number; Name: string; Description: string }[];
  Gems: { Icon: string; Slot: number; Name: string; Level: number; Tooltip: string }[];
}

export interface Armory {
  ArmoryProfile: ArmoryProfile;
  ArmoryEquipment: ArmoryEquipment[];
  ArmorySkills: ArmorySkill[];
  ArmoryEngraving: ArmoryEngraving;
  ArmoryGem: ArmoryGem;
  ArmoryCard: {
    Cards: ArmoryCard[];
    Effects: {
      CardSlots: [];
      Items: {
        Name: string;
        Description: string;
      }[];
    }[];
  };
}

export const classType = [
  '워로드',
  '버서커',
  '디스트로이어',
  '홀리나이트',
  '슬레이어',
  '데빌헌터',
  '블래스터',
  '스카우터',
  '호크아이',
  '건슬링어',
  '기공사',
  '인파이터',
  '배틀마스터',
  '창술사',
  '스트라이커',
  '브레이커',
  '서머너',
  '소서리스',
  '바드',
  '아르카나',
  '도화가',
  '기상술사',
] as const;

export const classEngravingType = [
  '고독한 기사',
  '전투 태세',
  '광기',
  '광전사의 비기',
  '중력 수련',
  '분노의 망치',
  '심판자',
  '축복의 오라',
  '처단자',
  '포식자',
  '핸드거너',
  '강화 무기',
  '화력 강화',
  '포격 강화',
  '죽음의 습격',
  '두 번째 동료',
  '진화의 유산',
  '아르데타인의 기술',
  '사냥의 시간',
  '피스메이커',
  '역천지체',
  '세맥타통',
  '절제',
  '절정',
  '충격 단련',
  '체술 강화',
  '초심',
  '오의 강화',
  '일격필살',
  '오의난무',
  '권왕파천무',
  '수라의 길',
  '황제의 칙령',
  '황후의 은총',
  '상급 소환사',
  '넘치는 교감',
  '점화',
  '환류',
  '진실된 용맹',
  '절실한 구원',
  '회귀',
  '만개',
  '이슬비',
  '질풍노도',
] as const;

export type ClassEngravingType = (typeof cynergy)[(typeof classType)[number]];