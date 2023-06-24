'use client'

import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

export function ShareForm() {
    const router = useRouter()
    const [code, setCode] = useState<string>('')
    
    const goToShare = useCallback(() => {
        router.push(`share/${code}`)
    }, [router, code])

    return (
        <form 
        className="w-full lg:w-auto bg-white/20 border-2 border-white/30 lg:mx-auto p-1.5 rounded-2xl"
        onSubmit={() => goToShare() }>
        <div className="w-full lg:flex lg:items-center">
            <div className="shrink">
            <input
                className="block w-full p-3 text-white bg-transparent border border-transparent appearance-none focus:border-slate-500 focus:outline-none focus:ring-slate-500 placeholder:text-slate-300 rounded-xl sm:text-sm"
                placeholder="Código"
                onChange={(e) => setCode(e.target.value)}
            />
            </div>
            <button
            className="w-full lg:w-auto 0 active:bg-slate-600 active:text-white/80 before:transition-colors bg-white flex-none font-medium hover:bg-indigo-900 hover:text-white inline-flex justify-center lg:ml-4 outline-2 outline-offset-2 px-6 py-2.5 relative rounded-xl text-indigo-500"
            type="submit"
            >
            <span>Acessar</span>
            </button>
        </div>
        </form>
    );
}
