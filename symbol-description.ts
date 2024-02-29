/* eslint symbol-description: "error" */
import { Feature } from './sort-keys'
export const feature = Symbol()
export interface Featured {
    [feature]: () => Feature
}
export function getFeatures(featureds: Featured[]) {
    return featureds.map(f => f[feature]())
}
export { combineFeatures } from './sort-keys'