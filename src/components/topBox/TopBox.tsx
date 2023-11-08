import "./tobBox.scss"
import {topDealUsers} from '../../data.ts'
const TopBox = () => {
  return (
    <div className='topBox'>
     <h1>Top Deals</h1>
     <div className="List">
        {topDealUsers.map(user=>(
            <div className="ListItem"key={user.id}>
                <div className="user">
                    <img src={user.img} alt="" />
                    <div className="userTexts">
                        <span className="username">{user.username}</span>
                        <span className="email">{user.email}</span>
                    </div>
                </div>
                <span className="amount">${user.amount}</span>
            </div>
        ))}
     </div>
    </div>
  )
}

export default TopBox
