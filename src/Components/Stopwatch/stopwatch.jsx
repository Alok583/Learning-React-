
import './stopwatch.css';
import { useRef, useState } from "react";

export function StopWatch() {
  const [hrs, setHours] = useState(0);
  const [Min, SetMin] = useState(0);
  const [Sec, setSec] = useState(0);
  const [milSec, setMiliSec] = useState(0);

  const [isRunning, setIsRunning] = useState(false);

  let thread = useRef(null);

  var ms = 0;
  var s = 0;
  var m = 0;
  var h = 0;

  function StartTimer() {
    ms++;
    setMiliSec(ms);
    if (ms === 99) {
      s++;
      ms = 0;
      setSec(s);
      if (s === 30) {
        m++;
        s = 0;
        SetMin(m);
        if (m === 5) {
          h++;
          m = 0;
          setHours(h);
        }
      }
    }
  }

  function handleStartClick() {
    if (isRunning) {
      clearInterval(thread.current);
      setIsRunning(false);
    } else {
        thread.current = setInterval(StartTimer, 1);
      setIsRunning(true);
    }
  }

  function handleClearClick() {
    clearInterval(thread.current);
    setMiliSec(0);
    setSec(0);
    SetMin(0);
    setHours(0);
    setIsRunning(false);
    ms = 0;
    s = 0;
    m = 0;
    h = 0;
  }

  return (
    <div className="container-fluid p-4">
      <div className="d-flex justify-content-center">
        <div className="w-50 ">
          <div className="row">
            <div className="col border border-1 p-3">
              <span>{hrs}H</span>
            </div>
            <div className="col border border-1 p-3">
              <span>{Min}M</span>
            </div>
            <div className="col border border-1 p-3">
              <span>{Sec}S</span>
            </div>
            <div className="col border border-1 p-3">
              <span>{milSec}MS</span>
            </div>
          </div>

          <div className="mt-3">
            <div>
              <button
                onClick={handleStartClick}
                className="btn btn-primary">
                {isRunning ? 'Pause' : 'Start'}
              </button>
              
                <button
              onClick={handleClearClick}
              className=" mx-2 btn btn-danger">
              Clear
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
