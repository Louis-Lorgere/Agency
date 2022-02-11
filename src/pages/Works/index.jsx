// pages/Documentation/index.jsx
import { works } from "data/works";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";


const Works = () => {
  const {workTitle} = useParams();
  const [currentWork, setCurrentWork] = useState(undefined);

  useEffect(() => {
    const foundWork = works.find((works) => works.title === workTitle);
    setCurrentWork(foundWork); 
  }, [workTitle])

  if (currentWork != undefined)
  {
    return (
      <div>
        <h2>
          {currentWork.title}
        </h2>
        <p>{currentWork.text}</p>
      </div>
    )
  }
  else {
    return (
      <div>
        <p>Erreur</p>
      </div>
    )
  }
};
export default Works;