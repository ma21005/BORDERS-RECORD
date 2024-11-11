import CardContainer from "./CardContainer";
import MainTrigger from "../Trigger/MainTrigger";
import SubTrigger from "../Trigger/SubTrigger";
import FreeTrigger from "../Trigger/FreeTrigger";

export default function CharacterTriggerCard({ character }) {
  const mainTrigger = [ character.メイン1, character.メイン2, character.メイン3, character.メイン4 ];
  const subTrigger = [ character.サブ1, character.サブ2, character.サブ3, character.サブ4 ];

  return (
    <CardContainer>
      <div className="h-[10%] character-name-container mt-2 mb-1">
        <p className="text-lg font-bold text-center text-white">{character.名前}</p>
      </div>
      
      <div className="w-full h-[83%] flex justify-between">
        <div className="sub-trigger-container w-[47.5%] h-full ml-[2%] p-1">
          <p className="font-bold text-center text-white">SUB</p>
          {subTrigger.map((trigger, index) => 
            trigger === "なし" ? (
              <FreeTrigger key={index}/>
            ) : (
              <SubTrigger key={index} trigger={trigger} />
            )
          )}
        </div>
        <div className="main-trigger-container w-[47.5%] h-full mr-[2%] p-1">
          <p className="font-bold text-center text-white">MAIN</p>
          {mainTrigger.map((trigger, index) => 
            trigger === "なし" ? (
              <FreeTrigger key={index} />
            ) : (
              <MainTrigger key={index} trigger={trigger} />
            )
          )}
        </div>
      </div>
    </CardContainer>
  );
}