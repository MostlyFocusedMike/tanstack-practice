import { UserDataType } from "../pages/UserProfilePage";
import { formatDate, getAge } from "../utils";

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

  return <div>
    <h1>{firstName} {lastName}</h1>
    <p>Last updated at {updatedAt && formatDate(updatedAt)}</p>
    <p>Age: {birthday && getAge(birthday)} </p>
    <p>Location: {location}</p>
    <p>Favorite Disney Character: {faveCharacter}</p>
    <p>Favorite Disney Ride: {faveRide}</p>
    <p>Favorite Disney Movie: {faveMovie}</p>
    <p>Favorite Disneyland: {favePark}</p>
    <button onClick={handleShowForm}>Edit Profile</button>
  </div>
}