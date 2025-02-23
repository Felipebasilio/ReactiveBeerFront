import "./UserAvatar.scss";
import UserProfileImg from "@assets/user-profile-image.jpg";

const UserAvatar = () => {
  return (
    <a href="" className="user-avatar">
      <img src={UserProfileImg} alt="" />
    </a>
  );
};

export default UserAvatar;
