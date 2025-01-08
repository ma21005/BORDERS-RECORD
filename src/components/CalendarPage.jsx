import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import fetchCharactersData from '../hooks/fetchCharactersData';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import jaLocale from '@fullcalendar/core/locales/ja';
import { ThreeCircles } from 'react-loader-spinner';

const CalendarPage = () => {
  const [charactersData, setCharactersData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // 各キャラクターの名前と誕生日を組み合わせたデータを作成（2024年～2026年）
  const events = Array.from(
    // new Setを使って重複したデータを削除
    // 黒トリガーと通常トリガーの両方を持つキャラクターは同じデータが2つできるため
    new Set(
      charactersData.flatMap((character) => {
        // ISO形式の日付から "月-日" 部分だけ抽出
        const birthday = new Date(character.誕生日);
        const month = String(birthday.getMonth() + 1).padStart(2, '0');
        const day = String(birthday.getDate()).padStart(2, '0');
  
        // 2024～2026年のイベントを生成
        return [2024, 2025, 2026].map((year) => JSON.stringify({
          title: character.名前,
          start: `${year}-${month}-${day}`,
          color: "#166f8f",
        }));
      })
    )
  ).map((eventStr) => JSON.parse(eventStr));

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchCharactersData();
      setCharactersData(data);
      setLoading(false);
    };
    loadData();
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center overflow-hidden main-container">
        <div className="flex flex-col justify-center items-center h-screen">
        <ThreeCircles
          color="#166f8f"
          height={150}
          width={150}
          timeout={3000}
        />
        <p className="loading-text">Now Loading..</p>
      </div>
    </div>
    );
  }

  return (
    <div className="h-screen flex items-center justify-center overflow-hidden main-container">
      <div className="info-container rounded-xl w-10/12 lg:w-7/12 text-white max-h-[90vh] overflow-y-auto tems-center justify-center p-8">

      <div>
      {console.log(charactersData)}
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          locales={[jaLocale]}
          locale='ja'
          contentHeight={'auto'}
          dayCellContent={(info) => {
            return info.date.getDate(); // 各日付を数字だけ表示させる
          }}
          buttonText={{
            today: "Today", // ボタンのテキストを 今日 → Today に変更
          }}
          titleFormat={{ year: "numeric", month: "2-digit" }} // ヘッダーを2025/01の表示にする
          events={events} // 各キャラクターの誕生日をカレンダーに表示
        />
      </div>

        <div className="flex justify-center mt-8 lg:mt-12 mb-4">
          <button
            onClick={() => navigate('/')}
            className="relative z-0 h-14 lg:h-16 rounded-full bg-[#166f8f] px-6 text-neutral-50
                  after:absolute after:left-0 after:top-0 after:-z-10 after:h-full
                  after:w-full after:rounded-full after:bg-[#166f8f]
                  hover:after:scale-x-125 hover:after:scale-y-150 hover:after:opacity-0
                  hover:after:transition hover:after:duration-500"
          >
            <span className="back-button-text my-8 text-xl lg:text-3xl">BACK</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;