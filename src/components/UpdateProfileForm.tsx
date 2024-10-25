import { FormEvent } from "react";
import { UserDataType } from "../pages/UserProfilePage"
import Cookies from 'js-cookie';

type Props = {
  userData: UserDataType;
  handleShowForm: () => void;
}

export default function UpdateProfileForm(props: Props) {
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
    handleShowForm
  } = props;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement

    Cookies.set('firstName', form.firstName.value);
    Cookies.set('lastName', form.lastName.value);
    Cookies.set('birthday', form.birthday.value);
    Cookies.set('city', form.city.value);
    Cookies.set('state', form.state.value);
    Cookies.set('faveCharacter', form.faveCharacter.value);
    Cookies.set('faveRide', form.faveRide.value);
    Cookies.set('faveMovie', form.faveMovie.value);
    Cookies.set('favePark', form.favePark.value);

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
          <input type="text" id="state" name="state" defaultValue={state} />
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
        <input type="text" id="fave-park" name="favePark" defaultValue={favePark} />
      </div>

      <button>UpdateForm</button>
      <button type="button" onClick={handleShowForm}>Cancel</button>
    </form>
  </>
}