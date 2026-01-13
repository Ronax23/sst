import { useState, useRef, useEffect } from 'react'

function LazyImage({ src, alt, className, style, ...props }) {
    const [isLoaded, setIsLoaded] = useState(false)
    const [isInView, setIsInView] = useState(false)
    const imgRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true)
                    observer.disconnect()
                }
            },
            { 
                rootMargin: '50px' // Start loading 50px before image enters viewport
            }
        )

        if (imgRef.current) {
            observer.observe(imgRef.current)
        }

        return () => {
            observer.disconnect()
        }
    }, [])

    return (
        <>
            {isInView ? (
                <img
                    ref={imgRef}
                    src={src}
                    alt={alt}
                    className={className}
                    style={{
                        ...style,
                        opacity: isLoaded ? 1 : 0,
                        transition: 'opacity 0.3s ease-in-out'
                    }}
                    onLoad={() => setIsLoaded(true)}
                    {...props}
                />
            ) : (
                <div 
                    ref={imgRef}
                    className={className}
                    style={{
                        ...style,
                        backgroundColor: '#f0f0f0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minHeight: style?.height || '200px'
                    }}
                >
                    <div className="spinner-border spinner-border-sm text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}
        </>
    )
}

export default LazyImage
