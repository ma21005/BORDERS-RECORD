
export default function UniqueTrigger({ character, uniqueTriggerName }) {
  const imageName = character.名前;

  return (
    <div className="w-[77%] relative mt-3">
      <img
        src={`https://borders-records.s3.ap-northeast-1.amazonaws.com/unique_triggers/${imageName}.png`}
        alt={`${uniqueTriggerName}`}
        className="character-image-frame image-protect object-cover w-full h-auto"
      />
      <div className="absolute flex justify-center items-center w-full text-white">
        <p className="text-2xl font-bold">{uniqueTriggerName}</p>
        {character.トリガーフリガナ && (
          <p className="text-xs font-bold ml-2">({character.トリガーフリガナ})</p>
        )}
      </div>
    </div>
  );
}