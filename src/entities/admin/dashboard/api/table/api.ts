import axios from 'axios'
import {
    Table,
    TableListResponse,
    TableStatus,
} from '../../model/types/tableTypes'

export const fetchTableList = async (): Promise<TableListResponse> => {
    const { data } = await axios.get<TableListResponse>(
        `/api/admin/dashboard/tables`
    )
    return data
}

export const fetchTableDetail = async (id: string): Promise<Table> => {
    const { data } = await axios.get<Table>(`/api/tables/${id}`)
    return data
}

export const updateTableStatus = async ({
    id,
    status,
}: {
    id: string
    status: TableStatus
}): Promise<Table> => {
    const { data } = await axios.patch<Table>(`/api/tables/${id}/status`, {
        status,
    })
    return data
}
