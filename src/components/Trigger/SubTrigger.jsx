import  { getImageName } from "../../hooks/fetchTriggerImageName";

export default function SubTrigger({ trigger }) {
  const imageName = getImageName(trigger);

  return (
    <div className="flex w-full bg-white mb-1">
      <img
        src={`https://borders-records.s3.ap-northeast-1.amazonaws.com/trigger_icons/${imageName}.png`}
        alt={`${trigger}`}
        className="w-1/3 bg-blue-500 m-1"
      />
      <div>
        <p>{trigger}</p>
      </div>
    </div>
  );
}