import './SideNavigationBar.scss'
import { NavLink } from 'react-router-dom'
import { FaHouse } from 'react-icons/fa6'
import { FaChair } from 'react-icons/fa6'
import { PiForkKnifeBold } from 'react-icons/pi'
import { CgMenuBoxed } from 'react-icons/cg'
import { BsGraphUpArrow } from 'react-icons/bs'

export default function SideNavigationBar() {
    return (
        <div className='side-nav__container'>
            <div className='side-nav__logo'>로고hi</div>
            <ul className='side-nav__list'>
                <li className='side-nav__item'>
                    <NavLink
                        to='/admin/dashboard'
                        className={({ isActive }) =>
                            isActive
                                ? 'side-nav__link side-nav__link--active'
                                : 'side-nav__link'
                        }>
                        <div className='icon'>
                            <FaHouse />
                        </div>
                        <div className='text'>대시보드</div>
                    </NavLink>
                </li>
                <li className='side-nav__item'>
                    <NavLink
                        to='/admin/order'
                        className={({ isActive }) =>
                            isActive
                                ? 'side-nav__link side-nav__link--active'
                                : 'side-nav__link'
                        }>
                        <div className='icon'>
                            <PiForkKnifeBold />
                        </div>
                        <div className='text'>주문 관리</div>
                    </NavLink>
                </li>
                <li className='side-nav__item'>
                    <NavLink
                        to='/admin/menu'
                        className={({ isActive }) =>
                            isActive
                                ? 'side-nav__link side-nav__link--active'
                                : 'side-nav__link'
                        }>
                        <div className='icon'>
                            <CgMenuBoxed />
                        </div>
                        <div className='text'>메뉴 관리</div>
                    </NavLink>
                </li>
                <li className='side-nav__item'>
                    <NavLink
                        to='/admin/table'
                        className={({ isActive }) =>
                            isActive
                                ? 'side-nav__link side-nav__link--active'
                                : 'side-nav__link'
                        }>
                        <div className='icon'>
                            <FaChair />
                        </div>
                        <div className='text'>테이블 관리</div>
                    </NavLink>
                </li>
                <li className='side-nav__item'>
                    <NavLink
                        to='/admin/sales'
                        className={({ isActive }) =>
                            isActive
                                ? 'side-nav__link side-nav__link--active'
                                : 'side-nav__link'
                        }>
                        <div className='icon'>
                            <BsGraphUpArrow />
                        </div>
                        <div className='text'>매출 관리</div>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}
