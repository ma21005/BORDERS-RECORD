
const fetchCharactersData = async () => {
  const response = await fetch(
    'https://script.google.com/macros/s/AKfycbw6PqcWevZhQfW7AiXJALMz4y03SMQFTztlLg-1KQnWJEsJbzr-FWdSRVk6CWiMF1Pk/exec'
  );
  const data = await response.json(); // JSON に変換
  console.log(data);
  return data;
}

export default fetchCharactersData;
