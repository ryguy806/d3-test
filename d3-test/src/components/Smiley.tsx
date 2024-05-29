const Smiley = () => {
  return (
    <div>
      <h3>Smiley Face</h3>
      <svg width={100} height={100} style={{ border: "1px solid red" }}>
        <path
          d='
            M25,25 L25,35
            M75,25 L75,35
            M15,75 C20,100 80,100 85,75
        '
          stroke='blue'
          strokeWidth='2'
          fill='none'
        />
      </svg>
    </div>
  );
};

export default Smiley;
