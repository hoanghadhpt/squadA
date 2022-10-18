import {
  GetBasicPageQuery,
  GetContentFormatListQuery,
  GetContributorQuery,
  GetDocumentListQuery,
  GetEventListQuery,
  GetGoogleNewsPageQuery,
  GetHomepageModuleIdsQuery,
  GetKeywordListQuery,
  GetLayoutQuery,
  GetModuleByIds1Query,
  GetModuleByIds2Query,
  GetModuleByIds3Query,
  GetModuleByIds4Query,
  GetPageContentQuery,
  GetPodcastListQuery,
  GetRssPageQuery,
  GetSearchFilterOptionsQuery,
  GetSearchResultQuery,
  GetSearchResultQueryVariables,
  GetSingleEventListQuery,
  GetSlideshowListQuery,
  GetTopicListQuery,
  GetVideoListQuery,
  GetWebinarListQuery,
} from './contentDomain.generated'

export abstract class ContentApi {
  abstract getModuleByIds1: (
    contentCardIds: string[],
    contentSpotLighhtIds: string[],
  ) => Promise<GetModuleByIds1Query>
  abstract getModuleByIds2: (
    featuredIds: string[],
    newsletterPromoIds: string[],
    sectionPromoV2Ids: string[],
  ) => Promise<GetModuleByIds2Query>
  abstract getModuleByIds3: (
    sectionPromoIds: string[],
    latestContent: string[],
  ) => Promise<GetModuleByIds3Query>
  abstract getModuleByIds4: (
    eventPromoIds: string[],
    threeColumnHighlightIds: string[],
  ) => Promise<GetModuleByIds4Query>
  abstract getHomepageModuleIds: () => Promise<GetHomepageModuleIdsQuery>
  abstract getHomepageModules: () => Promise<any>
  abstract getLayout: () => Promise<GetLayoutQuery>
  abstract getPageContent: (url: string) => Promise<GetPageContentQuery>
  abstract getTopic: (url: string, page: number) => Promise<GetTopicListQuery>
  abstract getSingleEvent: (url: string) => Promise<GetSingleEventListQuery>
  abstract getEvents: (page: number) => Promise<GetEventListQuery>
  abstract getKeywords: (
    url: string,
    page: number,
  ) => Promise<GetKeywordListQuery>
  abstract getContributor: (
    url: string,
    page: number,
  ) => Promise<GetContributorQuery>
  abstract getContentFormat: (
    url: string,
    page?: number,
  ) => Promise<GetContentFormatListQuery>
  abstract getWebinars: (page: number) => Promise<GetWebinarListQuery>
  abstract getPodcasts: (page: number) => Promise<GetPodcastListQuery>
  abstract getDocuments: (page: number) => Promise<GetDocumentListQuery>
  abstract getVideos: (page: number) => Promise<GetVideoListQuery>
  abstract getSlideshows: (page: number) => Promise<GetSlideshowListQuery>
  abstract getGoogleNews: (page: number) => Promise<GetGoogleNewsPageQuery>
  abstract getSearchFilterOptions: () => Promise<GetSearchFilterOptionsQuery>
  abstract getSearchResult: (
    props: GetSearchResultQueryVariables,
  ) => Promise<GetSearchResultQuery>
  abstract getBasicPage: (url: string) => Promise<GetBasicPageQuery>


  abstract getSidebarModules: () => Promise<any>
}
