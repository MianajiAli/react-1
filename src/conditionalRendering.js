export const ConditionalRendering = () => {
  const classes = [
    { name: "html", finished: true },
    { name: "html", finished: true },
    { name: "html", finished: true },
    { name: "html", finished: true },
  ];
  const names=["ali","hasan"]
  return (
    <div>
      app
      {names.map((name, index) => {
        return <h1 key={index}>{name}</h1>;
      })}
    </div>
  );
};
