import { useState } from "react";

import Navbar from "./components/Navbar";
import CareerList from "./components/CareerList";
import Roadmap from "./components/Roadmap";
import Courses from "./components/Courses";

function App() {

  const [career, setCareer] = useState(null);

  const [skill, setSkill] = useState(null);


  return (

    <main className="app-shell">

      <Navbar />

      <CareerList
        selectCareer={setCareer}
      />

      {
        career &&
        <Roadmap
          career={career}
          selectSkill={setSkill}
        />
      }
      {
        skill &&
        <Courses skill={skill} />
      }

    </main>

  )

}


export default App;