import css from "./Profile.module.css";
export const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.container}>
      <div className={css.mainInformation}>
        <img src={image} className={css.image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.tagText}>@{tag}</p>
        <p className={css.locationText}>{location}</p>
      </div>

      <ul className={css.statsList}>
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
