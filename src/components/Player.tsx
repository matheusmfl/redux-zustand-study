/* eslint-disable prettier/prettier */
import { useAppSelector } from '@/store'
import ReactPlayer from 'react-player'

export function Player() {
  const lesson = useAppSelector((state) => {
    const { currentModuleIndex, currentLessonIndex } = state.player

    const currentLesson =
      state.player.course.modules[currentModuleIndex].lessons[
      currentLessonIndex
      ]

    return currentLesson
  })

  return (
    <div className="w-full bg-zinc-950 aspect-video">
      <ReactPlayer
        width="100%"
        height="100%"
        controls
        url={`https://youtube.com/watch?v=${lesson.id}`}
      />
    </div>
  )
}
