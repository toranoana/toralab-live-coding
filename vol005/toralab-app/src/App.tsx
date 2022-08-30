import { useCallback, useEffect, useState } from 'react';
import './App.css';
import { DataRow } from './interfaces';
import { SearchArea } from './SearchArea';
import { Detail } from './Detail';

async function getData(): Promise<DataRow[]> {
  return new Promise<DataRow[]>((resolve) => {
    setTimeout(() => {
      resolve([{
        id: 1,
        name: 'hattori'
      }, {
        id: 2,
        name: 'koga',
      }, {
        id: 3,
        name: 'labo-chan',
      }, {
        id: 4,
        name: 'maid-chan',
      }]);
    }, 1000);
  });
}

function App() {
  const [data, setData] = useState<DataRow[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [text, setText] = useState('');

  useEffect(() => {
    (async () => {
      const d = await getData();
      setData(d);
    })()
  }, []);

  return (
    <div className="App">
      <SearchArea
        data={data}
        onSelectData={useCallback((id) => {
          setSelectedId(id);
        }, [])}
      />
      <hr />
      <Detail
        data={data}
        selectedId={selectedId}
      />
      <hr />
      <button onClick={() => {
        if (data.length === 0) {
          return;
        }
        data[0].id = Math.random();
        setData([...data]);
      }}>click</button>
      <textarea value={text} onInput={e => {
        setText((e.target as any).value);
      }}></textarea>
    </div>
  );
}

export default App;
