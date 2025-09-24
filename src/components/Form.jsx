import Input from "./Input";
import Preview from "./Preview";
import styles from "../css/form.module.css";
import { useState } from "react";

export default function Form() {
  const [userInfo, setUserInfo] = useState(null);
  const [edit, setEdit] = useState(false);

  function getUserData(formData) {
    const data = Object.fromEntries(formData);
    setUserInfo(data);
  }
  // console.log(userInfo);

  function handleEdits() {
    setEdit((prevEdit) => !prevEdit);
  }
  return (
    <>
      <form action={getUserData}>
        <div className="input-info">
          <h1 className="form-head">General Information</h1>
          <Input
            label="Full Name"
            name="fullName"
            defaultValue={edit && userInfo ? userInfo.fullName : null}
            id="FullName"
            placeholder="John Doe"
            type="text"
          />
          <Input
            label="Email"
            name="email"
            defaultValue={edit && userInfo ? userInfo.email : null}
            id="email"
            placeholder="john.doe@example.com"
            type="text"
          />
          <Input
            label="Phone Number"
            name="phone"
            defaultValue={edit && userInfo ? userInfo.phone : null}
            id="phone"
            placeholder="(123) 456-7890"
            type="text"
          />
          <Input
            label="Address"
            name="address"
            defaultValue={edit && userInfo ? userInfo.address : null}
            id="address"
            placeholder="123 Main St, Anytown, USA"
            type="text"
          />
          <hr />
        </div>
        <div className="input-info">
          <h2 className="form-head">Educational Experience</h2>
          <Input
            label="Institution Name"
            name="institutionName"
            defaultValue={edit && userInfo ? userInfo.institutionName : null}
            id="institutionName"
            placeholder="University of Ghana"
            type="text"
          />
          <Input
            label="Degree"
            name="degree"
            defaultValue={edit && userInfo ? userInfo.degree : null}
            id="degree"
            placeholder="B.S. in Computer Science"
            type="text"
          />
          <Input
            label="Major"
            name="major"
            defaultValue={edit && userInfo ? userInfo.major : null}
            id="major"
            placeholder="Software Engineering"
            type="text"
          />
          <Input
            label="Start Date"
            name="startSchoolDate"
            defaultValue={edit && userInfo ? userInfo.startSchoolDate : null}
            id="startSchoolDate"
            placeholder=""
            type="date"
          />
          <Input
            label="End Date"
            name="endSchoolDate"
            defaultValue={edit && userInfo ? userInfo.endSchoolDate : null}
            id="startSchoolDate"
            placeholder=""
            type="date"
          />
          <hr />
        </div>

        <div className="input-info">
          <h3 className="form-head">Practical Experience</h3>
          <Input
            label="Company Name"
            name="companyName"
            defaultValue={edit && userInfo ? userInfo.companyName : null}
            id="companyName"
            placeholder="Tech Solutions Inc"
            type="text"
          />
          <Input
            label="Job Title"
            name="jobTitle"
            defaultValue={edit && userInfo ? userInfo.jobTitle : null}
            id="jobTitle"
            placeholder="Frontend Developer"
            type="text"
          />
          <Input
            label="Start Date"
            name="startWorkDate"
            defaultValue={edit && userInfo ? userInfo.startWorkDate : null}
            id="startWorkDate"
            placeholder=""
            type="date"
          />
          <Input
            label="End Date"
            name="endWorkDate"
            defaultValue={edit && userInfo ? userInfo.endWorkDate : null}
            id="endWorkDate"
            placeholder=""
            type="date"
          />
          <Input
            label="Job Description"
            name="jobDescription"
            defaultValue={edit && userInfo ? userInfo.jobDescription : null}
            id="jobDescription"
            placeholder="Describe your responsibilites and achievements"
            type="textarea"
          />
          <hr />
        </div>
        <div className="buttons">
          <button className="edit" type="button" onClick={handleEdits}>
            Edit
          </button>
          <button className="submit" type="submit">
            Submit
          </button>
        </div>
      </form>
      <Preview userInfo={userInfo} />
    </>
  );
}
