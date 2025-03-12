import {
    useInfiniteQuery,
    useQuery,
    useMutation,
    useQueryClient,
} from '@tanstack/react-query'
import { OrderStatus } from '../../model/types/orderTypes'
import { fetchOrderList, fetchOrderDetail, updateOrderStatus } from './api'

export const useOrderList = (
    limit: number = 10,
    status: OrderStatus | null = null
) => {
    return useInfiniteQuery({
        queryKey: ['orders', { status, limit }],
        queryFn: ({ pageParam }) => {
            return fetchOrderList({
                cursor: pageParam as string | null,
                limit,
                status,
            })
        },
        getNextPageParam: (lastPage) => lastPage.nextCursor,
        initialPageParam: null as string | null,
        staleTime: 1000 * 60,
        refetchInterval: 30000,
    })
}

export const useOrderDetail = (id: string) => {
    return useQuery({
        queryKey: ['order', id],
        queryFn: () => fetchOrderDetail(id),
        enabled: !!id,
        staleTime: 1000 * 60,
    })
}

export const useUpdateOrderStatus = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: updateOrderStatus,
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ queryKey: ['orders'] })
            queryClient.invalidateQueries({ queryKey: ['order', variables.id] })
        },
    })
}
