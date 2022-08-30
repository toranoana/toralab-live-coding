import React from "react";
import { useEffect, useState } from "react";
import { DataRow } from "./interfaces";

interface Props {
  data: DataRow[];
  onSelectData: (id: number) => void;
}

function SearchAreaRaw({ data, onSelectData }: Props) {
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState<DataRow[]>([]);

  useEffect(() => {
    setFilteredData(() => data.filter(d => search.length === 0 || d.name.includes(search)));
  }, [data, search]);

  return (
    <div>
      <input type="text" value={search} onInput={e => {
        setSearch((e.target as any).value);
      }} />
      <div>検索ワード: {search}</div>
      <div>レンダリング確認用ランダム値: {Math.random()}</div>
      <ul className="list-area">
        {filteredData.map(d => <li key={d.id} onClick={() => {
          onSelectData(d.id)
        }}>{d.name}</li>)}
      </ul>
    </div>
  )
}

export const SearchArea = React.memo(SearchAreaRaw);
