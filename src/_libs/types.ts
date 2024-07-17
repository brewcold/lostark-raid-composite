import { cynergy } from './constants/cynergy';

interface ArmoryProfile {
  ArkPassive: ArkPassive;
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

export const armorTypes = ['무기', '투구', '상의', '하의', '장갑', '어깨'];
export interface ArmoryEquipment {
  Type: string;
  Name: string;
  Icon: string;
  Grade: string;
  Tooltip: string;
}

export interface ArmoryEngraving {
  ArkPassiveEffects?: {
    Icon: string;
    Name: (typeof classEngravingType)[number];
    Description: string;
  }[];
  Effects: {
    Icon: string;
    Name: (typeof classEngravingType)[number];
    Description: string;
  }[];
  Engravings: {
    Slot: number;
    Name: string;
    Icon: string;
    Tooltip: string;
  }[];
}

export interface Tooltip {
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

export interface ArmoryCard {
  Cards: Card[];
  Effects: {
    CardSlots: [];
    Items: {
      Name: string;
      Description: string;
    }[];
  }[];
}

export interface Card {
  Name: string;
  AwakeCount: number;
  AwakeTotal: number;
  Grade: string;
  Icon: string;
  Tooltip: Tooltip;
}

export interface ArmoryGem {
  Effects: { Icon: string; GemSlot: number; Name: string; Description: string }[];
  Gems: { Icon: string; Slot: number; Name: string; Level: number; Tooltip: string }[];
}

interface ArkPassive {
  IsArkPassive: boolean;
  Points: [ArkPassiveEvolve, ArkPassiveEnlightenment];
}

interface ArkPassiveEvolve {
  Name: '진화';
  Tooltip: string;
  Value: number;
}

interface ArkPassiveEnlightenment {
  Name: '깨달음';
  Tooltip: string;
  Value: number;
}

export interface Armory {
  ArmoryProfile: ArmoryProfile;
  ArmoryEquipment: ArmoryEquipment[];
  ArmorySkills: ArmorySkill[];
  ArmoryEngraving: ArmoryEngraving;
  ArmoryGem: ArmoryGem;
  ArmoryCard: {
    Cards: Card[];
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
  '리퍼',
  '소울이터',
  '블레이드',
  '데모닉',
] as const;

export const classEngravingType = [
  '',
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
  '갈증',
  '달의 소리',
  '완벽한 억제',
  '잔재된 기운',
  '버스트',
  '멈출 수 없는 충동',
  '그믐의 경계',
  '만월의 집행자',
] as const;

export type ClassType = (typeof classType)[number];
export type ClassEngravingType = (typeof classEngravingType)[number];
export type ClassEngravingMap = Record<ClassEngravingType, [ClassType]>;

type GemSuffix = '의 보석';
type GemType = '겁화' | '멸화' | '홍염' | '작열';
type Level = '1레벨' | '2레벨' | '3레벨' | '4레벨' | '5레벨' | '6레벨' | '7레벨' | '8레벨' | '9레벨' | '10레벨';

export type GemsApiType = `${Level} ${GemType}${GemSuffix}` | '장착한 보석 없음';
export const gemTypes = [
  '10레벨 겁화',
  '9레벨 겁화',
  '8레벨 겁화',
  '7레벨 겁화',
  '6레벨 겁화',
  '5레벨 겁화',
  '4레벨 겁화',
  '3레벨 겁화',
  '2레벨 겁화',
  '1레벨 겁화',
  '10레벨 멸화',
  '9레벨 멸화',
  '8레벨 멸화',
  '7레벨 멸화',
  '6레벨 멸화',
  '5레벨 멸화',
  '4레벨 멸화',
  '3레벨 멸화',
  '2레벨 멸화',
  '1레벨 멸화',
  '10레벨 홍염',
  '9레벨 홍염',
  '8레벨 홍염',
  '7레벨 홍염',
  '6레벨 홍염',
  '5레벨 홍염',
  '4레벨 홍염',
  '3레벨 홍염',
  '2레벨 홍염',
  '1레벨 홍염',
  '10레벨 작열',
  '9레벨 작열',
  '8레벨 작열',
  '7레벨 작열',
  '6레벨 작열',
  '5레벨 작열',
  '4레벨 작열',
  '3레벨 작열',
  '2레벨 작열',
  '1레벨 작열',
];

export const gemTypesWithSuffix = gemTypes.map(gem => `${gem}의 보석`);
