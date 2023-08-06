import React from "react";
import { Contents, MyTeam, Team, Teammates } from "./team.style";
import { MyTeamMates } from "./dummyData";

function TheTeam() {
  return (
    <Contents>
      <MyTeam>
        <div className="headerBox">
          <h3 className="header">Meet The Team</h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
            rutrum donec ultricies cras id ac.
          </p>
        </div>

        <Team>
            {MyTeamMates.map((team, index) => (
                <Teammates key={index}>
                    <div className="box">

                        <div className="imageContainer">
                            <div className="imageHolder">
                                <img src={team.picture} alt="" />
                            </div>
                        </div>

                        <div className="titleTeam">
                            <span className="titleTeamOne">{team.name}</span>
                            <span className="titleTeamTwo">{team.jobTittle}</span>
                        </div>

                    </div>
                </Teammates>
            ))}
        </Team>

      </MyTeam>
    </Contents>
  );
}

export default TheTeam;
