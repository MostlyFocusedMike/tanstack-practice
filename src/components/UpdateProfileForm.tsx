import { UserDataType } from "../pages/UserProfilePage"

type Props = {
  userData: UserDataType;
  handleShowForm: () => void;
}

export default function UpdateProfileForm(props: Props) {
  const { userData, handleShowForm } = props;
  return <>
    <form>

      <button>UpdateForm</button>
      <button type="button" onClick={handleShowForm}>Cancel</button>
    </form>
  </>
}