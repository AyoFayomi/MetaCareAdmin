import { BsChevronDown } from "react-icons/bs";
import './teamsHeader.css'

const TeamHeader = () => {
  return (
    <div className="teamsHeader">
      <h2>Efficiency Analysis</h2>

      <form className="topForm">
        <span>
          <input type="text" placeholder="&#61442; Search" className="topSearch" />
          
        </span>
        <button className="filterBTN">
          Filter Options <BsChevronDown className="filterBTNIcon"/>
        </button>
        <button className="export">Export</button>
      </form>
    </div>
  );
};

export default TeamHeader;
