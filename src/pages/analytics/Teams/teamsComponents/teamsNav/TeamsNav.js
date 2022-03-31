import "./teamNav.css"

const TeamsNav = () => {
  return (
    <nav className="teams-nav">
      <ul>
        <li>
          <button id="TeamsActive">Efficiency</button>
        </li>
        <li>
          <button>Volume</button>
        </li>
        <li>
          <button>Customer Satisfaction</button>
        </li>
        <li>
          <button>Backlog</button>
        </li>
      </ul>
    </nav>
  );
};

export default TeamsNav;
