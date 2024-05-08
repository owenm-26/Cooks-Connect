import CustomHeader from "../../layout/Header";
import { useRef, useState } from "react";
import { InputText } from "primereact/inputtext";
import "./Profile.css";
import avatar from "../../assets/avatar.png";
import CustomFooter from "../../layout/Footer";

const Profile = (className, src, alt) => {
  const inputRef = useRef(null);
  const [image, setImage] = useState("");

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleOnError = () => {
    console.error("Error");
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setImage("");
  };

  return (
    <>
      <>
        <CustomHeader />
        <h1>User Profile</h1>
      </>
      <div className="profile_img text-center p-4">
        <div className="flex flex-column justify-content-center align-items-center">
          <img
            className={"defaultClass ${className}"}
            src={avatar}
            alt={alt}
            onError={handleOnError}
          />

          <InputText
            type="file"
            accept="/image/*"
            onChange={(event) => {
              const file = event.target.files[0];
              if (file && file.type.substring(0, 5) === "image") {
                setImage(file);
              } else {
                setImage(null);
              }
            }}
          />

          <div onClick={handleImageClick}>{image}</div>
        </div>
        <h2>Account Name</h2>
        <h2>User's Recipes</h2>
      </div>
      <div style={{ position: "absolute", bottom: 0, width: "100%" }}>
        <CustomFooter />
      </div>
    </>
  );
};

export default Profile;
