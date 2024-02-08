import "./App.css";

function App() {
  const job = (
    <div>
      <h1>fds</h1>
      <h2>das</h2>
      <h2>ad</h2>
    </div>
  );
  return (
    <div>
      {job}
      <Shogl salery={2} />
    </div>
  );
}
const Shogl = (props) => {
  return(
    <div> {props.salery}</div>
  )
};
export default App;
