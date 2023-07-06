import { type CountryType } from '../types/CountryType'

export const fetchRegionCountry = async (nameCountry: string): Promise<CountryType[]> => {
  return await fetch(`https://restcountries.com/v3.1/region/${nameCountry}`)
    .then(async data => await data.json())
    .then(data => data)
}

export const fetchAllCountry = async (): Promise<CountryType[]> => {
  return await fetch('https://restcountries.com/v3.1/all')
    .then(async data => await data.json())
    .then(data => data)
}

export const REGIONS = {
  europe: 'europe',
  asia: 'asia',
  oceania: 'oceania',
  africa: 'africa',
  america: 'america'
}
