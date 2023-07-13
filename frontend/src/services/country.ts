import { type CountryType } from '../types/CountryType'
import { type RegionType } from '../types/RegionsType'

export const getRegionCountry = async (nameCountry: RegionType): Promise<CountryType[]> => {
  return await fetch(`https://restcountries.com/v3.1/region/${nameCountry}`)
    .then(async data => await data.json())
    .then(data => data)
}

export const getAllCountry = async (): Promise<CountryType[]> => {
  return await fetch('https://restcountries.com/v3.1/all')
    .then(async data => await data.json())
    .then(data => data)
}
