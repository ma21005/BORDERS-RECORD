import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from "recharts";

// カスタムラベルコンポーネント
// 項目名のフォントサイズを調整
const CustomLabel = ({ x, y, payload }) => {
  // 各項目名の座標
  let column_adjustedX = x;
  let column_adjustedY = y;

  // 項目に応じて項目名と値の座標位置を調整してレーダーチャートと重ならないようにする
  if (payload.value === 'トリオン') {
  } else if (payload.value === '攻撃力') {
    column_adjustedX += 12;
    column_adjustedY -= 2;
  } else if (payload.value === '防御・援護') {
    column_adjustedX += 10;
    column_adjustedY -= 5;;
  } else if (payload.value === '機動') {
    column_adjustedX += 15;
  } else if (payload.value === '技術') {
    column_adjustedY += 7;
  } else if (payload.value === '射程') {
    column_adjustedX -= 15;
  }  else if (payload.value === '指揮') {
    column_adjustedX += -10;
    column_adjustedY += 3;
  } else if (payload.value === '特殊戦術') {
    column_adjustedX -= 15;
    column_adjustedY -= 3;
  }

  return (
    <g>
      <text x={column_adjustedX} y={column_adjustedY} textAnchor="middle" fill="#666666" fontSize={13} fontWeight="bold">
        {payload.value === '防御・援護' ? (
          <>
            <tspan x={column_adjustedX} dy="0">防御</tspan>
            <tspan x={column_adjustedX} dy="1.2em">援護</tspan>
          </>
        ) : (
          payload.value
        )}
      </text>
    </g>
  );
};

// レーダーチャートを表示させるため、空ではあるが status を受け取る
export default function StatusGraph({ status }) {

  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="75%" data={status}>
          <PolarGrid stroke="#666666"/>
          <PolarAngleAxis 
            dataKey="name"
            tick={(props) => <CustomLabel {...props} />}
          />
          <PolarRadiusAxis 
            domain={[0, 10]} 
            ticks={[0, 2, 4, 6, 8, 10]} // 目盛りを2刻みに設定
            tick={null} // ルビを非表示
            stroke="#666666"
          />
          <Radar
            name="Stats"
            dataKey="value"
            stroke="#e3df68"
            fill="#e3df68"
            fillOpacity={0.7}
          />
          <text 
            x="50%" 
            y="50%" 
            textAnchor="middle" 
            dominantBaseline="middle" 
            fontSize="28" 
            fontWeight="bold" 
            fill="white"
          >
            NO DATA
          </text>
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
