import css from "./FriendListItem.module.css";
import clsx from "clsx";
export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.listContainer}>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
};
