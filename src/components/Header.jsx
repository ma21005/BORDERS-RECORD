export default function Header({ setOpen }) {
  return (
    <header className="header-container flex h-16 items-center lg:hidden">
      {/* ハンバーガーメニューボタン */}
      <button
        className="flex flex-col justify-center items-center p-4 mr-4 space-y-1"
        onClick={() => setOpen(prevOpen => !prevOpen)} // 状態を反転させる
      >
        <div className="w-8 sm:w-10 h-0.5 bg-white"></div> {/* 上の線 */}
        <div className="w-8 sm:w-10 h-0.5 bg-white"></div> {/* 中央の線 */}
        <div className="w-8 sm:w-10 h-0.5 bg-white"></div> {/* 下の線 */}
      </button>

      <p className="text-lg text-center">BORDERS RECORD</p>
    </header>
  );
}
