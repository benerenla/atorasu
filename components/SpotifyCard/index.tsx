import { FC, useEffect, useState } from 'react'
import { FaSpotify } from 'react-icons/fa'
import { useLanyard } from 'react-use-lanyard'

export const SpotifyCard: FC = () => {
  const { loading, status } = useLanyard({
    userId: '760499240966684683',
    socket: true,
  })

  const getSpotifyData = () => {
    console.log(status, loading)
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
        {!loading && getSpotifyData().name + ' - ' + getSpotifyData().creator}{' '}
      </h1>
    </div>
  )
}
