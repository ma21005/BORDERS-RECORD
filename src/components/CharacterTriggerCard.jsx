export default function CharacterTriggerCard({ character }) {
  return (
    <div className="rounded-xl border-4 w-full max-w-[320px] mx-auto">
      <h2 className="text-lg font-bold">{character.名前}</h2>
      <p>メイン1: {character.メイン1}</p>
      <p>メイン2: {character.メイン2}</p>
      <p>メイン3: {character.メイン3}</p>
      <p>メイン4: {character.メイン4}</p>
      <p>サブ1: {character.サブ1}</p>
      <p>サブ2: {character.サブ2}</p>
      <p>サブ3: {character.サブ3}</p>
      <p>サブ4: {character.サブ4}</p>
    </div>
  );
}