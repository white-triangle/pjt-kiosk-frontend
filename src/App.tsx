import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import AdminMain from './pages/admin'
import AdminDashboard from './pages/admin/dashboard'
import Menu from './pages/admin/menu'
import Table from './pages/admin/table'
import Order from './pages/admin/order'
import OrderDetail from './pages/admin/order/[id]'

function App() {
    // 초기세팅 2025-01-19
    // 브라우저 라우팅 초기세팅 2025-02-25
    return (
        <BrowserRouter>
            {/* 어드민 레이아웃 및 하위 라우트 */}
            <Routes>
                <Route path='/admin' element={<AdminMain />}>
                    <Route path='dashboard' element={<AdminDashboard />} />
                    <Route path='menu' element={<Menu />} />
                    <Route path='table' element={<Table />} />
                    <Route path='order' element={<Order />} />
                    <Route path='order/:id' element={<OrderDetail />} />

                    {/* 어드민 내 기본 경로는 대시보드로 리다이렉트 */}
                    <Route
                        index
                        element={<Navigate to='/admin/dashboard' replace />}
                    />
                </Route>

                {/* 404 페이지 또는 존재하지 않는 경로 처리 */}
                <Route
                    path='*'
                    element={<Navigate to='/admin/dashboard' replace />}
                />
            </Routes>
        </BrowserRouter>
    )
}

export default App
