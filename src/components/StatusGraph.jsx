import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from "recharts";

// カスタムラベルコンポーネント
// 項目名のフォントサイズを調整
const CustomLabel = ({ x, y, payload }) => {
  return (
    <text x={x} y={y} textAnchor="middle" fill="#666" fontSize={12}>
      {payload.value}
    </text>
  );
};

export default function StatusGraph({ status }) {

  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="65%" data={status}>
          <PolarGrid />
          <PolarAngleAxis 
            dataKey="name" 
            tick={<CustomLabel />} // 項目名のカスタムラベル
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
