import { useState } from "react";
import SideMenu from "./components/SideMenu";
import Header from "./components/Header";
import Main from "./components/Main";
import './App.css';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden main-container">
      {/* オーバーレイ */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-20" onClick={() => setOpen(false)}></div>
      )}
      {/* サイドメニュー */}
      {open && (
        <div className="w-72 fixed z-30 h-full">
          <SideMenu />
        </div>
      )}

      {/* サイドメニュー（デスクトップ用） */}
      <aside
        className="hidden lg:block flex-shrink-0 overflow-y-auto"
        style={{ width: '28rem' }}
      >
        <SideMenu />
      </aside>
      {/* メインコンテンツ */}
      <div className="flex-1 overflow-x-hidden overflow-y-auto pt-14 lg:pt-0">
        <Header setOpen={setOpen} />
        <main>
          <Main />
        </main>
      </div>
    </div>
  );
}

export default App;
