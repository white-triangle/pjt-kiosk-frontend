import { useCallback, useEffect, useRef, useState } from 'react'

interface UseInfiniteScrollProps {
    fetchNextPage: () => void
    hasNextPage: boolean | undefined
    isFetchingNextPage: boolean
    options?: {
        threshold?: number
        scrollContainerSelector?: string
    }
}

interface UseInfiniteScrollReturn {
    targetRef: React.RefObject<HTMLDivElement>
    containerRef: React.RefObject<HTMLDivElement>
    isLoadingMore: boolean
    scrollPercentage: number
}

export const useInfiniteScroll = ({
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    options = {},
}: UseInfiniteScrollProps): UseInfiniteScrollReturn => {
    const { threshold = 200, scrollContainerSelector } = options

    const containerRef = useRef<HTMLDivElement>(null)

    const targetRef = useRef<HTMLDivElement>(null)

    const [scrollPercentage, setScrollPercentage] = useState(0)

    const lastLoadRef = useRef<number>(0)

    const getScrollContainer = useCallback(() => {
        if (scrollContainerSelector) {
            const container = document.querySelector(
                scrollContainerSelector
            ) as HTMLElement
            if (container) return container
        }

        if (containerRef.current?.parentElement) {
            return containerRef.current.parentElement
        }

        return document.documentElement
    }, [scrollContainerSelector])

    const handleScroll = useCallback(() => {
        const scrollContainer = getScrollContainer()

        if (!scrollContainer) return

        const scrollTop = scrollContainer.scrollTop
        const scrollHeight = scrollContainer.scrollHeight
        const clientHeight = scrollContainer.clientHeight

        if (scrollHeight <= clientHeight) {
            setScrollPercentage(0)
            return
        }

        const percentage = Math.min(
            Math.max(
                Math.round((scrollTop / (scrollHeight - clientHeight)) * 100),
                0
            ),
            100
        )
        setScrollPercentage(percentage)

        const distanceFromBottom = scrollHeight - scrollTop - clientHeight
        const now = Date.now()

        if (
            distanceFromBottom < threshold &&
            hasNextPage &&
            !isFetchingNextPage &&
            now - lastLoadRef.current > 500
        ) {
            lastLoadRef.current = now
            fetchNextPage()
        }
    }, [
        fetchNextPage,
        getScrollContainer,
        hasNextPage,
        isFetchingNextPage,
        threshold,
    ])

    useEffect(() => {
        const scrollContainer = getScrollContainer()

        if (!scrollContainer) return

        handleScroll()

        scrollContainer.addEventListener('scroll', handleScroll)

        return () => {
            scrollContainer.removeEventListener('scroll', handleScroll)
        }
    }, [handleScroll, getScrollContainer])

    useEffect(() => {
        window.addEventListener('resize', handleScroll)
        return () => {
            window.removeEventListener('resize', handleScroll)
        }
    }, [handleScroll])

    useEffect(() => {
        handleScroll()
    }, [hasNextPage, isFetchingNextPage, handleScroll])

    return {
        containerRef,
        targetRef,
        isLoadingMore: isFetchingNextPage,
        scrollPercentage,
    }
}
