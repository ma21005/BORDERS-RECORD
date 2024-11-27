// トリガーの名前を渡すとそのトリガーの種類を返す
import { triggerNameAndType } from './triggerNameAndType';

// 他のファイルからでもこのファイルを経由して triggerNameAndType を利用できるようにする
export { triggerNameAndType };

export function fetchTriggerType(triggerName) {
  for (const [type, names] of Object.entries(triggerNameAndType)) {
    if (names.includes(triggerName)) {
      return type;
    }
  }
  return "未登録タイプ";
}