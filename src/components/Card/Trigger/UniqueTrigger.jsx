
export default function UniqueTrigger({ character, uniqueTriggerName }) {
  const imageName = character.名前;

  return (
    <div className="w-[77%] relative mt-3">
      <img
        src={`https://borders-records.s3.ap-northeast-1.amazonaws.com/unique_triggers/${imageName}.png`}
        alt={`${uniqueTriggerName}`}
        className="character-image-frame image-protect object-cover w-full h-auto"
      />
      <div className="absolute left-1/2 transform -translate-x-1/2 text-center text-white">
        <p className="text-2xl font-bold">{uniqueTriggerName}</p>
      </div>
    </div>
  );
}