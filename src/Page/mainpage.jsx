import React from "react";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "./mainpage.css";
import Team from "../Component/Team"

function Mainpage() {
  const Localhost = "http://localhost:4000/Team";
  const [teams, setTeam] = useState([]);
  const [addTeam, setAddTeam] = useState([]);

  useEffect(() => {
    fetch(`${Localhost}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTeam(data); //datanya di masukkan ke setTodos
      })
      .catch((err) => {
        //jika data error maka akan muncul pesan erorr
        alert(err.response);
      });
  }, []);

  const addNewTeam = () => {
    const newTeam = { addTeam };
    fetch(`${Localhost}`, {
      //API yang dituju
      method: "POST", //post task ke API
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTeam),
    }).then(() => {
      setAddTeam(""); //saat sukses add todo, kemudian reset form.
      alert("New Team Added");
      window.location.replace("/"); //referes halaman
    });
  };

  return (
    <div className="body">
      <Container>
        <div className="page-wrapper">
          <header id="masthead" className="text-center">
            <h1>Assemble your team</h1>
            <span className="sep-border"></span>
            <h3>Make a group consists of 3 people</h3>
          </header>
          <div>
            {teams.map((team)=>(
              <Team key={team.id} team={team}/>
            ))}
          </div>
          <div id="team-builder">
            <div id="team-chosen"></div>
            <div className="member-input">
              <input
                value={addTeam}
                onChange={(e) => setAddTeam(e.target.value)}
                type="text"
                className="name-input"
                id="input-field"
                placeholder="Input name here..."
              />
              <button className="confirm-member" onClick={addNewTeam}>
                Add to the team
              </button>
              <button id="confirm-team" className="not-ready">
                Need 3 more people
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Mainpage;
