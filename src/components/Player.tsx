/* eslint-disable prettier/prettier */
import { useAppSelector } from '@/store'
import { next } from '@/store/slices/player'
import ReactPlayer from 'react-player'
import { useDispatch } from 'react-redux'

export function Player() {
  const dispatch = useDispatch()

  const lesson = useAppSelector((state) => {
    const { currentModuleIndex, currentLessonIndex } = state.player



    const currentLesson =
      state.player.course.modules[currentModuleIndex].lessons[
      currentLessonIndex
      ]

    return currentLesson
  })

  function handlePlayNext() {
    dispatch(next())
  }

  return (
    <div className="w-full bg-zinc-950 aspect-video">
      <ReactPlayer
        width="100%"
        height="100%"
        controls
        onEnded={handlePlayNext}
        url={`https://youtube.com/watch?v=${lesson.id}`}
      />
    </div>
  )
}
