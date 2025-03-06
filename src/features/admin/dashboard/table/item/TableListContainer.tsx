import { useTableData } from '../model'
import useTableStore from '@/shared/admin/store/dashboard/tableStore'
import TableItemList from './TableItemList'

export const TableListContainer = () => {
    const { activeStatus, currentPage, itemsPerPage, handleTableSelect } =
        useTableStore()

    const { tables, isLoading, error } = useTableData(
        activeStatus,
        currentPage,
        itemsPerPage
    )

    return (
        <TableItemList
            tableItems={tables}
            isLoading={isLoading}
            isError={!!error}
            error={error}
            onTableSelect={handleTableSelect}
            activeStatus={activeStatus}
        />
    )
}
