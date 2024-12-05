import React, { useEffect, useState } from 'react';
import fetchCharactersData from '../hooks/fetchCharactersData';
import CharacterCard from './Card/CharacterCard';

export default function Main({ searchName, triggerNameAndType, filterTriggers, filterPositions, filterOthers }) {
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
    return <p>Now Loading...</p>;
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
    return characterPosition === filterPositions; // フィルタ条件に一致するポジションのみ
  });

  // その他によるフィルタリング（AND条件）
  const filteredCharacters = filteredByPosition.filter((character) => {
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

  return (
    <div className='p-2'>
      <div className='flex justify-center'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-2 p-2'>
          {filteredCharacters.map((character, index) => (
            <div key={index} className='w-80 h-80'>
              <CharacterCard character={character} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
