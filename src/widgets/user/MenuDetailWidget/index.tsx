import './style/MenuDetailWidget.scss'
import MenuDetailCard from './ui/MenuDetailCard'
import MenuDetailHeader from './ui/MenuDetailHeader'
import MenuDetailImg from './ui/MenuDetailImg'

export default function MenuDetailWidget() {
    return (
        <>
            <MenuDetailHeader/>
            <MenuDetailImg/>
            <MenuDetailCard/>
        </>
    )
}
