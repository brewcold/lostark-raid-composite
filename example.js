const API = {
  Element_000: {
    type: 'NameTagBox',
    value: "<P ALIGN='CENTER'><FONT COLOR='#FA5D00'>+14 화려한 악몽의 머리장식</FONT></P>",
  },
  Element_001: {
    type: 'ItemTitle',
    value: {
      bEquip: 0,
      leftStr0: "<FONT SIZE='12'><FONT COLOR='#FA5D00'>유물 머리 방어구</FONT></FONT>",
      leftStr1: "<FONT SIZE='14'>품질</FONT>",
      leftStr2: "<FONT SIZE='14'>아이템 레벨 1660 (티어 4)</FONT>",
      qualityValue: 86,
      rightStr0: "<FONT SIZE='12'><FONT COLOR='#FFD200'>장착중</FONT></FONT>",
      slotData: {
        advBookIcon: 0,
        battleItemTypeIcon: 0,
        cardIcon: false,
        friendship: 0,
        iconGrade: 5,
        iconPath: 'https://cdn-lostark.game.onstove.com/efui_iconatlas/mar_item/mar_item_01_145.png',
        imagePath: '',
        islandIcon: 0,
        petBorder: 0,
        rtString: '',
        seal: false,
        temporary: 0,
        town: 0,
        trash: 0,
      },
    },
  },
  Element_002: {
    type: 'SingleTextBox',
    value: "<FONT SIZE='12'>아르카나 전용</FONT>",
  },
  Element_003: {
    type: 'SingleTextBox',
    value: "<FONT SIZE='12'>캐릭터 귀속됨</FONT>",
  },
  Element_004: {
    type: 'MultiTextBox',
    value: "|<font color='#C24B46'>거래 불가</font>",
  },
  Element_005: {
    type: 'ItemPartBox',
    value: {
      Element_000: "<FONT COLOR='#A9D0F5'>기본 효과</FONT>",
      Element_001: '물리 방어력 +6210<BR>마법 방어력 +6900<BR>지능 +46228<BR>체력 +5945',
    },
  },
  Element_006: {
    type: 'ItemPartBox',
    value: {
      Element_000: "<FONT COLOR='#A9D0F5'>추가 효과</FONT>",
      Element_001: '생명 활성력 +1036',
    },
  },
  Element_007: {
    type: 'ItemPartBox',
    value: {
      Element_000: "<FONT COLOR='#A9D0F5'>아크 패시브 포인트 효과</FONT>",
      Element_001: '진화 +8',
    },
  },
  Element_008: {
    type: 'Progress',
    value: {
      forceValue: ' ',
      maximum: 25000,
      minimum: 0,
      title: "<FONT SIZE='12'><FONT COLOR='#A9D0F5'>현재 단계 재련 경험치</FONT></FONT>",
      value: 0,
      valueType: 1,
    },
  },
  Element_009: {
    type: 'IndentStringGroup',
    value: {
      Element_000: {
        contentStr: {
          Element_000: {
            bPoint: false,
            contentStr: '지능 +5880',
          },
          Element_001: {
            bPoint: false,
            contentStr:
              "<FONT COLOR='#FFD200'>모든 장비에 적용된 총 <img src='emoticon_Transcendence_Grade' width='18' height='18' vspace ='-4'></img>103개</FONT>",
          },
          Element_002: {
            bPoint: false,
            contentStr:
              "<img src='emoticon_Transcendence_Grade' width='18' height='18' vspace ='-4'></img><font color='#ffffff'>5</font> - <font color='#ffffff'>장착중인 모든 장비의 초월 등급 당 최대 생명력이 <FONT COLOR='#99ff99'>80</FONT>씩, 아군 공격력 강화 효과가 <FONT COLOR='#99ff99'>0.01%</FONT>씩 증가합니다.</font>",
          },
          Element_003: {
            bPoint: false,
            contentStr:
              "<img src='emoticon_Transcendence_Grade' width='18' height='18' vspace ='-4'></img><font color='#ffffff'>10</font> - <font color='#ffffff'>장착중인 모든 장비의 초월 등급 당 힘, 민첩, 지능이 <FONT COLOR='#99ff99'>55</FONT>씩, 아군 공격력 강화 효과가 <FONT COLOR='#99ff99'>0.01%</FONT>씩 증가합니다.</font>",
          },
          Element_004: {
            bPoint: false,
            contentStr:
              "<img src='emoticon_Transcendence_Grade' width='18' height='18' vspace ='-4'></img><font color='#ffffff'>15</font> - <font color='#ffffff'>장착중인 모든 장비의 초월 등급 당 무기 공격력이 <FONT COLOR='#99ff99'>14</FONT>씩, 아군 공격력 강화 효과가 <FONT COLOR='#99ff99'>0.01%</FONT>씩 증가합니다.</font>",
          },
          Element_005: {
            bPoint: false,
            contentStr:
              "<img src='emoticon_Transcendence_Grade' width='18' height='18' vspace ='-4'></img><font color='#ffffff'>20</font> - <font color='#ffffff'>장착중인 모든 장비의 초월 등급 당 공격력이 <FONT COLOR='#99ff99'>6</FONT>씩, 아군 공격력 강화 효과가 <FONT COLOR='#99ff99'>0.01%</FONT>씩 증가합니다.</font>",
          },
        },
        topStr:
          "<FONT SIZE='12' COLOR='#A9D0F5'>슬롯 효과</FONT><BR><FONT COLOR='#FF9632'>[초월]</FONT> <FONT COLOR='#FFD200'>7</FONT>단계 <img src='emoticon_Transcendence_Grade' width='18' height='18' vspace ='-4'></img>21",
      },
    },
  },
  Element_010: {
    type: 'IndentStringGroup',
    value: {
      Element_000: {
        contentStr: {
          Element_000: {
            bPoint: true,
            contentStr:
              "<FONT color='#FFD200'>[투구]</FONT> 회심 (질서) <FONT color='#FFD200'>Lv.5</FONT><br>공격력 +1.44%<BR>물리 방어력 +3000<BR>'회심 (혼돈)' 효과와 함께 활성화 시, '회심' 연성 추가 효과 발동",
          },
          Element_001: {
            bPoint: true,
            contentStr:
              "<FONT color='#FFD200'>[공용]</FONT> 무기 공격력 <FONT color='#FFD200'>Lv.2</FONT><br>무기 공격력 +488",
          },
        },
        topStr:
          "<FONT COLOR='#FFE65A'>[엘릭서]</FONT><br><font color='#91fe02'><FONT size='12'>지혜의 엘릭서</FONT></font>",
      },
    },
  },
  Element_011: {
    type: 'IndentStringGroup',
    value: {
      Element_000: {
        contentStr: {
          Element_000: {
            bPoint: true,
            contentStr:
              "<font color='#ffffff'><font color='#FFD200'>1단계 : <FONT size='12'>지혜의 엘릭서</FONT> 레벨 합 35</font><br>공격이 치명타로 적중 시 적에게 주는 피해가 <FONT color='#D4FF88'>6%</FONT> 추가로 증가한다.</font>",
          },
          Element_001: {
            bPoint: true,
            contentStr:
              "<font color='#ffffff'><font color='#FFD200'>2단계 : <FONT size='12'>지혜의 엘릭서</FONT> 레벨 합 40</font><br>1단계 효과가 강화되어, 공격이 치명타로 적중 시 적에게 주는 피해 증가 수치가 <FONT color='#D4FF88'>12%</FONT>로 적용된다.</font>",
          },
        },
        topStr:
          "<FONT SIZE='12' COLOR='#A9D0F5'>연성 추가 효과</FONT><br><FONT SIZE='12' color='#91FE02'>회심 (2단계)</FONT>",
      },
    },
  },
  Element_012: {
    type: 'ItemPartBox',
    value: {
      Element_000: "<FONT COLOR='#A9D0F5'>세트 효과 레벨</FONT>",
      Element_001: "악몽 <FONT COLOR='#FFD200'>Lv.3</FONT>",
    },
  },
  Element_013: {
    type: 'SetItemGroup',
    value: {
      firstMsg: "<font size='14'><font color='#91fe02'>악몽</font></font>",
      itemData: {
        Element_000: {
          label: " <FONT COLOR='#FFD200'>Lv.3</FONT>",
          slotData: {
            iconGrade: 10,
            iconPath: 'https://cdn-lostark.game.onstove.com/efui_iconatlas/tooltip/tooltip_0_11.png',
            imagePath: '',
          },
        },
        Element_001: {
          label: " <FONT COLOR='#FFD200'>Lv.3</FONT>",
          slotData: {
            iconGrade: 10,
            iconPath: 'https://cdn-lostark.game.onstove.com/efui_iconatlas/tooltip/tooltip_0_12.png',
            imagePath: '',
          },
        },
        Element_002: {
          label: " <FONT COLOR='#FFD200'>Lv.3</FONT>",
          slotData: {
            iconGrade: 10,
            iconPath: 'https://cdn-lostark.game.onstove.com/efui_iconatlas/tooltip/tooltip_0_13.png',
            imagePath: '',
          },
        },
        Element_003: {
          label: " <FONT COLOR='#FFD200'>Lv.3</FONT>",
          slotData: {
            iconGrade: 10,
            iconPath: 'https://cdn-lostark.game.onstove.com/efui_iconatlas/tooltip/tooltip_0_14.png',
            imagePath: '',
          },
        },
        Element_004: {
          label: " <FONT COLOR='#FFD200'>Lv.3</FONT>",
          slotData: {
            iconGrade: 10,
            iconPath: 'https://cdn-lostark.game.onstove.com/efui_iconatlas/tooltip/tooltip_0_15.png',
            imagePath: '',
          },
        },
        Element_005: {
          label: " <FONT COLOR='#FFD200'>Lv.3</FONT>",
          slotData: {
            iconGrade: 10,
            iconPath: 'https://cdn-lostark.game.onstove.com/efui_iconatlas/tooltip/tooltip_0_16.png',
            imagePath: '',
          },
        },
      },
    },
  },
  Element_014: {
    type: 'IndentStringGroup',
    value: {
      Element_000: {
        contentStr: {
          Element_000: {
            bPoint: true,
            contentStr:
              "<font size='12'><font color='#ffffff'>마나 소모량이 <FONT COLOR='#99FF99'>50%</FONT> 감소하고, 마나를 소모하는 스킬의 피해가 <FONT COLOR='#99FF99'>17%</FONT> 증가한다.</font></font>",
          },
        },
        topStr:
          "<font size='14'><font color='#91fe02'>2 세트 효과<BR>[<font size='14'><font color='#aaaaaa'>Lv.1 / Lv.2 / <FONT COLOR='#FFD200'>Lv.3</FONT></font></font>]</font></font>",
      },
      Element_001: {
        contentStr: {
          Element_000: {
            bPoint: true,
            contentStr:
              "<font size='12'><font color='#ffffff'>마나를 보유하고 있는 클래스가 각성기 사용 시 '마나 중독' 효과를 획득한다.<BR>현재 마나량이 <FONT COLOR='#99FF99'>30%</FONT> 이하에서 스킬 사용 시 '마나 중독' 효과가 제거 되고 '끝없는 마나' 효과로 변경된다.<BR>'끝없는 마나' 상태에서 현재 마나량이 <FONT COLOR='#99FF99'>100%</FONT>가 될 시 해당 효과가 제거 되고 '마나 중독' 효과로 변경된다. 두 효과는 동시에 적용되지 않는다.<BR>'마나 중독' : 추가 피해가 <FONT COLOR='#99FF99'>20%</FONT> 증가 하지만 마나를 소모하는 스킬 사용 시 최대 마나량의 <FONT COLOR='#ff9999'>7%</FONT>가 추가로 소모된다.<BR>'끝없는 마나' : 매 초 마다 최대 마나량의 <FONT COLOR='#99FF99'>3%</FONT>가 회복되며 스킬 재사용 대기시간이 <FONT COLOR='#99FF99'>23%</FONT> 감소하고 공격 및 이동속도가 <FONT COLOR='#99FF99'>12%</FONT> 증가한다.</font></font>",
          },
        },
        topStr:
          "<font size='14'><font color='#91fe02'>4 세트 효과<BR>[<font size='14'><font color='#aaaaaa'>Lv.1 / Lv.2 / <FONT COLOR='#FFD200'>Lv.3</FONT></font></font>]</font></font>",
      },
      Element_002: {
        contentStr: {
          Element_000: {
            bPoint: true,
            contentStr:
              "<font size='12'><font color='#ffffff'>'마나 중독' 효과 시 적에게 주는 피해가 <FONT COLOR='#99FF99'>20%</FONT> 추가 증가한다.<BR>'끝없는 마나' 효과 시 스킬 재사용 대기시간이 <FONT COLOR='#99FF99'>20%</FONT> 추가 감소하고, 공격 및 이동속도가 <FONT COLOR='#99FF99'>3%</FONT> 추가 증가한다.</font></font>",
          },
        },
        topStr:
          "<font size='14'><font color='#91fe02'>6 세트 효과<BR>[<font size='14'><font color='#aaaaaa'>Lv.1 / Lv.2 / <FONT COLOR='#FFD200'>Lv.3</FONT></font></font>]</font></font>",
      },
    },
  },
  Element_015: {
    type: 'SingleTextBox',
    value: "<FONT SIZE='12'><FONT COLOR='#C24B46'>분해불가</FONT></FONT>",
  },
  Element_016: {
    type: 'SingleTextBox',
    value: "<Font color='#5FD3F1'>[세트 업그레이드] 대도시 - 세트 장비 관리</font>",
  },
  Element_017: {
    type: 'ShowMeTheMoney',
    value: "<FONT SIZE='12'><FONT COLOR='#FFFFFF'>내구도 <FONT COLOR='#FFFFFF'>66 / 66</FONT></FONT></FONT>|",
  },
};

const API_2 = {
  Element_000: {
    type: 'NameTagBox',
    value: "<P ALIGN='CENTER'><FONT COLOR='#E3C7A1'>+15 차오른 몽환의 환각 장갑</FONT></P>",
  },
  Element_001: {
    type: 'ItemTitle',
    value: {
      bEquip: 0,
      leftStr0: "<FONT SIZE='12'><FONT COLOR='#E3C7A1'>고대 장갑</FONT></FONT>",
      leftStr1: "<FONT SIZE='14'>품질</FONT>",
      leftStr2: "<FONT SIZE='14'>아이템 레벨 1600 (티어 3)</FONT>",
      qualityValue: 88,
      rightStr0: "<FONT SIZE='12'><FONT COLOR='#FFD200'>장착중</FONT></FONT>",
      slotData: {
        advBookIcon: 0,
        battleItemTypeIcon: 0,
        cardIcon: false,
        friendship: 0,
        iconGrade: 6,
        iconPath: 'https://cdn-lostark.game.onstove.com/efui_iconatlas/sc_item/sc_item_162.png',
        imagePath: '',
        islandIcon: 0,
        petBorder: 0,
        rtString: '',
        seal: false,
        temporary: 0,
        town: 0,
        trash: 0,
      },
    },
  },
  Element_002: {
    type: 'SingleTextBox',
    value: "<FONT SIZE='12'>스카우터 전용</FONT>",
  },
  Element_003: {
    type: 'SingleTextBox',
    value: "<FONT SIZE='12'>캐릭터 귀속됨</FONT>",
  },
  Element_004: {
    type: 'MultiTextBox',
    value: "|<font color='#C24B46'>거래 불가</font>",
  },
  Element_005: {
    type: 'ItemPartBox',
    value: {
      Element_000: "<FONT COLOR='#A9D0F5'>기본 효과</FONT>",
      Element_001: '물리 방어력 +4523<BR>마법 방어력 +4523<BR>민첩 +37216<BR>체력 +3131',
    },
  },
  Element_006: {
    type: 'ItemPartBox',
    value: {
      Element_000: "<FONT COLOR='#A9D0F5'>추가 효과</FONT>",
      Element_001: '생명 활성력 +1085',
    },
  },
  Element_007: {
    type: 'Progress',
    value: {
      forceValue: ' ',
      maximum: 45000,
      minimum: 0,
      title: "<FONT SIZE='12'><FONT COLOR='#A9D0F5'>현재 단계 재련 경험치</FONT></FONT>",
      value: 0,
      valueType: 1,
    },
  },
  Element_008: {
    type: 'IndentStringGroup',
    value: {
      Element_000: {
        contentStr: {
          Element_000: {
            bPoint: true,
            contentStr:
              "<FONT color='#FFD200'>[장갑]</FONT> 달인 (혼돈) <FONT color='#FFD200'>Lv.5</FONT><br>적에게 주는 피해 +1.44%<BR>마법 방어력 +3000<BR>'달인 (질서)' 효과와 함께 활성화 시, '달인' 연성 추가 효과 발동",
          },
          Element_001: {
            bPoint: true,
            contentStr: "<FONT color='#FFD200'>[공용]</FONT> 공격력 <FONT color='#FFD200'>Lv.2</FONT><br>공격력 +253",
          },
        },
        topStr:
          "<FONT SIZE='12' COLOR='#A9D0F5'>슬롯 효과</FONT><BR><FONT COLOR='#FFE65A'>[엘릭서]</FONT><br><font color='#91fe02'><FONT size='12'>지혜의 엘릭서</FONT></font>",
      },
    },
  },
  Element_009: {
    type: 'IndentStringGroup',
    value: {
      Element_000: {
        contentStr: {
          Element_000: {
            bPoint: true,
            contentStr:
              "<font color='#ffffff'><font color='#FFD200'>1단계 : <FONT size='12'>지혜의 엘릭서</FONT> 레벨 합 35</font><br>이동기 및 기상기를 제외한 스킬 사용 시 <FONT color='#FFFFAC'>10</FONT>초 간 '달인' 중첩을 얻는다.<BR>달인: 치명타 적중률 <FONT color='#D4FF88'>1.4%</FONT> 증가 (최대 <FONT color='#FFFFAC'>5</FONT>중첩) <BR>피격 시 '달인' 중첩을 <FONT color='#FF9999'>1</FONT> 잃는다. 단, 중첩은 <FONT color='#FFFFAC'>0.5</FONT>초에 <FONT color='#FFFFAC'>1</FONT>회만 감소한다.</font>",
          },
          Element_001: {
            bPoint: true,
            contentStr:
              "<font color='#ffffff'><font color='#FFD200'>2단계 : <FONT size='12'>지혜의 엘릭서</FONT> 레벨 합 40</font><br>'달인' 효과가 강화되어 중첩 당 추가 피해가 <FONT color='#D4FF88'>1.7%</FONT> 추가로 증가한다.</font>",
          },
        },
        topStr:
          "<FONT SIZE='12' COLOR='#A9D0F5'>연성 추가 효과</FONT><br><FONT SIZE='12' color='#91FE02'>달인 (2단계)</FONT>",
      },
    },
  },
  Element_010: {
    type: 'ItemPartBox',
    value: {
      Element_000: "<FONT COLOR='#A9D0F5'>세트 효과 레벨</FONT>",
      Element_001: "환각 <FONT COLOR='#FFD200'>Lv.3</FONT>",
    },
  },
  Element_011: {
    type: 'SetItemGroup',
    value: {
      firstMsg: "<font size='14'><font color='#91fe02'>환각</font></font>",
      itemData: {
        Element_000: {
          label: " <FONT COLOR='#FFD200'>Lv.3</FONT>",
          slotData: {
            iconGrade: 10,
            iconPath: 'https://cdn-lostark.game.onstove.com/efui_iconatlas/tooltip/tooltip_0_11.png',
            imagePath: '',
          },
        },
        Element_001: {
          label: " <FONT COLOR='#FFD200'>Lv.3</FONT>",
          slotData: {
            iconGrade: 10,
            iconPath: 'https://cdn-lostark.game.onstove.com/efui_iconatlas/tooltip/tooltip_0_12.png',
            imagePath: '',
          },
        },
        Element_002: {
          label: " <FONT COLOR='#FFD200'>Lv.3</FONT>",
          slotData: {
            iconGrade: 10,
            iconPath: 'https://cdn-lostark.game.onstove.com/efui_iconatlas/tooltip/tooltip_0_13.png',
            imagePath: '',
          },
        },
        Element_003: {
          label: " <FONT COLOR='#FFD200'>Lv.3</FONT>",
          slotData: {
            iconGrade: 10,
            iconPath: 'https://cdn-lostark.game.onstove.com/efui_iconatlas/tooltip/tooltip_0_14.png',
            imagePath: '',
          },
        },
        Element_004: {
          label: " <FONT COLOR='#FFD200'>Lv.3</FONT>",
          slotData: {
            iconGrade: 10,
            iconPath: 'https://cdn-lostark.game.onstove.com/efui_iconatlas/tooltip/tooltip_0_15.png',
            imagePath: '',
          },
        },
        Element_005: {
          label: " <FONT COLOR='#FFD200'>Lv.3</FONT>",
          slotData: {
            iconGrade: 10,
            iconPath: 'https://cdn-lostark.game.onstove.com/efui_iconatlas/tooltip/tooltip_0_16.png',
            imagePath: '',
          },
        },
      },
    },
  },
  Element_012: {
    type: 'IndentStringGroup',
    value: {
      Element_000: {
        contentStr: {
          Element_000: {
            bPoint: true,
            contentStr:
              "<font size='12'><font color='#ffffff'>공격 적중 시 <FONT COLOR='#ffff99'>6</FONT>초 동안 적에게 주는 피해가 <FONT COLOR='#99FF99'>17%</FONT> 증가하는 '환각' 효과를 획득한다. <BR>해당 효과는 갱신 되지 않으며 효과 종료 시 <FONT COLOR='#ffff99'>3</FONT>초 동안 발동되지 않는다.</font></font>",
          },
        },
        topStr:
          "<font size='14'><font color='#91fe02'>2 세트 효과<BR>[<font size='14'><font color='#aaaaaa'>Lv.1 / Lv.2 / <FONT COLOR='#FFD200'>Lv.3</FONT></font></font>]</font></font>",
      },
      Element_001: {
        contentStr: {
          Element_000: {
            bPoint: true,
            contentStr:
              "<font size='12'><font color='#ffffff'>치명타 적중률이 <FONT COLOR='#99FF99'>20%</FONT> 증가한다.<BR>공격 적중 시 '환각' 효과의 지속 시간이 <FONT COLOR='#ffff99'>1</FONT>초 증가한다. (발동 재사용 대기시간 <FONT COLOR='#ffff99'>0.4</FONT>초)</font></font>",
          },
        },
        topStr:
          "<font size='14'><font color='#91fe02'>4 세트 효과<BR>[<font size='14'><font color='#aaaaaa'>Lv.1 / Lv.2 / <FONT COLOR='#FFD200'>Lv.3</FONT></font></font>]</font></font>",
      },
      Element_002: {
        contentStr: {
          Element_000: {
            bPoint: true,
            contentStr:
              "<font size='12'><font color='#ffffff'>'환각' 효과가 <FONT COLOR='#ffff99'>9</FONT>초 이상 유지 시 <FONT COLOR='#ffff99'>120</FONT>초 동안 적에게 주는 피해가 <FONT COLOR='#99FF99'>15%</FONT>, 치명타 적중률이 <FONT COLOR='#99FF99'>8%</FONT> 추가 증가하는 '실체' 효과로 변경된다.<BR>공격 적중 시 '실체' 효과의 지속 시간이 갱신된다. (발동 재사용 대기시간 <FONT COLOR='#ffff99'>0.4</FONT>초)</font></font>",
          },
        },
        topStr:
          "<font size='14'><font color='#91fe02'>6 세트 효과<BR>[<font size='14'><font color='#aaaaaa'>Lv.1 / Lv.2 / <FONT COLOR='#FFD200'>Lv.3</FONT></font></font>]</font></font>",
      },
    },
  },
  Element_013: {
    type: 'SingleTextBox',
    value: "<FONT SIZE='12'><FONT COLOR='#C24B46'>분해불가</FONT></FONT>",
  },
  Element_014: {
    type: 'SingleTextBox',
    value: "<Font color='#5FD3F1'>[세트 업그레이드] 대도시 - 세트 장비 관리</font>",
  },
  Element_015: {
    type: 'ShowMeTheMoney',
    value: "<FONT SIZE='12'><FONT COLOR='#FFFFFF'>내구도 <FONT COLOR='#FFFFFF'>59 / 59</FONT></FONT></FONT>|",
  },
};
