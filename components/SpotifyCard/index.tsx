import { FC, useEffect, useState } from 'react'
import { FaSpotify } from 'react-icons/fa'
import { useLanyard } from 'react-use-lanyard'

export const SpotifyCard: FC = () => {
  const status = useLanyard({
    userId: '760499240966684683',
  })

  const getSpotifyData = () => {
    switch (status?.spotify) {
      default:
        return {
          name: status?.spotify?.song,
          creator: status?.spotify?.artist,
        }
    }
  }

  return (
    <div className="flex h-16 w-80 items-center rounded">
      <FaSpotify className="h-10 w-10 text-green-500" />
      <h1 className="px-2 text-center">
        {getSpotifyData().name + ' - ' + getSpotifyData().creator}{' '}
      </h1>
    </div>
  )
}
