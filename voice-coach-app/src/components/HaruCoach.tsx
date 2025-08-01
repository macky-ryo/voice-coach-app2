import React from 'react';
import { VoiceState } from '@/lib/featureTypes';
import { coachRules } from '@/lib/coachRules';

interface HaruCoachProps {
  /**
   * 現在の声の状態。null の場合はまだ解析が始まっていない。
   */
  voiceState: VoiceState | null;
}

/**
 * HARU コーチの吹き出しを表示するコンポーネント。
 * VoiceState に応じて CoachAction を生成してメッセージを出力します。
 */
export default function HaruCoach({ voiceState }: HaruCoachProps) {
  if (!voiceState) return null;
  const action = coachRules(voiceState);
  if (!action) return null;
  return (
    <div style={{ marginTop: '1.5rem', backgroundColor: '#f0f0f5', padding: '1rem', borderRadius: '8px' }}>
      <p><strong>HARU:</strong> {action.message}</p>
      <small>理由: {action.reason}</small>
    </div>
  );
}
