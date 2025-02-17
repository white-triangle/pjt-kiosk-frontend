import React, { useRef } from 'react';
import '../style/MenuCategory.scss';

const categories: string[] = [
    '음료',
    '디저트',
    '메인 요리',
    '샐러드',
    '스프',
    '사이드',
    '사이드2',
    '사이드3',
    '사이드4',
    '사이드5',
];

export default function MenuCategory() {
    const carouselRef = useRef<HTMLDivElement | null>(null);
    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    const handleMouseDown = (e: React.MouseEvent) => {
        isDown = true;
        carouselRef.current!.classList.add('active');
        startX = e.pageX - (carouselRef.current!.offsetLeft);
        scrollLeft = carouselRef.current!.scrollLeft;
    };

    const handleMouseLeave = () => {
        isDown = false;
        carouselRef.current!.classList.remove('active');
    };

    const handleMouseUp = () => {
        isDown = false;
        carouselRef.current!.classList.remove('active');
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - (carouselRef.current!.offsetLeft);
        const walk = (x - startX) * 2; //
        carouselRef.current!.scrollLeft = scrollLeft - walk;
    };

    return (
        <div
            className="mb-3 carousel whitespace-nowrap overflow-x-hidden flex select-none"
            ref={carouselRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
        >
            {categories.map((category, index) => (
                <div key={index} className='category-item'>
                    {category}
                </div>
            ))}
        </div>
    );
}
