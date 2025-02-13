import React, { useEffect, useState } from 'react';
import fetchCharactersData from '../hooks/fetchCharactersData';
import CharacterCard from './Card/CharacterCard';
import { ThreeCircles } from 'react-loader-spinner';

export default function Main({ searchName, triggerNameAndType, filterTriggers, filterPositions, filterOrganizations, filterBloodTypes, filterOthers, flipTrigger, flipToIndex, filterStatuses }) {
  const [charactersData, setCharactersData] = useState([]);
  const [loading, setLoading] = useState(true);

  const attackTriggers = triggerNameAndType["ATTACK TRIGGER"];
  const gunnerTriggers = triggerNameAndType["GUNNER TRIGGER"];
  const sniperTriggers = triggerNameAndType["SNIPER TRIGGER"];
  const deffenseTriggers = triggerNameAndType["DEFFENSE TRIGGER"];
  const trapTriggers = triggerNameAndType["TRAP TRIGGER"];
  const optionTriggers = triggerNameAndType["OPTION TRIGGER"];

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchCharactersData();
      setCharactersData(data);

      setLoading(false); // ローディング完了
    };

    loadData();
  }, []);

  // ローディング中の表示
  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <ThreeCircles
          color="#166f8f"
          height={150}
          width={150}
          timeout={3000}
        />
        <p className="loading-text">Now Loading..</p>
      </div>
    );
  }

  // 検索文字列によるフィルタリング
  const filteredBySearch = charactersData.filter((character) => {
    if (searchName &&
      !(character.名前?.toLowerCase().includes(searchName.toLowerCase()) || 
        character.なまえ?.toLowerCase().includes(searchName.toLowerCase()) || 
        character.name?.toLowerCase().includes(searchName.toLowerCase()))
    ) {
      return false;
    }
    return true; // 検索文字列にマッチしたキャラクターのみ残す
  });

  // トリガーによるフィルタリング
  const filteredByTrigger = filteredBySearch.filter((character) => {
    const mainTrigger = [ character.メイン1, character.メイン2, character.メイン3, character.メイン4, character.メイン5, character.メイン6, character.メイン7 ];
    const subTrigger = [ character.サブ1, character.サブ2, character.サブ3, character.サブ4, character.サブ5, character.サブ6, character.サブ7];
    const blackTrigger = [ character.黒トリガー ];

    // 黒トリガーのフィルタリング
    // 通常トリガーのフィルタリングとは独立させる
    if (filterTriggers.includes('黒トリガー')) {
      return blackTrigger.some((item) => item && item.trim() !== '');
    }

    // 通常トリガーのフィルタリング（AND条件）
    return filterTriggers.every((trigger) => {
      if (attackTriggers.includes(trigger)) {
        return mainTrigger.some((item) => item?.includes(trigger)) ||
               subTrigger.some((item) => item?.includes(trigger));
      }

      if (gunnerTriggers.includes(trigger)) {
        return mainTrigger.some((item) => item?.includes(trigger)) ||
               subTrigger.some((item) => item?.includes(trigger));
      }

      if (sniperTriggers.includes(trigger)) {
        return mainTrigger.some((item) => item?.includes(trigger)) ||
               subTrigger.some((item) => item?.includes(trigger));
      }

      if (deffenseTriggers.includes(trigger)) {
        return mainTrigger.some((item) => item?.includes(trigger)) ||
               subTrigger.some((item) => item?.includes(trigger));
      }

      if (trapTriggers.includes(trigger)) {
        return mainTrigger.some((item) => item?.includes(trigger)) ||
               subTrigger.some((item) => item?.includes(trigger));
      }

      if (optionTriggers.includes(trigger)) {
        return mainTrigger.some((item) => item?.includes(trigger)) ||
               subTrigger.some((item) => item?.includes(trigger));
      }

      return true; // デフォルトですべて表示
    });
  });

  // ポジションによるフィルタリング
  const filteredByPosition = filteredByTrigger.filter((character) => {
    const characterPosition = character.ポジション;

    if (!filterPositions) return true; // フィルタが指定されていない場合は全て表示

    if (filterPositions === "オペレーター以外" && characterPosition !== "オペレーター") {
      return true;
    }

    return characterPosition === filterPositions; // フィルタ条件に一致するポジションのみ
  });

  // 組織によるフィルタリング
  const filteredOrganizations = filteredByPosition.filter((character) => {
    const characterOrganization = character.組織;

    if (!filterOrganizations) return true; // フィルタが指定されていない場合は全て表示

    return characterOrganization === filterOrganizations; // フィルタ条件に一致する組織のみ
  });

  // 血液型によるフィルタリング
  const filteredBloodTypes = filteredOrganizations.filter((character) => {
    const characterBloodType = character.血液型;

    if (!filterBloodTypes) return true; // フィルタが指定されていない場合は全て表示

    return characterBloodType === filterBloodTypes; // フィルタ条件に一致する血液型のみ
  });

  // その他によるフィルタリング（AND条件）
  const filteredOthers = filteredBloodTypes.filter((character) => {
    // フィルタリング条件にサイドエフェクト
    if (filterOthers.includes("サイドエフェクト") && !character.サイドエフェクト) {
      return false; // サイドエフェクトが空文字の場合は除外
    }

    // フィルタリング条件に近界民
    if (filterOthers.includes("近界民") && character.出身 !== "近界") {
      return false; // 出身が近界でない場合は除外
    }

    // フィルタリングされた（除外されなかった）キャラクターを返す
    return true;
  });

  // ステータスよるフィルタリング
  const filteredCharacters = filteredOthers.filter((character) => {
    return (
      character.トリオン >= filterStatuses[0] &&
      character.攻撃 >= filterStatuses[1] &&
      character["防御・援護"] >= filterStatuses[2] &&
      character.機動 >= filterStatuses[3] &&
      character.技術 >= filterStatuses[4] &&
      character.射程 >= filterStatuses[5] &&
      character.指揮 >= filterStatuses[6] &&
      character.特殊戦術 >= filterStatuses[7] &&
      character.機器操作 >= filterStatuses[8] &&
      character.情報分析 >= filterStatuses[9] &&
      character.並列処理 >= filterStatuses[10] &&
      character.戦術 >= filterStatuses[11]
    );
  });

  return (
    <div className='mt-4 lg:mt-8 p-2 pb-32'>
      <div className='flex justify-center'>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 min-[1400px]:grid-cols-3 min-[1781px]:grid-cols-4 gap-2 p-2">
          {filteredCharacters.map((character, index) => (
            <div key={index} className='w-80 h-80'>
              <CharacterCard
                character={character}
                flipTrigger={flipTrigger}
                flipToIndex={flipToIndex}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
