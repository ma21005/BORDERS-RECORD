import  { getImageName } from "../../../hooks/fetchTriggerImageName";
import  { fetchTriggerType } from "../../../hooks/fetchTriggerType";

export default function MainTrigger({ trigger }) {
  const imageName = getImageName(trigger);
  const triggerType = fetchTriggerType(trigger);

  return (
    <div className="each-trigger-container flex w-full bg-white mb-1">
      <div className="h-11 m-1 bg-[#166f8f]">
        <img
          src={`https://borders-records.s3.ap-northeast-1.amazonaws.com/trigger_icons/${imageName}.png`}
          alt={`${trigger}`}
          className="image-protect object-cover w-full h-full"
        />
      </div>
      <div className="flex-1 overflow-x-auto hidden-scrollbar">
        <div className="trigger-type text-white inline-block">
          <p>{triggerType}</p>
        </div>
        <div className="mr-2 text-xs text-white font-bold whitespace-nowrap inline-block" style={{ position: 'relative', top: '-3px' }}>
          <p>{trigger}</p>
        </div>
      </div>
    </div>
  );
}