import '@/shared/admin/styles/List.scss'
import '@/widgets/admin/MenuWidget/style/MenuListHeader.scss'

export default function MenuListHeader() {
    // 메뉴 항목: 이미지, 메뉴명, 카테고리, 가격, 상태, 관리(수정,삭제 로고)
    return (
        <div className='menu-list-header'>
            <div className='menu-list-header__item menu-list-header__image'>
                이미지
            </div>
            <div className='menu-list-header__item menu-list-header__name'>
                메뉴명
            </div>
            <div className='menu-list-header__item menu-list-header__category'>
                카테고리
            </div>
            <div className='menu-list-header__item menu-list-header__price'>
                가격
            </div>
            <div className='menu-list-header__item menu-list-header__status'>
                상태
            </div>
            <div className='menu-list-header__item menu-list-header__actions'>
                관리
            </div>
        </div>
    )
}
