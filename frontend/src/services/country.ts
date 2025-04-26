import { type CountryType } from '../types/CountryType'
import { type RegionType } from '../types/RegionsType'

export const getRegionCountry = async (nameCountry: RegionType): Promise<CountryType[]> => {
  const res = await fetch(`https://restcountries.com/v3.1/region/${nameCountry}`)
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return await res.json()
}

export const getAllCountry = async (): Promise<CountryType[]> => {
  const res = await fetch('https://restcountries.com/v3.1/all')
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return await res.json()
}
