import CardContainer from "./CardContainer";
import MainTrigger from "../Trigger/MainTrigger";
import SubTrigger from "../Trigger/SubTrigger";
import FreeTrigger from "../Trigger/FreeTrigger";

export default function CharacterTriggerCard({ character }) {
  const mainTrigger = [ character.メイン1, character.メイン2, character.メイン3, character.メイン4 ];
  const subTrigger = [ character.サブ1, character.サブ2, character.サブ3, character.サブ4 ];

  return (
    <CardContainer>
      <h2 className="text-lg font-bold">{character.名前}</h2>
      
      <div className="trigger-container w-full flex bg-white">
        <div className="sub-trigge w-[47.5%] bg-yellow-400 m-[1%] p-1">
          <p>SUB</p>
          {subTrigger.map((trigger, index) => 
            trigger === "なし" ? (
              <FreeTrigger key={index}/>
            ) : (
              <SubTrigger key={index} trigger={trigger} />
            )
          )}
        </div>
        <div className="main-trigger w-[47.5%] bg-orange-900 m-[1%] p-1">
          <p>MAIN</p>
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