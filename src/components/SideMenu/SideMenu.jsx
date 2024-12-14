// import StatusSlider from "./StatusSlider";
import FilterName from "./FilterName";
import FilterButtons from "./FilterButtons";
import FilterStatus from "./FilterStatus";

export default function SideMenu({ searchName, setSearchName, triggerNameAndType, filterTriggers, setFilterTriggers, filterPositions, setFilterPositions, filterOrganizations, setFilterOrganizations, filterOthers, setFilterOthers, filterStatuses, setFilterStatuses,}) {

  return (
    <div className="side-menu-container w-full flex-shrink-0 p-4">
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
        filterOthers={filterOthers}
        setFilterOthers={setFilterOthers}
      />

      {/* ========= ステータスをフィルタリングするスライダー ========= */}
      <FilterStatus filterStatuses={filterStatuses} setFilterStatuses={setFilterStatuses} />
    </div>
  );
}
