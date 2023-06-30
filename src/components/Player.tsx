import ReactPlayer from 'react-player'

export function Player() {
  return (
    <div className="w-full bg-zinc-950 aspect-video">
      <ReactPlayer
        width="100%"
        height="100%"
        controls
        url="https://youtube.com/watch?v=Jai8w6K_GnY"
      />
    </div>
  )
}
