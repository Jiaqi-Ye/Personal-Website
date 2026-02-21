import React from 'react'

const Footer = () => {
    // 回到顶部函数
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="w-full px-[5%] py-12 mt-10 relative font-sans" style={{ fontFamily: 'Arial, sans-serif' }}>
            {/* 横线 */}
            <div className="max-w-[90vw] mx-auto h-px bg-black/10 mb-4"></div>

            {/* 内容区域 */}
            <div className="max-w-[90vw] mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 gap-6">
                {/* 左侧版权文字 */}
                <p className="mb-4 md:mb-0">
                    <a href="https://github.com/Jiaqi-Ye" target="_blank" rel="noopener noreferrer" className="hover:text-black">
                        © 2025 Jiaqi Ye. All rights reserved.
                    </a>
                </p>

                {/* 右侧按钮和文字 */}
                <div className="flex flex-col md:flex-row gap-20 items-center">
                    <span>Terms of Services</span>
                    <span>Privacy Policy</span>
<button
    onClick={scrollToTop}
    className="px-4 py-2 border-2 border-black bg-black text-white rounded-full transition-colors duration-300 hover:bg-white hover:text-black"
>
    Back to Top
</button>


                </div>
            </div>
        </footer>
    )
}

export default Footer
