import css from './FriendList.module.css';
import FriendListItem from "./FriendListItem"

    
    const FriendList = ({friends}) => {
      return (
          <div className={css.wrap}>              
            <ul className={css.list}> 
                
                {
                  friends.map((friend) => {
                      return (
                          <li className={css.item} key={friend.id}>
                          <FriendListItem      
                              avatar={friend.avatar}
                              name={friend.name}
                              isOnline={friend.isOnline}
                              />
                          </li>
                      )
                  })
              }
                    
            </ul>
        </div>
      )
    }
    
    export default FriendList
    
