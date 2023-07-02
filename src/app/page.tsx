'use client'
import { Header } from '@/components/Header'
import { Module } from '@/components/Module'
import { Player } from '@/components/Player'
import { useAppDispatch, useAppSelector } from '@/store'
import { loadCourse } from '@/store/slices/player'
import { MessageCircle } from 'lucide-react'
import { useEffect } from 'react'

export default function Home() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(loadCourse())
  }, [])
  const modules = useAppSelector((state) => state.player.course?.modules)

  return (
    <div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center">
      <div className="flex w-[1100px] flex-col gap-6">
        <div className="flex items-center justify-between">
          {/* Header */}
          <Header />
          <button className="flex items-center gap-2 rounded bg-violet-500 px-3 py-2 text-sm font-medium text-white hover:bg-violet-600">
            <MessageCircle className="w-4 h-4" />
            Deixar Feedback
          </button>
        </div>

        <main
          className="relative flex overflow-hidden rounded-lg pr-80 
        border border-zinc-800 bg-zinc-900 shadow"
        >
          <div className="flex-1">
            {/* Component Player */}
            <Player />
          </div>
          <aside className="w-80 overflow-y-scroll absolute top-0 right-0 bottom-0 border-l divide-y-2 divide-zinc-900 border-zinc-800 bg-zinc-900 scrollbar scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-900">
            {modules &&
              modules.map((module, index) => {
                return (
                  <Module
                    key={index}
                    moduleIndex={index}
                    title={module.title}
                    amountOfLessons={module.lessons.length}
                  />
                )
              })}
          </aside>
        </main>
      </div>
    </div>
  )
}
