import Link from 'next/link'
import {useRouter} from 'next/router'

const BottomTabs = () => {

    const router = useRouter()

    const isActive = r => {
        if(r === router.pathname){
          return ""
        }
        else{
            return "text-gray-500"
        }
    }

    return (
        <nav className="fixed bottom-0 z-40 py-4 shadow bg-white w-full">
            <ul className="flex items-center justify-evenly">
                <li className={`flex-1 px-2 ${isActive('/')}`}>
                    <Link href="/">
                        <div className="text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            <span className="text-xs">Home</span>
                        </div>
                    </Link>
                </li>
                <li className={`flex-1 px-2 ${isActive('/client')}`}>
                    <Link href="/client">
                        <div className="text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                            </svg>
                            <span className="text-xs">Clients</span>
                        </div>
                    </Link>
                </li>
                <li className={`flex-1 px-2 ${isActive('/invoice')}`}>
                    <Link href="/invoice">
                        <div className="text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                            </svg>
                            <span className="text-xs">Invoice</span>
                        </div>
                    </Link>
                </li>
                <li className={`flex-1 px-2 ${isActive('/transaction')}`}>
                    <Link href="/transaction">
                        <div className="text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                            <span className="text-xs">Transactions</span>
                        </div>
                    </Link>
                </li>
                <li className={`flex-1 px-2 ${isActive('/profile')}`}>
                    <Link href="/profile">
                        <div className="text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            <span className="text-xs">Profile</span>
                        </div>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default BottomTabs
