import React from 'react';

interface MeterProps {
  /**
   * 緊張指数 (0-100)。
   */
  value: number;
  /**
   * 現在検出されているタグの配列。
   */
  tags: string[];
}

/**
 * 声の状態を示すメーターコンポーネント。
 * 現在は簡易的に数値とタグを表示します。
 */
export default function Meter({ value, tags }: MeterProps) {
  return (
    <div style={{ marginTop: '1rem' }}>
      <div>
        <strong>テンション:</strong> {value}
      </div>
      <div>
        <strong>タグ:</strong> {tags.length > 0 ? tags.join(', ') : 'なし'}
      </div>
    </div>
  );
}
