import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import './index.css'
import App from './App.tsx'
import { queryClient } from './shared/admin/lib'

// MSW 가져오기 (개발 환경에서만)
if (import.meta.env.DEV) {
    // 동적 임포트로 MSW 가져오기
    import('./mocks')
}

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <App />
            {/* 개발 환경에서만 React Query DevTools 표시 */}
            {import.meta.env.DEV && (
                <ReactQueryDevtools initialIsOpen={false} />
            )}
        </QueryClientProvider>
    </StrictMode>
)
