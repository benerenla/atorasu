import { FC, useEffect, useState } from 'react'
import { FaSpotify } from 'react-icons/fa'
import { appContext } from '@libs/context'

export const SpotifyCard: FC = () => {
  const lanyard = appContext()
  if (!lanyard?.spotify) {
    return (
      <>
        <p>Not Listening to anything</p>
      </>
    )
  }

  return (
    <div className="flex h-16 w-80 items-center rounded">
      <FaSpotify className="h-10 w-10 text-green-500" />
      <h1 className="px-2 text-center">
        {lanyard.spotify.artist} - {lanyard.spotify.song}
      </h1>
    </div>
  )
}
