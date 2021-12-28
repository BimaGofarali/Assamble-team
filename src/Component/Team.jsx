import React from "react";
import { Container } from "react-bootstrap";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Team.css"

const trash = <FontAwesomeIcon className="fa-lg" icon={faTrash} />;

function ComponentTeam({ team }) {
  const deletTeam = () => {
    fetch(`http://localhost:4000/Team/${team.id}`, {
      method: "DELETE",
      //metode delete digunakan untuk delet task/ todo berdasarkan id
    }).then(() => {
      alert("Team Deleted");
      window.location.replace("/");
    });
  };

  return (
    <Container>
      <div className="d-flex">
        <h4>{team.name}</h4>
        <span className="close" onClick={deletTeam}>
          <i>{trash} </i>
        </span>
      </div>
    </Container>
  );
}

export default ComponentTeam;
