import { useOrderList, OrderSelectors } from '@/entities/admin/dashboard'

export const useOrderStatistics = () => {
    const { data, isLoading, isError } = useOrderList(100, null)

    const orders = OrderSelectors.getAllOrdersFromResponse(data)
    const statusCount = OrderSelectors.getOrderCountByStatus(orders)

    return {
        counts: {
            processing: statusCount.processing,
            completed: statusCount.completed,
            total: statusCount.total,
        },
        isLoading,
        isError,
    }
}
