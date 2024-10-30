import React, { useEffect, useState } from 'react';
import fetchCharactersData from '../hooks/fetchCharactersData';
import CharacterCard from './CharacterCard';

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
    <div>
      <h1>Characters Data</h1>
      {charactersData.map((character, index) => (
          <CharacterCard key={index} character={character} />
      ))}
    </div>
  );
}
