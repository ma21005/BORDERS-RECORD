import SideMenu from "./components/SideMenu";
import Main from "./components/Main";
import './App.css';

function App() {
  return (
    <div className="flex h-screen">
      {/* サイドメニュー */}
      <aside className="overflow-y-auto">
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
