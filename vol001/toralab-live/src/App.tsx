import React, { useDeferredValue, useEffect, useState, useTransition } from 'react';
import logo from './logo.svg';
import './App.css';

interface Row {
  name: string;
}

async function getData(): Promise<Row[]> {
  return new Promise<Row[]>((resolve) => {
    setTimeout(() => {
      resolve([{
        name: 'はっとり'
      }, {
        name: 'こが',
      }, {
        name: 'らぼちゃん',
      }, {
        name: 'めいどちゃん',
      }]);
    }, 1000);
  });
}

function HighLoad({ name }: { name: string }) {
  return (
    <div>{name}{Array(40000).fill(0).map(() => <div />)}</div>
  )
}

function App() {
  const [data, setData] = useState<Row[]>([]);
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState<Row[]>([]);
  // const [pending, startTransition] = useTransition();
  const deferredSearch = useDeferredValue(search);

  useEffect(() => {
    (async () => {
      const d = await getData();
      setData(d);
    })()
  }, []);

  useEffect(() => {
    setFilteredData(() => data.filter(d => deferredSearch.length === 0 || d.name.includes(deferredSearch)));
  }, [deferredSearch, data]);

  // useEffect(() => {
  //   startTransition(() => {
  //     setFilteredData(() => data.filter(d => search.length === 0 || d.name.includes(search)));
  //   });
  // }, [search, data]);

  return (
    <div className="App">
      <input type="text" value={search} onInput={e => {
        setSearch((e.target as any).value);
      }} />
      <div>検索ワード: {search}</div>
      <ul>
      {filteredData.map(d => <li><HighLoad name={d.name} /></li>)}
      </ul>
      {/* {pending && <div>Loading...</div>} */}
      {/* <ul>
        {!pending && filteredData.map(d => <li><HighLoad name={d.name} /></li>)}
      </ul> */}
    </div>
  );
}

export default App;
