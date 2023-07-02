/* eslint-disable prettier/prettier */

import { useAppSelector } from '@/store'
import { useCurrentLesson } from '@/store/slices/player'

export function Header() {
  const isCourseLoading = useAppSelector(state => state.player.isLoading)
  const { currentLesson, currentModule } = useCurrentLesson()

  if (isCourseLoading) {
    return (
      <h1 className="text-2xl font-bold">Carregando ....</h1>
    )
  }

  return (
    <>
      <header className="flex flex-col gap-1 ">
        <h1 className="text-2xl font-bold">{currentLesson?.title}</h1>
        <span className="text-sm text-zinc-400">
          Módulo {currentModule?.title}
        </span>
      </header>
    </>
  )
}
