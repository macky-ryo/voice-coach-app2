import { useMemo } from 'react';
import { FeatureFrame, VoiceState } from '@/lib/featureTypes';

/**
 * FeatureFrame から VoiceState を計算するカスタムフック。
 * 単純なルールベースの実装で、MVPではここでタグ付けと緊張指数を算出します。
 */
export function useVoiceState(featureFrame: FeatureFrame | null): VoiceState | null {
  return useMemo(() => {
    if (!featureFrame) return null;
    // 緊張指数: RMS を 0-100 にスケーリング
    const tensionIndex = Math.min(100, Math.floor(featureFrame.rms * 100));
    const tags: VoiceState['tags'] = [];
    // スペクトル重心が高い場合は高域寄りタグを付与
    if (featureFrame.spectralCentroid > 0.7) tags.push('高域寄り');
    // ピッチの微小揺れが大きい場合は段差ありタグを付与
    if (featureFrame.microPitchVar && featureFrame.microPitchVar > 0.5) tags.push('段差あり');
    // HNR 値が低い場合 (雑音が多い) は息止まりタグを付与
    if (featureFrame.hnrLike && featureFrame.hnrLike < 0.3) tags.push('息止まり');
    // 顎角度が一定以上のとき顎上がりタグを付与
    if (featureFrame.jawAngleDeg && featureFrame.jawAngleDeg > 20) tags.push('顎上がり');
    return {
      tensionIndex,
      tags
    };
  }, [featureFrame]);
}
