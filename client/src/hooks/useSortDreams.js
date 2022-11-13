import { useState, useMemo } from 'react'

export const useSortByName = (dreams = []) => {
  const [isDescSortByName, setIsDescSortByName] = useState(false)

  const sortedByName = useMemo(() => {
    const sortableByName = [...dreams]
    sortableByName.sort((a, b) => {
      if (a.name.toUpperCase() < b.name.toUpperCase()) return isDescSortByName ? 1 : -1
      if (a.name.toUpperCase() > b.name.toUpperCase()) return isDescSortByName ? -1 : 1
      return 0
    })

    return sortableByName
  }, [isDescSortByName, dreams])

  return {
    sortedByName,
    isDescSortByName,
    setIsDescSortByName,
  }
}

export const useSortByPrice = (dreams = []) => {
  const [isDescSortByPrice, setIsDescSortByPrice] = useState(false)

  const sortedByPrice = useMemo(() => {
    const sortableByPrice = [...dreams]
    sortableByPrice.sort((a, b) => {
      if (+a.price < +b.price) return isDescSortByPrice ? 1 : -1
      if (+a.price > +b.price) return isDescSortByPrice ? -1 : 1
      return 0
    })

    return sortableByPrice
  }, [isDescSortByPrice, dreams])

  return {
    sortedByPrice,
    isDescSortByPrice,
    setIsDescSortByPrice,
  }
}

export const useSortByTime = (dreams = []) => {
  const [isDescSortByTime, setIsDescSortByTime] = useState(false)

  const sortedByTime = useMemo(() => {
    const sortableByTime = [...dreams]
    sortableByTime.sort((a, b) => {
      if (new Date(a.finalTime) < new Date(b.finalTime)) return isDescSortByTime ? 1 : -1
      if (new Date(a.finalTime) > new Date(b.finalTime)) return isDescSortByTime ? -1 : 1
      return 0
    })

    return sortableByTime
  }, [isDescSortByTime, dreams])

  return {
    sortedByTime,
    isDescSortByTime,
    setIsDescSortByTime,
  }
}

export const useSearchDream = (dreams = []) => {
  const searchDream = e => {
    const searchedDreams = [...dreams].filter(dream => {
      return `${dream.name}`.toLowerCase().includes(e.target.value.toLowerCase())
    })
    return searchedDreams
  }
  return {
    searchDream,
  }
}
