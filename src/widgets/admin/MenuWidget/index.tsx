import MenuFilter from './ui/MenuFilter'
import MenuHeader from './ui/MenuHeader'
import MenuStatus from './ui/MenuStatus'
import MenuSearch from './ui/MenuSearch'
import MenuList from './ui/MenuList'

export default function MenuWidget() {
    return (
        <>
            <MenuHeader />
            <MenuStatus />
            <div className='flex justify-between'>
                <MenuFilter />
                <MenuSearch />
            </div>
            <MenuList />
        </>
    )
}
