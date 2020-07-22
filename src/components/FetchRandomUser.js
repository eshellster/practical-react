import React, { useEffect, useState } from "react";

const FetchRandomUser = () => {
  const [people, setPeople] = useState({ loading: true });

  const Fetch = async () => {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    setPeople({ loading: false, person: data.results[0] });
    console.log(data);
  };

  useEffect(() => {
    Fetch();
    return () => {};
  }, []);

  return (
    <div className="App-contain">
      {people.loading ? (
        "loading..."
      ) : (
        <div>
          <img src={people.person.picture.large} alt="" />
          <div>{`${people.person.name.first} ${people.person.name.last}`}</div>
        </div>
      )}
    </div>
  );
};

export default FetchRandomUser;
