import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import UserCart from './pages/user/cart'
import UserDetail from './pages/user/detail'
import UserHistory from './pages/user/history'
import UserOrder from './pages/user/order'
import UserMain from './pages/user/UserMain'

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='' element={<UserMain />}>
                        <Route path='order' element={<UserOrder />} />
                        <Route path='detail/:id' element={<UserDetail />} />
                        <Route path='cart' element={<UserCart />} />
                        <Route path='history' element={<UserHistory />} />

                        <Route
                            index
                            element={<Navigate to='/order' replace />}
                        />
                    </Route>

                    <Route
                        path='*'
                        element={<Navigate to='/order' replace />}
                    />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
