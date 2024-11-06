import React, { useEffect, useState } from 'react';
import fetchCharactersData from '../hooks/fetchCharactersData';
import CharacterCard from './Card/CharacterCard';

export default function Main() {
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

  return (
    <div className='p-2'>
      <div className='w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-2 p-2'>
        {charactersData.map((character, index) => {

          return (
            <div key={index} className="w-full h-full">
              <CharacterCard character={character} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
