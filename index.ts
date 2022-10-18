import { createContentApi } from './sdk.server'

const content = createContentApi()
content.getBasicPage('/about-us-1')
