import { UserDataType } from "../../pages/UserProfilePage";
import { formatDate, getAge } from "../../utils";
import styles from './styles.module.css';
import styleUtils from '../../utils.module.css';

type ProfileDetailsProps = {
  userData: UserDataType;
  handleShowForm: () => void;
}

export default function ProfileDetails(props: ProfileDetailsProps) {
  const {
    userData: {
      firstName,
      lastName,
      updatedAt,
      birthday,
      city,
      state,
      faveCharacter,
      faveRide,
      faveMovie,
      favePark,
    },
    handleShowForm,
  } = props;

  const location = (city && state)
    ? `${city}, ${state}`
    : `${city || ''} ${state || ''}`;

  return <div className={styles.profileDetails}>
    <h1>{firstName} {lastName}</h1>
    <p>Last updated at {updatedAt && formatDate(updatedAt)}</p>
    <p>Age: {birthday && getAge(birthday)} </p>
    <p>Location: {location}</p>
    <p>Favorite Disney Character: {faveCharacter}</p>
    <p>Favorite Disney Ride: {faveRide}</p>
    <p>Favorite Disney Movie: {faveMovie}</p>
    <p>Favorite Disneyland: {favePark}</p>
    <button className={styleUtils.mainButton} onClick={handleShowForm}>Edit Profile</button>
  </div>
}