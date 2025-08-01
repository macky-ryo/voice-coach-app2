import { useEffect, useState } from 'react';
import { FeatureFrame } from '@/lib/featureTypes';

/**
 * マイク入力を処理して音声特徴量を生成するカスタムフック。
 * 現在はダミーのランダムデータを返します。Web Audio API の実装は今後追加します。
 */
export function useAudioAnalyzer() {
  const [featureFrame, setFeatureFrame] = useState<FeatureFrame | null>(null);

  useEffect(() => {
    // TODO: マイク入力を取得し、RMS、ピッチ、スペクトル重心などを計算する実装に置き換える。
    const interval = setInterval(() => {
      setFeatureFrame({
        t: Date.now(),
        rms: Math.random(),
        pitchHz: 100 + Math.random() * 800,
        spectralCentroid: Math.random(),
        microPitchVar: Math.random(),
        hnrLike: Math.random(),
        jawAngleDeg: undefined
      });
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return { featureFrame };
}
