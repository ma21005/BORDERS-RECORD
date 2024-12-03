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

  return (
    <div className="flex h-screen overflow-hidden main-container">
      {/* オーバーレイ */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-20" onClick={() => setOpen(false)}></div>
      )}
      {/* サイドメニュー */}
      {open && (
        <div className="w-72 fixed z-30 h-full">
          <SideMenu
            setSearchName={setSearchName}
            triggerNameAndType={triggerNameAndType}
            filterTriggers={filterTriggers}
            setFilterTriggers={setFilterTriggers}
            filterPositions={filterPositions} // 追加
            setFilterPositions={setFilterPositions} // 追加
          />
        </div>
      )}

      {/* サイドメニュー（デスクトップ用） */}
      <aside
        className="hidden lg:block flex-shrink-0 overflow-y-auto"
        style={{ width: '28rem' }}
      >
        <SideMenu
          setSearchName={setSearchName}
          triggerNameAndType={triggerNameAndType}
          filterTriggers={filterTriggers}
          setFilterTriggers={setFilterTriggers}
          filterPositions={filterPositions} // 追加
          setFilterPositions={setFilterPositions} // 追加
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
            filterPositions={filterPositions} // 追加
          />
        </main>
      </div>
    </div>
  );
}

export default App;
