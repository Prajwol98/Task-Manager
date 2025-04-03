import AllTask from "./components/AllTask";
// import CompleteTask from "./components/CompleteTask";
// import IncompleteTask from "./components/IncompleteTask";

function App() {
  return (
    <div className="container mx-auto ">
      <div className="flex justify-center mt-20">
        <h1 className="font-bold ">Task manager</h1>
      </div>
      <div className="flex  justify-center mt-10">
        <AllTask />
        {/* <IncompleteTask />
        <CompleteTask /> */}
      </div>
    </div>
  );
}

export default App;
