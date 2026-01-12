import StatCounter from "./Statcounter";
import "./Stat.css";



const Stats = () => {
  return (
    <div className="container">
      <div className="stat-image-content">


        <div className="who-stats">
          <div className="stat">
            <StatCounter end={300} />
            <span>Projects Finished</span>
          </div>

          <div className="stat">
            <StatCounter end={300} />
            <span>Happy Clients</span>
          </div>

          <div className="stat">
            <StatCounter end={15} suffix="" />
            <span>Years of Experience</span>
          </div>


        </div>
      
      </div>
    </div>
  );
};

export default Stats;
