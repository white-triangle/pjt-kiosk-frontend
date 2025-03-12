import { useState, useEffect, useCallback } from 'react'

interface UseScrollProgressOptions {
    containerSelector: string
    debug?: boolean
}

export const useScrollProgress = ({
    containerSelector,
    debug = false,
}: UseScrollProgressOptions) => {
    const [scrollPercentage, setScrollPercentage] = useState(0)

    const calculateScrollPercentage = useCallback((element: HTMLElement) => {
        const { scrollTop, scrollHeight, clientHeight } = element

        if (scrollHeight <= clientHeight) {
            return 0
        }

        return Math.min(
            Math.max(
                Math.round((scrollTop / (scrollHeight - clientHeight)) * 100),
                0
            ),
            100
        )
    }, [])

    const handleScroll = useCallback(
        (contentEl: HTMLElement) => {
            const percentage = calculateScrollPercentage(contentEl)
            setScrollPercentage(percentage)

            if (debug) {
                console.log('스크롤 진행률:', {
                    percentage,
                    scrollTop: contentEl.scrollTop,
                    scrollHeight: contentEl.scrollHeight,
                    clientHeight: contentEl.clientHeight,
                })
            }
        },
        [calculateScrollPercentage, debug]
    )

    useEffect(() => {
        const contentEl = document.querySelector(
            containerSelector
        ) as HTMLElement
        if (!contentEl) {
            console.warn(
                `useScrollProgress: '${containerSelector}' 요소를 찾을 수 없습니다.`
            )
            return
        }

        handleScroll(contentEl)

        const scrollListener = () => handleScroll(contentEl)
        contentEl.addEventListener('scroll', scrollListener)

        const resizeListener = () => handleScroll(contentEl)
        window.addEventListener('resize', resizeListener)

        return () => {
            contentEl.removeEventListener('scroll', scrollListener)
            window.removeEventListener('resize', resizeListener)
        }
    }, [containerSelector, handleScroll])

    return { scrollPercentage }
}
