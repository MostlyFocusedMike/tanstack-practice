import { FormEvent } from "react";
import { UserDataType } from "../../pages/UserProfilePage"
import Cookies from 'js-cookie';
import StateSelector from "../util-components/StateSelector";
import ParkSelector from "../util-components/ParkSelector";
type Props = {
  userData: UserDataType;
  handleShowForm: () => void;
}

export default function UpdateProfileForm(props: Props) {
  const {
    userData: {
      firstName,
      lastName,
      birthday,
      city,
      faveCharacter,
      faveRide,
      faveMovie,
    },
    handleShowForm
  } = props;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement
    const formVals: UserDataType = Object.fromEntries(new FormData(form));

    Cookies.set('updatedAt', (new Date()).toString());
    Cookies.set('firstName', formVals.firstName || '');
    Cookies.set('lastName', formVals.lastName || '');
    Cookies.set('birthday', formVals.birthday || '');
    Cookies.set('city', formVals.city || '');
    Cookies.set('state', formVals.state || '');
    Cookies.set('faveCharacter', formVals.faveCharacter || '');
    Cookies.set('faveRide', formVals.faveRide || '');
    Cookies.set('faveMovie', formVals.faveMovie || '');
    Cookies.set('favePark', formVals.favePark || '');

    handleShowForm();
  }

  return <>
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <label htmlFor="first-name">First name:</label>
          <input type="text" id='first-name' name="firstName" defaultValue={firstName} required/>
        </div>
        <div>
          <label htmlFor="last-name">Last name:</label>
          <input type="text" id='last-name' name="lastName" defaultValue={lastName} required/>
        </div>
      </div>

      <div>
        <label htmlFor="birthday">birthday:</label>
        <input
          type="text"
          id="birthday"
          name="birthday"
          defaultValue={birthday}
          placeholder="mm/dd/yyyy"
          pattern="[0-9]{1,2}/[0-9]{1,2}/[0-9]{4}"
          title="Please enter your birthday in the mm/dd/yyyy format"
        />
      </div>

      <div>
        <div>
          <label htmlFor="city">City:</label>
          <input type="text" id="city" name="city" defaultValue={city} />
        </div>
        <div>
          <label htmlFor="state">State:</label>
          <StateSelector id="state" name='state' />
        </div>
      </div>

      <div>
        <label htmlFor="fave-char">Favorite Disney Character:</label>
        <input type="text" id="fave-char" name="faveCharacter" defaultValue={faveCharacter} />
      </div>


      <div>
        <label htmlFor="fave-ride">Favorite Disney Ride:</label>
        <input type="text" id="fave-ride" name="faveRide" defaultValue={faveRide} />
      </div>


      <div>
        <label htmlFor="fave-movie">Favorite Disney Movie:</label>
        <input type="text" id="fave-movie" name="faveMovie" defaultValue={faveMovie} />
      </div>


      <div>
        <label htmlFor="fave-park">Favorite Disneyland</label>
        <ParkSelector id="fave-park" />
      </div>

      <button>UpdateForm</button>
      <button type="button" onClick={handleShowForm}>Cancel</button>
    </form>
  </>
}