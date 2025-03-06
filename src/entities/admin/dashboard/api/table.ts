import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { Table, TableListResponse } from '../model/types/tableTypes'

/**
 * 테이블 목록 조회 API
 */
export const fetchTableList = async (): Promise<TableListResponse> => {
    const response = await axios.get<TableListResponse>(
        `/api/admin/dashboard/tables`
    )

    return response.data
}

/**
 * 개별 테이블 조회 API
 */
export const fetchTableById = async (id: number): Promise<Table> => {
    const response = await axios.get<Table>(`/api/admin/dashboard/tables/${id}`)
    return response.data
}

/**
 * 테이블 목록 조회 React Query Hook
 */
export const useTableList = () => {
    return useQuery<TableListResponse, Error>({
        queryKey: ['tables'],
        queryFn: () => fetchTableList(),
    })
}

/**
 * 개별 테이블 조회 React Query Hook
 */
export const useTableById = (id: number | null) => {
    return useQuery<Table, Error>({
        queryKey: ['table', id],
        queryFn: () => fetchTableById(id as number),
        enabled: id !== null,
    })
}
