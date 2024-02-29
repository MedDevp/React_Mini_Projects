import { useState } from "react";

function App() {

  const [mode, setMode] = useState(false);

const handleClick = () =>{
  setMode(!mode);
  console.log(mode)

}

  return (
    <>
      <div className={`container ${mode? "dark" : ""}`}>
        <div className="content">
          <h1 style={{
            color : mode ? "orange" : "green"
          }}>Welcome</h1>
          <button type="button" onClick={handleClick}>Click</button>
        </div>
      </div>
    </>
  );
}

export default App;
