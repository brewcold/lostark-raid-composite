import { classEngravingType, classType } from '../types';

const crit10 = '치명타 적중 10%';
const critdmg8 = '치명타 시 피해 증가 8%';
const atk6 = '공격력 증가 6%';
const dmg6 = '받는 피해 증가 6%';
const def12 = '방어력 감소 12%';
const bhdmg9 = '백헤드 피해 증가 6%, 피해 증가 3%';
const spt = '서포터';
const clr = '정화';
const immune = '상태이상 면역';
const atkspd = '공격속도 증가';
const mvspd = '이동속도 증가';
const spd = '공격속도/이동속도 증가';
const atkdebuf = '적 공격력 감소';
const manaspd = '마나 회복 속도 증가';
const mana = '마나 회복';

export const cynergy: Record<
  (typeof classType)[number],
  Partial<Record<(typeof classEngravingType)[number], string[]>>
> = {
  워로드: {
    '고독한 기사': [bhdmg9, def12, clr],
    '전투 태세': [bhdmg9, def12, clr],
  },
  버서커: {
    광기: [dmg6],
    '광전사의 비기': [dmg6],
  },
  디스트로이어: {
    '중력 수련': [def12],
    '분노의 망치': [def12],
  },
  홀리나이트: {
    심판자: [spt, clr, manaspd],
    '축복의 오라': [spt, clr, manaspd],
  },
  슬레이어: { 처단자: [dmg6], 포식자: [dmg6] },
  데빌헌터: { 핸드거너: [crit10], '강화 무기': [crit10] },
  블래스터: { '화력 강화': [def12], '포격 강화': [def12] },
  호크아이: {
    '죽음의 습격': [dmg6],
    '두 번째 동료': [dmg6, mvspd],
  },
  스카우터: {
    '진화의 유산': [atk6],
    '아르데타인의 기술': [atk6],
  },
  건슬링어: {
    '사냥의 시간': [crit10],
    피스메이커: [crit10],
  },
  기공사: {
    역천지체: [atk6, clr],
    세맥타통: [atk6, clr],
  },
  창술사: {
    절제: [critdmg8],
    절정: [critdmg8],
  },
  인파이터: {
    '충격 단련': [dmg6],
    '체술 강화': [dmg6],
  },
  배틀마스터: {
    초심: [crit10, spd],
    '오의 강화': [crit10, spd],
  },
  스트라이커: {
    일격필살: [crit10, atkspd],
    오의난무: [crit10, atkspd],
  },
  브레이커: {
    권왕파천무: [dmg6],
    '수라의 길': [dmg6],
  },
  아르카나: {
    '황제의 칙령': [crit10],
    '황후의 은총': [crit10],
  },
  서머너: {
    '상급 소환사': [def12, manaspd],
    '넘치는 교감': [def12, manaspd],
  },
  소서리스: {
    점화: [dmg6],
    환류: [dmg6],
  },
  바드: {
    '진실된 용맹': [spt, immune, manaspd],
    '절실한 구원': [spt, immune, manaspd],
  },
  도화가: {
    회귀: [spt, mana, clr],
    만개: [spt, mana, clr],
  },
  기상술사: {
    이슬비: [crit10, atkdebuf],
    질풍노도: [crit10, spd],
  },
};