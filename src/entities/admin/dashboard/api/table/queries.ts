import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { fetchTableList, fetchTableDetail, updateTableStatus } from './api'

/**
 * 테이블 목록 조회 훅
 * @param status 필터링할 테이블 상태 (optional)
 */
export const useTableList = () => {
    return useQuery({
        queryKey: ['tables'],
        queryFn: () => fetchTableList(),
        staleTime: 1000 * 60, // 1분 동안 캐시 데이터 유지
        refetchInterval: 30000, // 30초마다 자동 갱신 (실시간성 확보)
    })
}

/**
 * 단일 테이블 상세 정보 조회 훅
 */
export const useTableDetail = (id: string) => {
    return useQuery({
        queryKey: ['table', id],
        queryFn: () => fetchTableDetail(id),
        enabled: !!id, // id가 존재할 때만 쿼리 활성화
        staleTime: 1000 * 60, // 1분 동안 캐시 데이터 유지
    })
}

/**
 * 테이블 상태 변경 훅
 */
export const useUpdateTableStatus = () => {
    // 전역 QueryClient 인스턴스 사용
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: updateTableStatus,
        // 성공 시 관련 쿼리 무효화하여 데이터 갱신
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ queryKey: ['tables'] })
            queryClient.invalidateQueries({ queryKey: ['table', variables.id] })
        },
    })
}
