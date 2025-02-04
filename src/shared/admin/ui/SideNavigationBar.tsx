import './SideNavigationBar.scss'

export default function SideNavigationBar() {
    return (
        <div className='side-nav__container'>
            <div className='side-nav__logo'>로고hi</div>
            <ul className='side-nav__list'>
                <li className='side-nav__item'>
                    <div className='icon'>hi</div>
                    <div className='text'>대시보드</div>
                </li>
                <li className='side-nav__item'>
                    <div className='icon'>hi</div>
                    <div className='text'>주문 관리</div>
                </li>
                <li className='side-nav__item'>
                    <div className='icon'>hi</div>
                    <div className='text'>메뉴 관리</div>
                </li>
                <li className='side-nav__item'>
                    <div className='icon'>hi</div>
                    <div className='text'>테이블 관리</div>
                </li>
                <li className='side-nav__item'>
                    <div className='icon'>hi</div>
                    <div className='text'>매출 관리</div>
                </li>
            </ul>
        </div>
    )
}
