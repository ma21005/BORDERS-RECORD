import SideMenu from "./components/SideMenu";
import Main from "./components/Main";
import './App.css';

function App() {
  return (
    <div className="flex h-screen overflow-hidden main-container">
      {/* サイドメニュー */}
      <aside className="hidden lg:block w-80 flex-shrink-0 overflow-y-auto">
        <SideMenu />
      </aside>
      {/* メインコンテンツ */}
      <div className="flex-1 overflow-x-hidden overflow-y-auto">
        <main>
          <Main />
        </main>
      </div>
    </div>
  );
}

export default App;
