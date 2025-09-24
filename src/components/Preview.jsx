import "../css/App.css";

export default function Preview({ userInfo }) {
  return (
    <>
      <div className="preview">
        {userInfo ? (
          <div>
            <div className="general-information">
              <h1 className="heading">CV Preview</h1>
              <h2>{userInfo.fullName}</h2>
              <h3>
                {userInfo.email} | {userInfo.phone} | {userInfo.address}
              </h3>
              <hr />
            </div>
            <div className="education">
              <h4 className="section">Education</h4>
              <h5 className="details">{userInfo.institutionName}</h5>
              <p>
                {userInfo.degree}, {userInfo.major}
              </p>
              <p>
                {userInfo.startSchoolDate} - {userInfo.endSchoolDate}
              </p>
              <hr />
            </div>
            <div className="experience">
              <h6 className="section">Experience</h6>
              <h6 className="details">
                {userInfo.companyName}, - {userInfo.jobTitle}
              </h6>
              <small className="small">
                {userInfo.startWorkDate} and {userInfo.endWorkDate}
              </small>
              <p className="description">{userInfo.jobDescription}</p>
            </div>
          </div>
        ) : (
          <h6 className="fill-form">
            Fill out the form and submit to view your details.
          </h6>
        )}
      </div>
    </>
  );
}
