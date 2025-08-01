# Voice Coach App (MVP)

このリポジトリは、「高音が苦しい」と感じるユーザー向けに、リアルタイムで声の状態を可視化し、適切な発声練習を提案する Web アプリの MVP 実装です。Next.js + TypeScript による PWA を前提としています。

## 主な構成

- **src/pages/index.tsx**: メイン画面。マイク入力から特徴量を取得し、メーター表示と HARU コーチのメッセージを表示します。
- **src/hooks/useAudioAnalyzer.ts**: Web Audio API を利用して音声を解析し、`FeatureFrame` を生成するカスタムフック。現段階ではダミーデータを返します。
- **src/hooks/useVoiceState.ts**: `FeatureFrame` から `VoiceState` を計算するカスタムフック。単純なルールベースでタグ付けと緊張指数を算出します。
- **src/components/Meter.tsx**: 声の状態を示すメーター (数値とタグ) を表示します。
- **src/components/HaruCoach.tsx**: HARU コーチの吹き出しメッセージを表示します。`coachRules.ts` に基づき、練習ドリルを提案します。
- **src/lib/featureTypes.ts**: `FeatureFrame`、`VoiceState`、`CoachAction` などの型定義。
- **src/lib/coachRules.ts**: 声の状態に応じた練習ドリルを決定するルールベースの関数。

## 開発メモ

現在の環境では npm パッケージのインストールが制限されています。そのため、各ファイルは実装の雛形と設計の指針として作成されています。実際に動作させる際には、ネットワーク接続が可能な環境で依存パッケージをインストールし、`useAudioAnalyzer` で Web Audio API や MediaPipe による実装を追加してください。

## HARU キャラクター素材について

このリポジトリではキャラクター画像やアイコンは含まれていません。HARU コーチの見た目や表情に関する画像素材を別途ご用意いただくか、後日追加予定です。素材は `public/images` フォルダに配置し、コンポーネントから参照してください。
