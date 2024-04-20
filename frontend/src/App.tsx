import { useEffect } from "react";

import { OnFileDrop, OnFileDropOff } from "../wailsjs/runtime/runtime";

function App() {
  useEffect(() => {
    OnFileDrop((x, y, paths) => {
      console.log(x, y, "Dropped files: ", paths);
    }, true);
    return () => OnFileDropOff();
  }, []);

  return (
    <div id="App" className="w-screen h-screen bg-slate-400">
      <button onClick={() => location.reload()}>Reload</button>
      <div
        className="grid grid-cols-4 gap-4 items-center text-center m-4 bg-red-400"
        style={{ "--wails-drop-target": "drop" } as React.CSSProperties}
      >
        <div
          className="rounded-lg bg-red-500  grid items-center justify-center h-24 shadow-lg"
          style={{ "--wails-drop-target": "drop" } as React.CSSProperties}
        >
          01
        </div>
        <div className="rounded-lg bg-teal-200 grid items-center justify-center h-24 shadow-lg">
          01
        </div>
        <div
          className="rounded-lg col-span-2 bg-yellow-400 grid items-center justify-center h-24 shadow-lg"
          style={{ "--wails-drop-target": "none" } as React.CSSProperties}
        >
          01
        </div>
        <div
          className="rounded-lg bg-red-500 col-span-2 row-span-2 grid grid-cols-2 gap-4 shadow-lg"
          style={{ "--wails-drop-target": "drop" } as React.CSSProperties}
        >
          <div className="rounded-lg bg-teal-200 grid items-center justify-center h-24 shadow-lg">
            01
          </div>
          <div
            className="rounded-lg bg-yellow-400 grid items-center justify-center h-24 shadow-lg"
            style={{ "--wails-drop-target": "none" } as React.CSSProperties}
          >
            01
          </div>
          <div
            className="rounded-lg bg-yellow-400 grid items-center justify-center h-24 shadow-lg"
            style={{ "--wails-drop-target": "none" } as React.CSSProperties}
          >
            01
          </div>
          <div className="rounded-lg bg-teal-200 grid items-center justify-center h-24 shadow-lg">
            01
          </div>
        </div>
        <div
          className="rounded-lg bg-red-500  grid items-center justify-center h-24 shadow-lg"
          style={{ "--wails-drop-target": "drop" } as React.CSSProperties}
        >
          01
        </div>
        <div
          className="rounded-lg bg-red-500 grid items-center justify-center h-24 shadow-lg"
          style={{ "--wails-drop-target": "drop" } as React.CSSProperties}
        >
          01
        </div>
        <div
          className="rounded-lg bg-red-500 grid items-center justify-center h-24 shadow-lg"
          style={{ "--wails-drop-target": "drop" } as React.CSSProperties}
        >
          01
        </div>
        <div
          className="rounded-lg bg-red-500 grid items-center justify-center h-24 shadow-lg"
          style={{ "--wails-drop-target": "drop" } as React.CSSProperties}
        >
          01
        </div>
        <div
          className="rounded-lg bg-red-500 grid items-center justify-center h-24 shadow-lg"
          style={{ "--wails-drop-target": "drop" } as React.CSSProperties}
        >
          01
        </div>
        <div
          className="rounded-lg bg-red-500 grid items-center justify-center h-24 shadow-lg"
          style={{ "--wails-drop-target": "drop" } as React.CSSProperties}
        >
          01
        </div>
        <div
          className="rounded-lg bg-red-500 grid items-center justify-center h-24 shadow-lg"
          style={{ "--wails-drop-target": "drop" } as React.CSSProperties}
        >
          01
        </div>
        <div
          className="rounded-lg bg-red-500 grid items-center justify-center h-24 shadow-lg"
          style={{ "--wails-drop-target": "drop" } as React.CSSProperties}
        >
          01
        </div>
      </div>
    </div>
  );
}

export default App;
