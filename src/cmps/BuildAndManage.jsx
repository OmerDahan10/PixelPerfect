export function BuildAndManage() {
  return (
    <div className="build-and-manage">
      <span className="main-text">
        Build & manage <br /> distributed teams <br /> like no one else.
      </span>
      <div className="details">
        <div className="detaile">
          <img src={require("../img/person1.png")} />
          <div className="details-text">
            <span className="details-text-header">Experienced Individuals</span>
            <p>
              Our network is made up of highly experienced professionals <br />
              who are passionate about what they do.
            </p>
          </div>
        </div>
        <div className="detaile">
          <img src={require("../img/tooth-wheel.png")} />
          <div className="details-text">
            <span className="details-text-header">Easy to Implement</span>
            <p>
              Our processes have been refined over years of implementation{" "}
              <br />
              meaning our teams always deliver.
            </p>
          </div>
        </div>
        <div className="detaile">
          <img src={require("../img/graph.png")} />
          <div className="details-text">
            <span className="details-text-header">Enhanced Productivity</span>
            <p>
              Our customized platform with in-built analytics helps you <br />
              manage your distributed teams.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
