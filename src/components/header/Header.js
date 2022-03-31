import { AiOutlineSearch, AiOutlineBell } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";

import "./header.css";

const Header = () => {
  return (
    <header className="mainHeader">
      <div>
        <input type="text" placeholder="Ask us any question" className="searchHD"/>
        <AiOutlineSearch className="searchIcon"/>
      </div>
      <div className="headerLeft">
        <span className="notifier">
          <AiOutlineBell className="notifierIcon" />
          <p>3</p>
        </span>
        <p className="divider"></p>
        <span className="userCard">
          <p className="profileIMG"></p>
          <BsChevronDown className="userIcon" />
        </span>
      </div>
    </header>
  );
};

export default Header;
