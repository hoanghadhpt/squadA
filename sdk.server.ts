
import { ContentApi } from './base.server'
import { GraphqlContentApi } from './graphql.server'


export function createContentApi(): ContentApi {
      return new GraphqlContentApi('master') as ContentApi
}
