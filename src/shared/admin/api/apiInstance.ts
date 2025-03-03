import axios, { AxiosError, AxiosRequestConfig } from 'axios'

// API 기본 설정
const API_BASE_URL = '/api'
const API_TIMEOUT = 30000 // 30초

// axios 인스턴스 생성
export const apiInstance = axios.create({
    baseURL: API_BASE_URL,
    timeout: API_TIMEOUT,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
})

// 요청 인터셉터: 요청 전에 실행됨
apiInstance.interceptors.request.use(
    (config) => {
        // 로컬 스토리지에서 토큰 가져오기
        const token = localStorage.getItem('admin_token')

        // 토큰이 있으면 헤더에 추가
        if (token && config.headers) {
            config.headers['Authorization'] = `Bearer ${token}`
        }

        return config
    },
    (error) => Promise.reject(error)
)

// 응답 인터셉터: 응답 후에 실행됨
apiInstance.interceptors.response.use(
    (response) => response, // 정상 응답 처리
    (error: AxiosError) => {
        // 에러 응답 처리
        if (error.response) {
            // 서버가 응답을 반환한 경우
            const { status } = error.response

            // 401 에러: 인증 실패
            if (status === 401) {
                // 토큰 제거 및 로그인 페이지로 리다이렉트 로직
                localStorage.removeItem('admin_token')
                // window.location.href = '/admin/login';
            }

            // 특정 에러에 대한 추가 처리
            // ...
        } else if (error.request) {
            // 요청은 보냈지만 응답을 받지 못한 경우 (네트워크 에러 등)
            console.error('Network error:', error.message)
        } else {
            // 요청 설정 과정에서 발생한 에러
            console.error('Request error:', error.message)
        }

        return Promise.reject(error)
    }
)

// 기본 공통 요청 함수
export const api = {
    get: <T>(url: string, config?: AxiosRequestConfig) =>
        apiInstance.get<T>(url, config).then((response) => response.data),

    post: <T>(url: string, data?: any, config?: AxiosRequestConfig) =>
        apiInstance
            .post<T>(url, data, config)
            .then((response) => response.data),

    put: <T>(url: string, data?: any, config?: AxiosRequestConfig) =>
        apiInstance.put<T>(url, data, config).then((response) => response.data),

    delete: <T>(url: string, config?: AxiosRequestConfig) =>
        apiInstance.delete<T>(url, config).then((response) => response.data),

    patch: <T>(url: string, data?: any, config?: AxiosRequestConfig) =>
        apiInstance
            .patch<T>(url, data, config)
            .then((response) => response.data),
}

export default api
