import { FormEvent, useEffect, useRef, useState } from "react";
import * as d3 from "d3";

const FirstD3 = () => {
  const ref = useRef(null);
  const [name, setName] = useState("");
  const [value, setValue] = useState(0);

  const [data, setData] = useState([
    { name: "A", value: 10 },
    { name: "B", value: 20 },
    { name: "C", value: 30 },
    { name: "D", value: 20 },
    { name: "E", value: 30 },
    { name: "F", value: 60 },
  ]);
  const rectWidth = 50;

  useEffect(() => {
    const svg = d3.select(ref.current);
    const allRects = svg.selectAll("rect").data(data);
    allRects.attr("x", (d, i) => i).attr("height", (d) => d.value);
  });

  const handleNameChange = (event: FormEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };

  const handleValueChange = (event: FormEvent<HTMLInputElement>) => {
    setValue(parseInt(event.currentTarget.value));
  };

  const handleAddItem = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setData([...data, { name: name, value: value }]);
  };

  return (
    <div>
      <h3>First D3.js stuff</h3>
      <svg
        className='svg'
        ref={ref}
        width={rectWidth * data.length}
        height={75}
      >
        {data.map((d: { name: string; value: number }, i: number) => (
          <rect key={i} />
        ))}
      </svg>

      <form onSubmit={(e) => handleAddItem(e)}>
        <input type='text' value={name} onChange={handleNameChange} />
        <input type='number' value={value} onChange={handleValueChange} />
        <button type='submit'>Add</button>
      </form>
    </div>
  );
};

export default FirstD3;
