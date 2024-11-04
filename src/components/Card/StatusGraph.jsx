import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from "recharts";

// カスタムラベルコンポーネント
// 項目名のフォントサイズを調整
const CustomLabel = ({ x, y, payload, data }) => {
  // 各項目の値
  const value = data[payload.index]?.value;

  return (
    <g>
      <text x={x} y={y} textAnchor="middle" fill="#666" fontSize={14} fontWeight="bold">
        {payload.value} {/* 項目名を表示 */}
      </text>
      <text x={x} y={y + 15} textAnchor="middle" fill="#666" fontSize={14}>
        {value} {/* 各項目の値を表示 */}
      </text>
    </g>
  );
};

export default function StatusGraph({ status }) {
  // 項目の値が10を超えた場合はグラフの表示範囲が最大値に引っ張られるため、
  // 最大値を10に設定しすることで全キャラクターのステータスグラフの表示範囲を統一させる
  const adjustedStatus = status.map(item => ({
    ...item,
    value: Math.min(item.value, 10)
  }));

  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="85%" data={adjustedStatus}>
          <PolarGrid />
          <PolarAngleAxis 
            dataKey="name"
            // tick={<CustomLabel />} // 項目名のカスタムラベル
            tick={(props) => <CustomLabel {...props} data={status} />}
          />
          <PolarRadiusAxis 
            domain={[0, 10]} 
            ticks={[0, 2, 4, 6, 8, 10]} // 目盛りを2刻みに設定
            tick={null} // ルビを非表示
          />
          <Radar
            name="Stats"
            dataKey="value"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
