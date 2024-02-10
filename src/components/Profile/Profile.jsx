import css from "./Profile.module.css";
export const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.container}>
      <div className={css.mainInformation}>
        <img src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p>{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={css.tagList}>
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
