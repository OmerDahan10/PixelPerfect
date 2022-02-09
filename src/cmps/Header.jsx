

export function Header() {
  return (
    <div className="header">
      <div className="main-nav">
        <img src={require("../img/logo.png")} />
        <span>home</span>
        <span>about</span>
      </div>
      <button className="contact">contact us</button>
    </div>
  );
}
