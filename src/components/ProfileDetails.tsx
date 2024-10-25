import { UserDataType } from "../pages/UserProfilePage";
import { getAge } from "../utils";

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

  return <div>
    <h1>{firstName} {lastName}</h1>
    <p>Last updated at {updatedAt}</p>
    <p>Age: {birthday && getAge(birthday)} </p>
    <p>Location: {city} {state}</p>
    <p>Favorite Disney Character: {faveCharacter}</p>
    <p>Favorite Disney Ride: {faveRide}</p>
    <p>Favorite Disney Movie: {faveMovie}</p>
    <p>Favorite Disneyland: {favePark}</p>
    <button onClick={handleShowForm}>Edit Profile</button>
  </div>
}