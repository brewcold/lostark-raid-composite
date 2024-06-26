import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  //최적화 로직
  //아래의 우선순위로 계산함
  // 1 - 끝마딜러의 경우 도화가, 서머너 최대한 배제
  // (지금 세팅이 끝마딜러인지 확인하는 로직 넣어야 할것 같은데 유저가 체크하게 해야하나... 현재 세팅 불일치할 수 있어서 문제)
  // 2 - 치적 기준으로 치적을 받는 사람, 안 받는 멤버를 우선 계산
  // 3 - 나머지 시너지: 선호도 설문 및 유저 스펙 (현재 스펙 기준으로 자동으로 강한 파티를 1파티에 배정)
  // 4 - 서포터 배정: 사멸 > 도/바, 타대의 경우 홀 우선 배정
  //추가 기능 구현해야 할 것
  // 1 - 멤버 고정 (고정된 멤버는 최적화 시 이동하지 않음 (제외하고 최적화함) 그 자리에 유지됨)
  // 2 - 몰아주기 (파티별 한 명을 지정해 몰아줄 수 있음)
  // 3 -
}
