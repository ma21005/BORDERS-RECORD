import React, { useEffect, useState } from 'react';
import fetchCharactersData from '../hooks/fetchCharactersData';
import CharacterCard from './Card/CharacterCard';

export default function Main({ searchName }) {
  const [charactersData, setCharactersData] = useState([]);
  const [loading, setLoading] = useState(true);

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

  // 検索文字列に基づいてデータをフィルタリング
  const filteredCharacters = charactersData.filter((character) =>
    searchName === "" || // 検索文字列が空の場合は全キャラクターを表示させる
    character.名前?.toLowerCase().includes(searchName.toLowerCase()) ||
    character.なまえ?.toLowerCase().includes(searchName.toLowerCase())
  );

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
