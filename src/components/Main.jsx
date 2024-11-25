import React, { useEffect, useState } from 'react';
import fetchCharactersData from '../hooks/fetchCharactersData';
import CharacterCard from './Card/CharacterCard';

export default function Main({ searchName, triggerNameAndType, filterTriggers }) {
  const [charactersData, setCharactersData] = useState([]);
  const [loading, setLoading] = useState(true);

  const attackTriggers = triggerNameAndType["ATTACK TRIGGER"];
  const gunnerTriggers = triggerNameAndType["GUNNER TRIGGER"];
  const sniperTriggers = triggerNameAndType["SNIPER TRIGGER"];
  const deffenseTriggers = triggerNameAndType["DEFFENSE TRIGGER"];
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

  // 最初に検索文字列によるフィルタリングを行う
  const filteredBySearch = charactersData.filter((character) => {
    // 検索文字列によるフィルタリング
    if (searchName &&
      !(character.名前?.toLowerCase().includes(searchName.toLowerCase()) || 
        character.なまえ?.toLowerCase().includes(searchName.toLowerCase()))
    ) {
      return false;
    }
    return true; // 検索文字列にマッチしたキャラクターのみ残す
  });

  // その後、AND条件によるフィルタリングを行う
  const filteredCharacters = filteredBySearch.filter((character) => {
    const mainTrigger = [ character.メイン1, character.メイン2, character.メイン3, character.メイン4, character.メイン5, character.メイン6, character.メイン7 ];
    const subTrigger = [ character.サブ1, character.サブ2, character.サブ3, character.サブ4, character.サブ5, character.サブ6, character.サブ7];

    // AND条件によるフィルタリング
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

      if (optionTriggers.includes(trigger)) {
        return mainTrigger.some((item) => item?.includes(trigger)) ||
               subTrigger.some((item) => item?.includes(trigger));
      }

      return true; // デフォルトですべて表示
    });
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
