import { useState } from "react";
import Button from "../Button";
import Resume from "./Resume";

function Home() {
  const [showResume, setShowResume] = useState();

  return (
    <div className="">
      <div className="relative">
        <div className="flex flex-col justify-center w-screen items-center bg-slate-500 mt-4 ">
          <div>
            <div>Udaya Kumar</div>
            <div>React Developer</div>
            <div>Interests</div>
          </div>
          <div className="flex justify-between items-center gap-2">
            <button className="bg-yellow-500">Contact Me</button>
            <button
              className="bg-green-600"
              onClick={() => setShowResume((s) => !s)}
            >
              Resume
            </button>
          </div>
          <div>
            <Button to="/about">&rarr;</Button>
          </div>
        </div>
      </div>
      {showResume && <Resume onClose={() => setShowResume(false)} />}
    </div>
  );
}

export default Home;
