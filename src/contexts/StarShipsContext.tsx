/* eslint-disable no-await-in-loop */
import React, { ReactNode, createContext, useState } from 'react'

type StarShipsType = {
  name: string
  MGLT: string
  consumables: string
}

type StarShipsContextType = {
  fetchData: () => void
  data: StarShipsType[]
  loading: boolean
}

type StarShipsContextProviderProps = {
  children: ReactNode
}

export const StarShipsContext = createContext({} as StarShipsContextType)

export function StarShipsContextProvider({ children }: StarShipsContextProviderProps) {
  const [data, setData] = useState<StarShipsType[]>([])
  const [loading, setLoading] = useState(false)

  function convertToMinutes(consumables: string) {
    const toNumber = consumables.split(' ')
    switch (toNumber[1]) {
      case 'hours':
        return Number(toNumber[0]) * 60
      case 'day':
      case 'days':
        return parseInt(toNumber[0], 10) * 24
      case 'week':
      case 'weeks':
        return parseInt(toNumber[0], 10) * 168
      case 'month':
      case 'months':
        return parseInt(toNumber[0], 10) * 730
      case 'year':
      case 'years':
        return parseInt(toNumber[0], 10) * 8760
      default:
        return toNumber[0]
    }
  }

  async function fetchData() {
    const results = []
    let url = 'https://swapi.dev/api/starships/'
    setLoading(true)
    do {
      const res = await fetch(url)
      const dataRes = await res.json()
      url = dataRes.next
      results.push(...dataRes.results)
    } while (url)

    const res = results.map((element: StarShipsType) => ({
      ...element,
      MGLT: element.MGLT === 'unknown' ? '0' : element.MGLT,
      consumables:
        element.consumables === 'unknown' ? '0' : String(convertToMinutes(element.consumables)),
    }))

    setData(res)
    setLoading(false)
  }

  return (
    <StarShipsContext.Provider
      value={{
        fetchData,
        data,
        loading,
      }}
    >
      {children}
    </StarShipsContext.Provider>
  )
}
