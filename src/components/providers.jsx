'use client'

import { LanguageProvider } from '@/context/language'

export default function Providers({ children }) {
    return (
        <LanguageProvider>
            {children}
        </LanguageProvider>
    )
}
