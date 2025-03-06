import { useEffect } from 'react'
import { TableTab } from '../tab'
import { TableListContainer } from '../item'
import { TablePaginationContainer } from '../pagination'
import useTableStore from '@/shared/admin/store/dashboard/tableStore'
import '@/features/admin/dashboard/table/style/TableList.scss'

export default function TableContainer() {
    // Zustand 스토어에서 상태와 액션을 가져옵니다
    const { activeStatus, handleStatusChange, closeTableDetail } =
        useTableStore()

    // ESC 키로 모달 닫기
    useEffect(() => {
        const handleKeyDown = (e: globalThis.KeyboardEvent) => {
            if (e.key === 'Escape') {
                closeTableDetail()
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [closeTableDetail])

    return (
        <div className='table-container'>
            <TableTab
                activeStatus={activeStatus}
                onStatusChange={handleStatusChange}
            />

            <TableListContainer />

            <div className='pagination-wrapper'>
                <TablePaginationContainer />
            </div>
        </div>
    )
}
