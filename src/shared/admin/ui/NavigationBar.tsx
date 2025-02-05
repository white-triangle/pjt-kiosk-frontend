import './NavigationBar.scss'

export default function NavigationBar() {
    return (
        <nav className='navigation-bar flex w-full flex-row-reverse'>
            {/* 네비게이션 내용 */}
            <div className='flex w-56 h-16 items-center gap-2'>
                {/* 조건: 로그인 후,해당 태그 랜더링 */}
                <div>img</div>
                {/* 조건: 로그인 후,해당 태그 랜더링 */}
                <div>관리자</div>
                {/* 조건: 로그인 후,해당 태그 로그아웃으로 텍스트 변경 */}
                <button className='text-white bg-black rounded px-1 py-1 w-20 h-9'>
                    로그인
                </button>
            </div>
        </nav>
    )
}
