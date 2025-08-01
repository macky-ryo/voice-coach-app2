import React from 'react';
import { useAudioAnalyzer } from '@/hooks/useAudioAnalyzer';
import { useVoiceState } from '@/hooks/useVoiceState';
import Meter from '@/components/Meter';
import HaruCoach from '@/components/HaruCoach';

/**
 * メイン画面コンポーネントです。
 * マイクの音声から特徴量を取得し、声の状態に応じた UI とコーチングを表示します。
 */
export default function HomePage() {
  // オーディオ解析から現在の FeatureFrame を取得
  const { featureFrame } = useAudioAnalyzer();
  // 解析結果から VoiceState を計算
  const voiceState = useVoiceState(featureFrame);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>ボイスコーチ MVP</h1>
      {/* メーター表示 */}
      <Meter value={voiceState?.tensionIndex ?? 0} tags={voiceState?.tags ?? []} />
      {/* HARU コーチのメッセージ */}
      <HaruCoach voiceState={voiceState} />
      {/* デバッグ表示: フィーチャーフレーム */}
      <pre>{JSON.stringify(featureFrame, null, 2)}</pre>
    </div>
  );
}
