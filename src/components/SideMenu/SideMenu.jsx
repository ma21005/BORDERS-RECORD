// import StatusSlider from "./StatusSlider";
import FilterName from "./FilterName";
import FilterButtons from "./FilterButtons";
import FilterStatus from "./FilterStatus";
import Info from "./Info"

export default function SideMenu({ searchName, setSearchName, triggerNameAndType, filterTriggers, setFilterTriggers, filterPositions, setFilterPositions, filterOrganizations, setFilterOrganizations, filterBloodTypes, setFilterBloodTypes, filterOthers, setFilterOthers, filterStatuses, setFilterStatuses, isSmartPhone}) {

  return (
    <div
      className={`side-menu-container w-full flex-shrink-0 p-4 ${
        isSmartPhone ? "border-r-2 border-[#166f8f]" : ""
      }`}
    >
      <p className="side-menu-title">BORDER'S RECORD</p>
      {/* ========= 名前をフィルタリングする入力欄 ========= */}
      <FilterName searchName={searchName} setSearchName={setSearchName} />

      {/* ========= トリガー、ポジションなどをフィルタリングするボタン ========= */}
      <FilterButtons
        triggerNameAndType={triggerNameAndType}
        filterTriggers={filterTriggers}
        setFilterTriggers={setFilterTriggers}
        filterPositions={filterPositions}
        setFilterPositions={setFilterPositions}
        filterOrganizations={filterOrganizations}
        setFilterOrganizations={setFilterOrganizations}
        filterBloodTypes={filterBloodTypes}
        setFilterBloodTypes={setFilterBloodTypes}
        filterOthers={filterOthers}
        setFilterOthers={setFilterOthers}
      />

      {/* ========= ステータスをフィルタリングするスライダー ========= */}
      <FilterStatus filterStatuses={filterStatuses} setFilterStatuses={setFilterStatuses} isSmartPhone={isSmartPhone}/>

      <Info />
    </div>
  );
}
