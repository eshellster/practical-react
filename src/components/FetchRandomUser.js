import React, { useEffect, useState } from "react";

const FetchRandomUser = () => {
  const [loading, setLoading] = useState(true);
  const [people, setPeople] = useState([]);

  const Fetch = async () => {
    const url = "https://api.randomuser.me/?results=5";
    const response = await fetch(url);
    const data = await response.json();
    setLoading(false);
    setPeople(data.results);
    console.log(data.results);
  };

  useEffect(() => {
    Fetch();
    return () => {};
  }, []);

  const peopleJSX = people.map((person, idx) => (
    <div key={`some-person-${idx}`}>
      <img src={person.picture.large} alt="" />
      <div>{`${person.name.first} ${person.name.last}`}</div>
    </div>
  ));

  return (
    <div className="App-contain">
      {loading ? "loading..." : <div>{peopleJSX}</div>}
    </div>
  );
};

export default FetchRandomUser;
