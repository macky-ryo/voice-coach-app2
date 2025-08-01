/**
 * オーディオおよび映像から取得される1フレーム分の特徴量。
 */
export type FeatureFrame = {
  /** 時刻 (ms) */
  t: number;
  /** 音量の指標 (0-1 程度) */
  rms: number;
  /** 推定ピッチ (Hz)。音が検出されない場合は null。*/
  pitchHz?: number | null;
  /** スペクトル重心 (0-1 スケールで正規化) */
  spectralCentroid: number;
  /** ピッチの微小揺れ (0-1 スケール)。値が大きいほど揺れが大きい。*/
  microPitchVar?: number;
  /** ハーモニクスとノイズの比率の指標 (0-1)。大きいほど雑音が少ない。*/
  hnrLike?: number;
  /** 顎角度 (度)。MediaPipe のランドマークから算出。*/
  jawAngleDeg?: number;
};

/**
 * 音声解析から得られる現在の声の状態を表す。
 */
export type VoiceState = {
  /** 緊張指数 (0-100)。高いほど力みが強い。*/
  tensionIndex: number;
  /** 状態タグ */
  tags: Array<'息止まり' | '顎上がり' | '高域寄り' | '段差あり'>;
};

/**
 * コーチ AI が提案するドリルとその理由。
 */
export type CoachAction = {
  drillId: 'lip_trill' | 'hum_front' | 'ng_to_ah';
  durationSec: 10 | 20 | 30;
  message: string;
  reason: string;
};
