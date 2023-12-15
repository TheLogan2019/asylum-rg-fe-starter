import { useAuth0 } from '@auth0/auth0-react';

function ProfilePage() {
  const { user } = useAuth0();
  const { name, picture, email } = user;

  return (
    <div>
      <img src={picture} alt="Profile Pic" />
      <h2>{name}</h2>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

export default ProfilePage;
