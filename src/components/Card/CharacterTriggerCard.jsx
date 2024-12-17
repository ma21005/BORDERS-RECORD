// キャラクターカードのトリガー構成画面にあたるコンポーネント

import CardContainer from "./CardContainer";
import MainTrigger from "./Trigger/MainTrigger"
import SubTrigger from "./Trigger/SubTrigger";
import FreeTrigger from "./Trigger/FreeTrigger";
import Uniquetrigger from "./Trigger/UniqueTrigger";
import TriggerWithNoData from "./Trigger/TriggerWithNoData";

export default function CharacterTriggerCard({ character }) {
  let mainTrigger = [ character.メイン1, character.メイン2, character.メイン3, character.メイン4 ];
  let subTrigger = [ character.サブ1, character.サブ2, character.サブ3, character.サブ4 ];
  let uniqueTrigger = [character.黒トリガー, character.特殊トリガー];
  let isReiji = false;

  // トリガーを何も所持していないかどうか判定する
  const isAllTriggersEmpty = [...mainTrigger, ...subTrigger, ...uniqueTrigger].every(trigger => trigger === '');

  // 通常トリガーを所持しているかどうか判定する
  const hasNormalTrgger = uniqueTrigger.every(trigger => trigger === '');
  // 通常トリガーではない特殊トリガーの名前
  const uniqueTriggerName = uniqueTrigger.find(trigger => trigger !== '');

  if (character.名前 === "木崎 レイジ") {
    mainTrigger = [ character.メイン1, character.メイン2, character.メイン3, character.メイン4, character.メイン5, character.メイン6, character.メイン7 ];
    subTrigger = [ character.サブ1, character.サブ2, character.サブ3, character.サブ4, character.サブ5, character.サブ6, character.サブ7];
    isReiji = true;
  }

  return (
    <CardContainer>
      <div className="h-[10%] character-name-container mt-2 mb-1">
        <p className="text-lg font-bold text-center text-white">{character.名前}</p>
      </div>
      
      {isAllTriggersEmpty ? ( // トリガーを何も所持していない場合
        <TriggerWithNoData />
      ) : hasNormalTrgger ? ( // 通常トリガーを所持している場合
        <div className="w-full h-[83%] flex justify-between">
          {/* SUB Trigger */}
          {/* レイジのみ縦スクロール可にする */}
          <div
            className={`trigger-container w-[47.5%] h-full ml-[2%] p-1 hidden-scrollbar ${
              isReiji ? "overflow-y-auto" : ""
            }`}
          >
            <p className="font-bold text-center text-white">SUB</p>
            {subTrigger.map((trigger, index) =>
              trigger === "なし" ? (
                <FreeTrigger key={index}/>
              ) : (
                <SubTrigger key={index} trigger={trigger} />
              )
            )}
          </div>

          {/* MAIN Trigger */}
          {/* レイジのみ縦スクロール可にする */}
          <div
            className={`trigger-container w-[47.5%] h-full mr-[2%] p-1 hidden-scrollbar ${
              isReiji ? "overflow-y-auto" : ""
            }`}
          >
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
      ) : ( // 特殊トリガーを所持している場合
        <div className="w-full h-[85%] flex justify-center items-center">
          <div className="trigger-container w-[85%] h-[95%] flex justify-center">
            <Uniquetrigger character={character} uniqueTriggerName={uniqueTriggerName} />
          </div>
        </div>
      )}
    </CardContainer>
  );
}