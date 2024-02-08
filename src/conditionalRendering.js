export const ConditionalRendering = () => {
  const classes = [
    { name: "html", finished: true },
    { name: "html", finished: true },
    { name: "html", finished: true },
    { name: "html", finished: true },
  ];
  return (
    <div>
      app
      {classes.map((name, index) => {
        return <h1 key={index}>{name}</h1>;
      })}
    </div>
  );
};
