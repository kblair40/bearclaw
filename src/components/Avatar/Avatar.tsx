import { useRef, useContext } from "react";

import camera from "../../assets/camera.svg";
import { FormContext } from "../../store/FormContext";

const Avatar = () => {
  const { avatarImage, onChangeAvatarImage } = useContext(FormContext);

  const imageInputRef = useRef<HTMLInputElement>(null);

  const handleClickCamera = () => {
    if (imageInputRef.current) {
      imageInputRef.current.click();
    }
  };

  return (
    <div className="avatar">
      <div className="avatar__img-container">
        <img alt="Avatar Image" src={avatarImage} />
      </div>

      <button
        type="button"
        className="camera-button"
        onClick={handleClickCamera}
      >
        <img src={camera} alt="Camera Icon" />
      </button>

      <input
        type="file"
        accept=".jpg, .jpeg, .png, 'gif"
        ref={imageInputRef}
        onChange={onChangeAvatarImage}
        hidden
      />
    </div>
  );
};

export default Avatar;
