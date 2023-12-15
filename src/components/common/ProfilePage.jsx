import { useAuth0 } from '@auth0/auth0-react';

function ProfilePage() {
  const { user } = useAuth0();
  const { picture, email } = user;

  const displayName =
    email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1);

  //removes the @example.com part of the email and capitalizes the first letter of the remaining piece.

  return (
    <div className="profileInfo">
      <img src={picture} alt="Profile Pic" />
      <h2>{displayName}</h2>
      <p>{email}</p>
    </div>
  );
}

export default ProfilePage;
