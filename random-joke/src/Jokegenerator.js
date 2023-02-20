import React, { useEffect, useState } from "react";
import "./Jokegenerator.css";
import pic from "./images/emoji.png";

const Jokegenerator = () => {
  const [jokes, setJokes] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const fetchJokes = async () => {
    setIsLoading(true);
    const res = await fetch(
      "https://v2.jokeapi.dev/joke/Programming?type=single"
    );
    const data = await res.json();
    setJokes(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchJokes();
  }, []);

  return (
    <>
      <div className="jokeapp">
        <img src={pic} alt="funny emoji logo" />
        {isLoading ? <h3>Loading....</h3> : <p>{jokes?.joke}</p>}

        <button onClick={fetchJokes}>Next Joke</button>
      </div>

      <footer>Copyright © 2023 MakeYourDay </footer>
    </>
  );
};

export default Jokegenerator;
