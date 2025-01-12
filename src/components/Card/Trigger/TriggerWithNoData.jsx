export default function TriggerWithNoData() {
  let renderCount = [ "A", "B", "C", "D" ]; // triggerContainer を4回レンダリングするための配列

  const triggerContainer = (key) => {
    return (
      <div key={key} className="each-trigger-container-with-no-data flex w-full bg-white mb-1">
        <div className="h-11 m-1">
        </div>
      </div>
    );
  };

  return (
    <div className="relative w-full h-[83%] flex justify-between">
      {/* 中央にhogeを表示 */}
      <div className="absolute inset-0 flex justify-center items-center">
        <p className="text-3xl font-bold text-white">NO DATA</p>
      </div>

      {/* SUB Trigger */}
      <div className="trigger-container-with-no-data w-[47.5%] h-full ml-[2%] p-1 hidden-scrollbar">
        <p className="font-bold text-center text-[#444444]">SUB</p>
        {renderCount.map((key) => triggerContainer(key))}
      </div>

      {/* MAIN Trigger */}
      <div className="trigger-container-with-no-data w-[47.5%] h-full mr-[2%] p-1 hidden-scrollbar">
        <p className="font-bold text-center text-[#444444]">MAIN</p>
        {renderCount.map((key) => triggerContainer(key))}
      </div>
    </div>
  );
}
