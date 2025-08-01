import { CoachAction, VoiceState } from './featureTypes';

/**
 * VoiceState に基づいて実施する練習ドリルを決定するルールベース関数。
 * 現段階では簡単な条件でドリルを選択する。
 */
export function coachRules(state: VoiceState): CoachAction | null {
  // 緊張が高い場合はリップロールでリラックス
  if (state.tensionIndex > 70) {
    return {
      drillId: 'lip_trill',
      durationSec: 10,
      message: 'リップロール10秒！',
      reason: '喉のテンションが高いから'
    };
  }
  // 顎が上がっているときは前寄りハミングで矯正
  if (state.tags.includes('顎上がり')) {
    return {
      drillId: 'hum_front',
      durationSec: 10,
      message: 'ハミング10秒、前を意識して！',
      reason: '顎が上がっているため'
    };
  }
  // 息が止まっている時は "ン〜" から "アー" への移行ドリル
  if (state.tags.includes('息止まり')) {
    return {
      drillId: 'ng_to_ah',
      durationSec: 10,
      message: 'ン〜からアーにゆっくり移行しよう！',
      reason: '息が止まってしまっているから'
    };
  }
  return null;
}
