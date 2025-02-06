import './HeaderNavigationBar.scss'
import Logo from './logo.svg'

export default function HeaderNavigationBar() {
    return (
        <div className='header-navigationbar flex items-center justify-between pl-2 pr-2'>
            <div className='main-logo'>
                <img src={Logo} alt='logo' height='52' width='52'></img>
            </div>
            <div className='table-info flex items-center'>
                <span>Table</span>
                <div className='ml-2 flex items-center justify-center'>5</div>
            </div>
        </div>
    )
}
