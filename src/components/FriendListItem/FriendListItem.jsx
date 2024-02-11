import css from "./FriendListItem.module.css";
import clsx from "clsx";
export const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusStyles = clsx(isOnline ? css.onlineStyles : css.offlineStyles);
  return (
    <div className={css.listContainer}>
      <img className={css.image} src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p className={statusStyles}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
};
