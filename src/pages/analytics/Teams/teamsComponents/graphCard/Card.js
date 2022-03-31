import { BsCalendar4 } from "react-icons/bs";
import "./cards.css";
import "../../../../../../node_modules/react-vis/dist/style.css";
import {
  XYPlot,
  LineSeries,
  HorizontalGridLines,
  XAxis,
  YAxis,
} from "react-vis";
const data = [
  { x: "Jan", y: 1 },
  { x: "Feb", y: 10 },
  { x: "Mar", y: 33 },
  { x: "", y: 50 },
  { x: "Apr", y: 33 },
  { x: "May", y: 20 },
  { x: "Jun", y: 30 },
  { x: "Jul", y: 41 },
  { x: "Aug", y: 33 },
];
const width = window.innerWidth - 870;
console.log(width);

const Card = ({ name, color, cardName }) => {
  return (
    <div className="cards-container">
      <div className="card-overview">
        <section className="graph-Container">
          <div className="card-header">
            <span>
              <h1 className="card-title">{name}</h1>
              <p className="trackRating">+4.14</p>
            </span>
            <span>
              <span className="priority">
                <p className="colorCard" style={{ backgroundColor: color }}></p>{" "}
                High Priority
              </span>
              <p className="dividerCard"></p>
              <button className="calendarButton">
                This Month <BsCalendar4 />
              </button>
            </span>
          </div>
          {/* graph here */}
          <div>
            <XYPlot
              height={220}
              width={width}
              xType="ordinal"
              className="graph"
            >
              <HorizontalGridLines />
              <XAxis />
              <YAxis />
              <LineSeries data={data} color={color} />
            </XYPlot>
          </div>
        </section>
        <section>
          <div className="sideCard">
            <p className="card-name">{cardName}</p>
            <h1>30 Mins</h1>
          </div>
          <div className="sideCard">
            <p className="card-name">Response Time</p>
            <h1>1 Hour 30 Mins</h1>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Card;
