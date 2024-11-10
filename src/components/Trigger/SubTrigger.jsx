import  { getImageName } from "../../hooks/fetchTriggerImageName";
import  { fetchTriggerType } from "../../hooks/fetchTriggerType";

export default function SubTrigger({ trigger }) {
  const imageName = getImageName(trigger);
  const triggerType = fetchTriggerType(trigger);

  return (
    <div className="each-trigger-container flex w-full bg-white mb-1">
      <div className="h-11 m-1 bg-[#166f8f]">
        <img
          src={`https://borders-records.s3.ap-northeast-1.amazonaws.com/trigger_icons/${imageName}.png`}
          alt={`${trigger}`}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex-1 overflow-x-auto hidden-scrollbar">
        <div className="trigger-type text-white inline-block">
          <p>{triggerType}</p>
        </div>
        <div className="text-xs text-white font-bold whitespace-nowrap">
          <p>{trigger}eeeeeeeee</p>
        </div>
      </div>
    </div>
  );
}