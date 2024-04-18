import "./dummy.css";
import teamMemberImage from './aadil.jpg'; 
import teamMemberImage2 from './narayana.jpg';
import teamMemberImage3 from './bharath.jpg';
import { Link, useNavigate } from "react-router-dom";
export function Dummy() {
  const navigate = useNavigate();
  return (
    <>
      <div className="demo">AID CONNECT</div>
      <div className="demo1">The Emergency Assistance</div>
      <div className="para">
        <h1>ABOUT THIS APPLICATION</h1>
        <p>This application is developed by K.Aadil Ali , M.Lakshmi Narayana , S.Bharath Kumar from CHAITANYA BHARATHI INSTITUTE OF TECHNOLOGY, PRODDATUR. <br />
          This application is used to get the information about the nearest Hospitals, Police Stations and Fire Stations. <br />
          It also allows the user to contact or send message to the nearest helpline services(like Hospitals, Police Stations and Fire Stations).
          <br />
          User can also check the hospitals specializations and their main workings. <br />
          User can send message to the helpline services through the Email and can get the response back in actions. <br />
          User should need to register and login with their email credentials. <br />
          The user can also give the feedback with comments that can be useful to the other users of the applications.
          </p>
      </div>
      <div className="team-members">
          <div className="team-member">
          <img src={teamMemberImage} alt="Aadil" />
            <h4>K. Aadil Ali</h4>
            <p>Roll No: 202P1A0562 <br />
            Java FullStack Developer</p>
          </div>
          <div className="team-member">
          <img src={teamMemberImage2} alt="narayana" />
            <h4>M. Lakshmi Narayana</h4>
            <p>Roll No: 202P1A0580 <br />
            Java FullStack Developer</p>
          </div>
          <div className="team-member">
          <img src={teamMemberImage3} alt="Bharath" />
            <h4>S. Bharath Kumar</h4>
            <p>Roll No: 202P1A05B4 <br />
            Java FullStack Developer</p>
          </div>
        </div>
      <button
        className="ald btn btn-danger"
        type="button"
        onClick={() => {  
          navigate("/home");
        }}
      >
      NEXT  
      </button>
    </>
  );
}
