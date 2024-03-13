import './Profile.css';

const Profile = (props) => {
    return (
       <div className="container">
  <div>
    <img className='avatar'
      src={props.image}
      width={200}
      alt="User avatar"
    />
    <p className='username'>{props.name}</p>
    <p className='userData'>@{props.tag}</p>
    <p className='userData'>{props.location}</p>
  </div>

  <ul className='infoList'>
    <li className='infoItem'>
      <span>Followers </span>
      <span className='infoNumbers'>{props.stats.followers}</span>
    </li>
    <li className='infoItem'>
      <span>Views </span>
      <span className='infoNumbers'>{props.stats.views}</span>
    </li>
    <li className='infoItem'>
      <span>Likes </span>
      <span className='infoNumbers'>{props.stats.likes}</span>
    </li>
  </ul>
</div>
    )
}

export default Profile;