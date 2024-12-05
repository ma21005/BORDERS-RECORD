import { useState } from "react";
import SideMenu from "./components/SideMenu";
import Header from "./components/Header";
import Main from "./components/Main";
import './App.css';
import { triggerNameAndType } from './hooks/fetchTriggerType';

function App() {
  const [open, setOpen] = useState(false);
  const [searchName, setSearchName] = useState(""); // 検索文字列の状態
  const [filterTriggers, setFilterTriggers] = useState([]); // トリガーのフィルタリング条件（複数指定可なので配列）
  const [filterPositions, setFilterPositions] = useState(""); // ポジションのフィルタリング条件
  const [filterOthers, setFilterOthers] = useState([]); // その他のフィルタリング条件（複数指定可なので配列）

  return (
    <div className="flex h-screen overflow-hidden main-container">
      {/* オーバーレイ */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-20" onClick={() => setOpen(false)}></div>
      )}
      {/* サイドメニュー */}
      {open && (
        <aside
          className="fixed flex-shrink-0 overflow-y-auto hidden-scrollbar z-30"
          style={{ width: '18rem', height: '100vh' }}
        >
          <SideMenu
            searchName={searchName}
            setSearchName={setSearchName}
            triggerNameAndType={triggerNameAndType}
            filterTriggers={filterTriggers}
            setFilterTriggers={setFilterTriggers}
            filterPositions={filterPositions}
            setFilterPositions={setFilterPositions}
            filterOthers={filterOthers}
            setFilterOthers={setFilterOthers}
          />
        </aside>
      )}

      {/* サイドメニュー（デスクトップ用） */}
      <aside
        className="hidden lg:block flex-shrink-0 overflow-y-auto hidden-scrollbar"
        style={{ width: '28rem' }}
      >
        <SideMenu
          searchName={searchName}
          setSearchName={setSearchName}
          triggerNameAndType={triggerNameAndType}
          filterTriggers={filterTriggers}
          setFilterTriggers={setFilterTriggers}
          filterPositions={filterPositions}
          setFilterPositions={setFilterPositions}
          filterOthers={filterOthers}
          setFilterOthers={setFilterOthers}
        />
      </aside>
      {/* メインコンテンツ */}
      <div className="flex-1 overflow-x-hidden overflow-y-auto pt-14 lg:pt-0">
        <Header setOpen={setOpen} />
        <main>
          <Main
            searchName={searchName}
            triggerNameAndType={triggerNameAndType}
            filterTriggers={filterTriggers}
            filterPositions={filterPositions}
            filterOthers={filterOthers}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
