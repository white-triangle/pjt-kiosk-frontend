import { QueryClient, QueryCache, MutationCache } from '@tanstack/react-query'
import { AxiosError } from 'axios'

// 에러 핸들링 함수
const handleError = (error: unknown) => {
    // Axios 에러인 경우
    if (error instanceof AxiosError) {
        const status = error.response?.status

        // 특정 상태 코드에 따른 처리
        if (status === 401) {
            console.error('인증 오류가 발생했습니다.')
        } else if (status === 403) {
            console.error('권한이 없습니다.')
        } else if (status === 404) {
            console.error('요청한 리소스를 찾을 수 없습니다.')
        } else if (status === 500) {
            console.error('서버 오류가 발생했습니다.')
        } else {
            console.error(`API 오류: ${error.message}`)
        }
    } else {
        // 기타 에러
        console.error('알 수 없는 오류가 발생했습니다.', error)
    }
}

// QueryClient 인스턴스 생성
export const queryClient = new QueryClient({
    queryCache: new QueryCache({
        onError: handleError,
    }),
    mutationCache: new MutationCache({
        onError: handleError,
    }),
    defaultOptions: {
        queries: {
            staleTime: 5 * 60 * 1000, // 5분
            gcTime: 10 * 60 * 1000, // 10분 (이전의 cacheTime)
            retry: (failureCount, error) => {
                // 특정 에러(401, 404)는 재시도하지 않음
                if (error instanceof AxiosError) {
                    const status = error.response?.status
                    if (status === 401 || status === 404) {
                        return false
                    }
                }
                // 최대 3번까지 재시도
                return failureCount < 3
            },
            retryDelay: (attemptIndex) =>
                Math.min(1000 * 2 ** attemptIndex, 30000), // 지수 백오프
            refetchOnWindowFocus: import.meta.env.PROD, // 프로덕션에서만 활성화
        },
        mutations: {
            retry: false, // 변경 작업은 재시도하지 않음
        },
    },
})

export default queryClient
