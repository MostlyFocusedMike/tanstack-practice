import { useState, useEffect } from 'react';
import Cookies from 'js-cookie'
import ProfileDetails from '../components/ProfileDetails';
import UpdateProfileForm from '../components/UpdateProfileForm';

export type UserDataType = {
  firstName?: string;
  lastName?: string;
  updatedAt?: string;
  age?: string;
  city?: string;
  state?: string;
  faveCharacter?: string;
  faveRide?: string;
  faveMovie?: string;
  favePark?: string;
};

export default function UserProfilePage() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [userData, setUserData] = useState({})

  useEffect(() => {
    setUserData({
      firstName: Cookies.get('firstName'),
      lastName: Cookies.get('lastName'),
      updatedAt: Cookies.get('updatedAt'),
      age: Cookies.get('age'),
      city: Cookies.get('city'),
      state: Cookies.get('state'),
      faveCharacter: Cookies.get('faveCharacter'),
      faveRide: Cookies.get('faveRide'),
      faveMovie: Cookies.get('faveMovie'),
      favePark: Cookies.get('favePark'),
    })
  }, [isFormVisible]);

  const handleShowForm = () => setIsFormVisible((prev) => !prev);

  return <section aria-labelledby='profile-heading'>
    <h1 id="profile-heading">User Profile page</h1>
    {
      isFormVisible
        ? <UpdateProfileForm userData={userData} handleShowForm={handleShowForm} />
        : <ProfileDetails userData={userData} handleShowForm={handleShowForm}/>
    }
  </section>
}