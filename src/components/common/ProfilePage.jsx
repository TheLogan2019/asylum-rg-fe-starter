import { useAuth0 } from '@auth0/auth0-react';

function ProfilePage() {
  const { user } = useAuth0();
  const { picture, email } = user;

  const displayName = email.split('@')[0];

  return (
    <div className="profileInfo">
      <img src={picture} alt="Profile Pic" />
      <h2>{displayName}</h2>
      <p>{email}</p>
    </div>
  );
}

export default ProfilePage;
