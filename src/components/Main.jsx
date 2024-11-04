import React, { useEffect, useState } from 'react';
import fetchCharactersData from '../hooks/fetchCharactersData';
import CharacterTitleCard from './Card/CharacterTitleCard';
import CharacterDetailCard from './Card/CharacterDetailCard';
import CharacterStatusCard from './Card/CharacterStatusCard';
import CharacterTriggerCard from './Card/CharacterTriggerCard';

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

      // ローディング完了直後にカードをクリックしてカードタイプを変更すると
      // 最初の CharacterTitleCard に戻る現象が起きるのでローディング完了前に2秒のスリープを挟む
      await new Promise((resolve) => setTimeout(resolve, 2000));

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
      <div className='w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-2 p-2'>
        {charactersData.map((character, index) => {

          // 各キャラクターのカードタイプ
          // 初期状態：setActiveCardIndexは全要素0なので全キャラクターがcharacterCardTypes[0]
          const ActiveCradType = characterCardTypes[activeCardIndex[index]];

          return (
            <div key={index} onClick={() => handleCardClick(index)} className='cursor-pointer h-full w-full'>
              <ActiveCradType character={character} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
