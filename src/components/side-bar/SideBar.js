import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoPeopleOutline, IoCalendarClearOutline } from "react-icons/io5";
import { CgCheckR } from "react-icons/cg";
import { BiTimeFive } from "react-icons/bi";
import { RiWechat2Line } from "react-icons/ri";
import "./sidebar.css";

const SideBar = () => {
  const [show, setShow] = useState(true);

  const handleDrop = () => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  return (
    <aside className="sideBar">
      <div className="sideBarCard">
        <p className="sideCardName">Metacare</p>
        <p className="sideCardMail">adeyinka@metacare.app</p>
      </div>
      <div className="navDiv">
        <ul>
          <li>
            <button>
              <span>
                <IoPeopleOutline className="main-icon" />
                Admin
              </span>
              <IoIosArrowForward />
            </button>
          </li>
          <li>
            <button>
              <span>
                <CgCheckR className="main-icon" />
                Knowledge Base
              </span>
              <IoIosArrowForward />
            </button>
          </li>
          <li>
            <button>
              <span>
                <CgCheckR className="main-icon" />
                Train SAM
              </span>
              <IoIosArrowForward />
            </button>
          </li>
          <li>
            <button>
              <span>
                <IoCalendarClearOutline className="main-icon" />
                Agent Inbox
              </span>
              <IoIosArrowForward />
            </button>
          </li>
          <li>
            <button>
              <span>
                <BiTimeFive className="main-icon" />
                Help Center
              </span>
              <IoIosArrowForward />
            </button>
          </li>
          <li>
            <button className={show ? "active" : null} onClick={handleDrop}>
              <span>
                <RiWechat2Line className="main-icon" />
                Analytics
              </span>
              <IoIosArrowForward />
            </button>
          </li>
          <span className={"dropdown-container " + (!show ? "show" : null)}>
            <button className="active-drop">Teams</button>
            <button>Knowledge Base</button>
            <button>Trainig Base</button>
            <button>Help Center</button>
          </span>
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
