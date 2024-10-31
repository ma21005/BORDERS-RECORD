import React, { useEffect, useState } from 'react';
import fetchCharactersData from '../hooks/fetchCharactersData';
import CharacterTitleCard from './CharacterTitleCard';
import CharacterDetailCard from './CharacterDetailCard';
import CharacterStatusCard from './CharacterStatusCard';
import CharacterTriggerCard from './CharacterTriggerCard';

// クリックで切り替わるカードタイプ
const characterCardTypes = [
  CharacterTitleCard,
  CharacterStatusCard,
  CharacterTriggerCard,
  CharacterDetailCard,
];

export default function Main() {
  const [charactersData, setCharactersData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCardIndex, setActiveCardIndex] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchCharactersData();
      setCharactersData(data);

      // activeCardIndex = キャラクター数と同じサイズで全要素が0の配列
      // data.length = 3の場合は [0, 0, 0]
      setActiveCardIndex(new Array(data.length).fill(0));
      setLoading(false); // ローディング完了
    };

    loadData();
  }, []);

  // ローディング中の表示
  if (loading) {
    return <p>Now Loading...</p>;
  }

  // カードクリック時の処理
  // 配列activeCardIndexの中のクリックされたキャラクターに対応したindexの値が0~3でループする
  const handleCardClick = (index) => {
    setActiveCardIndex((prev) => { // prev=現在のactiveCardIndex
      const newActiveCardIndex = [...prev]; // 現在のactiveCardIndexのシャローコピー

      // クリックされたキャラクターのindexに対応する要素の値を+1して更新
      // ただし、3に+1した場合は0に戻る
      newActiveCardIndex[index] = (newActiveCardIndex[index] + 1) % characterCardTypes.length;

      // 更新後の配列をsetActiveCardIndexに渡すことで新しいactiveCardIndexになる
      return newActiveCardIndex;
    });
  };

  return (
    <div className='p-2'>
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 p-2'>
        {charactersData.map((character, index) => {

          // 各キャラクターのカードタイプ
          // 初期状態：setActiveCardIndexは全要素0なので全キャラクターがcharacterCardTypes[0]
          const ActiveCradType = characterCardTypes[activeCardIndex[index]];

          return (
            <div key={index} onClick={() => handleCardClick(index)} className='cursor-pointer'>
              <ActiveCradType character={character} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
