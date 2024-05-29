import { FormEvent, useRef, useState } from "react";
import * as d3 from "d3";

const FirstD3 = () => {
  const ref = useRef(null);
  const [name, setName] = useState("");
  const [value, setValue] = useState(0);

  const marginTop = 20;
  const marginRight = 20;
  const marginBottom = 20;
  const marginLeft = 20;
  const width = 640;
  const height = 400;

  const [data, setData] = useState([
    { name: "A", value: 10 },
    { name: "B", value: 20 },
    { name: "C", value: 30 },
    { name: "D", value: 20 },
    { name: "E", value: 30 },
    { name: "F", value: 60 },
  ]);

  const x = d3.scaleLinear(
    [0, data.length - 1],
    [marginLeft, width - marginRight]
  );
  const y = d3.scaleLinear([0, 100], [height - marginBottom, marginTop]);
  const line = d3.line((d, i) => x(i), y);

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
      <svg className='svg' ref={ref} width={width} height={height}>
        <path
          fill='none'
          stroke='currentColor'
          strokeWidth={1.5}
          d={line(Array.from(data.values(), ({ value }) => value))!}
        />
        <g fill='green' strokeWidth={2.5} stroke='currentColor'>
          {data.map((d, i) => (
            <circle cx={x(i)} cy={y(d.value)} r={5} key={i} />
          ))}
        </g>
      </svg>
      <br />
      <form onSubmit={(e) => handleAddItem(e)}>
        <input type='text' value={name} onChange={handleNameChange} />
        <input type='number' value={value} onChange={handleValueChange} />
        <button type='submit'>Add</button>
      </form>
    </div>
  );
};

export default FirstD3;
