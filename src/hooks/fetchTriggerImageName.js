// APIから取得したトリガー名 と S3に保存されている画像名 の紐付けを行う
import { triggerType } from './fetchTriggerType';

const optionTrigger = triggerType["OPTION TRIGGER"];

export function getImageName(trigger) {
  if (trigger.includes("拳銃")) {
    return "拳銃";
  } else if (trigger.includes("突撃銃")) {
    return "突撃銃";
  }
  return optionTrigger.includes(trigger) ? "オプション" : trigger;
}
