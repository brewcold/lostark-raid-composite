import { NextRequest, NextResponse } from 'next/server';
import { Armory } from 'src/_libs/types';
import { http } from 'src/_libs/util/fetch';

const larkKey = process.env.NEXT_PUBLIC_LARK_KEY || '';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const nickname = searchParams.get('nickname') || '';

  const params: { nickname: string } = { nickname };
  const searchKey = params.nickname;
  const decoded = decodeURIComponent(searchKey);

  const auth = new Headers({ Authorization: `bearer ${larkKey}`, accept: 'application/json' });
  const data = await http.GET<Armory>(
    `https://developer-lostark.game.onstove.com/armories/characters/${decoded}`,
    auth
  );

  return NextResponse.json(data);
}
