// APIから取得したトリガー名 と S3に保存されている画像名 の紐付けを行う
import { triggerNameAndType } from './fetchTriggerType';

const optionTrigger = triggerNameAndType["OPTION TRIGGER"];

export function getImageName(trigger) {
  if (trigger.includes("拳銃")) {
    return "拳銃";
  } else if (trigger.includes("突撃銃")) {
    return "突撃銃";
  }else if (trigger.includes("機関砲")) {
    return "機関砲";
  }
  return optionTrigger.includes(trigger) ? "オプション" : trigger;
}
