// import "./globals.css"
import Image from "next/image";

import { ShareForm } from '../components/ShareForm'

export default function Home() {
  return (
    <section className="flex items-center h-screen hero">
      <div className="relative items-center w-full gap-12 p-8 mx-auto lg:inline-flex lg:p-20 max-w-7xl rounded-3xl">
        <div className="max-w-xl mx-auto text-center">
          <div>
            <span className="inline-flex items-center">
              <span className="px-6 py-2 text-base font-bold text-white uppercase rounded-lg bg-white/10">
                AMBU
              </span>
            </span>
            <p className="mt-8 text-5xl font-extrabold tracking-tight text-white">
              Compartilhamento rápido de exames
            </p>
            <p className="max-w-xl mt-4 text-lg lg:text-xl text-slate-200">
              Acesse o exame utilizando seu código abaixo.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-3 mt-10 sm:flex-row">
            <ShareForm></ShareForm>
          </div>
        </div>
      </div>
    </section>
  );
}
