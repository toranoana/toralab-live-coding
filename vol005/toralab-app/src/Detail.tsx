import React from "react";
import { DataRow } from "./interfaces";

interface Props {
  data: DataRow[];
  selectedId: number | null;
}

function DetailRaw({ data, selectedId }: Props) {
  const detail = data.find(d => d.id === selectedId);

  return (
    <div>
      <div>詳細情報</div>
      <div>レンダリング確認用ランダム値: {Math.random()}</div>
      {detail ?
        <ul>
          <li>{detail.id}</li>
          <li>{detail.name}</li>
        </ul> : <></>
      }
    </div>
  )
}

export const Detail = React.memo(DetailRaw)
