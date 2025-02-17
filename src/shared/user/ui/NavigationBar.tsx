import './NavigationBar.scss'
import '@/pages/user/UserMain.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCartShopping, faClockRotateLeft, faHouse } from "@fortawesome/free-solid-svg-icons";

export default function NavigationBar() {
    return (
        <div className="navigation-bar grid grid-cols-4 gap-4 pl-3 pr-3">
            <div className='selected nav-tab flex flex-col items-center justify-center'>
                <FontAwesomeIcon className='pt-2' icon={faHouse}/>
                <p className='pt-1'>Menu</p>
            </div>
            <div className='nav-tab flex flex-col items-center justify-center'>
                <FontAwesomeIcon className='pt-2' icon={faCartShopping} />
                <p className='pt-1'>Cart</p>
            </div>
            <div className='nav-tab flex flex-col items-center justify-center'>
                <FontAwesomeIcon className='pt-2' icon={faClockRotateLeft} />    
                <p className='pt-1'>History</p>
            </div>    
            <div className='nav-tab flex flex-col items-center justify-center'>
                <FontAwesomeIcon className='pt-2' icon={faBell} />
                <p className='pt-1'>Call Staff</p>
            </div>    
        </div>
    )
}
