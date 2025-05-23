import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from "recharts";

// カスタムラベルコンポーネント
// 項目名のフォントサイズを調整
const CustomLabel = ({ x, y, payload, data }) => {
  // 各項目の値
  const value = data[payload.index]?.value;

  // 各項目名の座標
  let column_adjustedX = x;
  let column_adjustedY = y;

  // 各項目名の値の座標
  let value_adjustedX = x;
  let value_adjustedY = y;

  // 項目に応じて項目名と値の座標位置を調整してレーダーチャートと重ならないようにする
  if (payload.value === 'トリオン') {
    column_adjustedY -= 15;
    value_adjustedY -= 12;
  } else if (payload.value === '機器操作') {
    column_adjustedX += 10;
    column_adjustedY -= 23;
    value_adjustedX += 9;
    value_adjustedY -= 5;
  } else if (payload.value === '情報分析') {
    column_adjustedX += 15;
    column_adjustedY -= 18;
    value_adjustedX += 15;
    value_adjustedY += 1;
  } else if (payload.value === '並列処理') {
    column_adjustedY += 7;
    value_adjustedY += 10;
  } else if (payload.value === '戦術') {
    column_adjustedX -= 15;
    column_adjustedY -= 2;
    value_adjustedX -= 15;
    value_adjustedY += 1;
  }  else if (payload.value === '指揮') {
    column_adjustedX += -10;
    column_adjustedY -= 8;
    value_adjustedX -= 9;
    value_adjustedY -= 5;
  }

  return (
    <g>
      <text x={column_adjustedX} y={column_adjustedY} textAnchor="middle" fill="white" fontSize={13} fontWeight="bold">
        {payload.value === '機器操作' ? (
          <>
            <tspan x={column_adjustedX} dy="0">機器</tspan>
            <tspan x={column_adjustedX} dy="1.2em">操作</tspan>
          </>
        ) : payload.value === '情報分析' ? (
          <>
            <tspan x={column_adjustedX} dy="0">情報</tspan>
            <tspan x={column_adjustedX} dy="1.2em">分析</tspan>
          </>
        ) : (
          payload.value
        )}
      </text>
      <text x={value_adjustedX} y={value_adjustedY + 15} textAnchor="middle" fill={value >= 10 ? "#b51232" : "white"} fontWeight={value >= 10 ? "bold" : ""} fontSize={18}>
        {value}
      </text>
    </g>
  );
};

export default function StatusGraphOperator({ status }) {
  // 項目の値が10を超えた場合はグラフの表示範囲が最大値に引っ張られるため、
  // 最大値を10に設定しすることで全キャラクターのステータスグラフの表示範囲を統一させる
  const adjustedStatus = status.map(item => ({
    ...item,
    value: Math.min(item.value, 10)
  }));

  // ステータスの合計値を計算（オペレーターなのでトリオン値は加算しない）
  let total = status.reduce((sum, item) => {
    return item.name !== 'トリオン' ? sum + item.value : sum;
  }, 0);
  if (total === '0') {
    total = '-';
  }

  return (
    <div className="w-full h-full">
      <div className="text-base absolute bottom-2 right-2 px-2 text-white total-status-container">
        <p>OP TOTAL：{total}</p>
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="75%" data={adjustedStatus}>
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
            angle={90} // 中央から垂直方向に表示
          />
          <Radar
            name="Stats"
            dataKey="value"
            stroke="#e3df68"
            fill="#e3df68"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
