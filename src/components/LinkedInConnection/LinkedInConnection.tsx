import linkedinIcon from "../../assets/linkedin.svg";

type Props = {
  connectionActive: boolean;
};

const LinkedInConnection = ({ connectionActive }: Props) => {
  return (
    <div className="linkedin-connection">
      <button type="button">
        <img src={linkedinIcon} alt="LinkedIn Logo" />
        <p>PROFILE CONNECTED</p>
      </button>

      {!connectionActive && <p>Re-Connect LinkedIn Profile</p>}
    </div>
  );
};

export default LinkedInConnection;
