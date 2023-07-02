/* eslint-disable prettier/prettier */
import { useAppDispatch } from '@/store'
import { next, useCurrentLesson } from '@/store/slices/player'
import ReactPlayer from 'react-player'


export function Player() {
  const dispatch = useAppDispatch()

  const { currentLesson } = useCurrentLesson()

  function handlePlayNext() {
    dispatch(next())
  }

  if (!currentLesson) {
    return null
  }

  return (
    <div className="w-full bg-zinc-950 aspect-video">
      <ReactPlayer
        width="100%"
        height="100%"
        controls
        onEnded={handlePlayNext}
        url={`https://youtube.com/watch?v=${currentLesson.id}`}
      />
    </div>
  )
}
