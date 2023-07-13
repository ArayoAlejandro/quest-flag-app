interface Regions {
  all: 'all'
  europe: 'europe'
  asia: 'asia'
  africa: 'africa'
  oceania: 'oceania'
  america: 'america'
}

export type RegionType = keyof Regions
