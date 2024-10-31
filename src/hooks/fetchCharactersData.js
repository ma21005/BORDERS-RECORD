
const fetchCharactersData = async () => {
  const response = await fetch(
    'https://script.google.com/macros/s/AKfycbwElki5XstqkD66LQeofHwrwHiz0eQEvE12OHFbBbKp25rfP4Lyd5IoE5yNcTxt3Ja0/exec'
  );
  const data = await response.json(); // JSON に変換
  console.log(data);
  return data;
}

export default fetchCharactersData;
