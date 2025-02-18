import '@/widgets/admin/TableWidget/style/TableWidget.scss'

export default function TableListHeader() {
    return (
        <div className='table-list-header'>
            <div className='table-list-header__item table-list-header__id'>
                테이블번호
            </div>
            <div className='table-list-header__item table-list-header__capacity'>
                수용인원
            </div>
            <div className='table-list-header__item table-list-header__status'>
                상태
            </div>
            <div className='table-list-header__item table-list-header__actions'>
                관리
            </div>
        </div>
    )
}
