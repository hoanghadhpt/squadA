import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type AllArticle = {
  __typename?: 'AllArticle';
  items?: Maybe<Array<Article>>;
  meta: Meta;
};

export type AllContentFormat = {
  __typename?: 'AllContentFormat';
  items?: Maybe<Array<ContentFormat>>;
  meta: Meta;
};

export type AllContributor = {
  __typename?: 'AllContributor';
  items?: Maybe<Array<Contributor>>;
  meta: Meta;
};

export type AllCountry = {
  __typename?: 'AllCountry';
  items?: Maybe<Array<Country>>;
  meta: Meta;
};

export type AllDocument = {
  __typename?: 'AllDocument';
  items?: Maybe<Array<Document>>;
  meta: Meta;
};

export type AllElnNewsletter = {
  __typename?: 'AllElnNewsletter';
  items?: Maybe<Array<ElnNewsletter>>;
  meta: Meta;
};

export type AllEvent = {
  __typename?: 'AllEvent';
  items?: Maybe<Array<Event>>;
  meta: Meta;
};

export type AllExternalLink = {
  __typename?: 'AllExternalLink';
  items?: Maybe<Array<ExternalLink>>;
  meta: Meta;
};

export type AllGoogleNewsPage = {
  __typename?: 'AllGoogleNewsPage';
  items?: Maybe<Array<GoogleNewsItem>>;
  meta: Meta;
};

export type AllKeyword = {
  __typename?: 'AllKeyword';
  items?: Maybe<Array<Keyword>>;
  meta: Meta;
};

export type AllLinkListContent = {
  __typename?: 'AllLinkListContent';
  items?: Maybe<Array<SearchContent>>;
  meta: MetaWithEntryLinkList;
};

export type AllMagazine = {
  __typename?: 'AllMagazine';
  items?: Maybe<Array<Magazine>>;
  meta: Meta;
};

export type AllModuleCommodityPricesEntry = {
  __typename?: 'AllModuleCommodityPricesEntry';
  entries: Array<ModuleCommodityPricesEntry>;
  meta: Meta;
};

export type AllModuleContentCardsEntry = {
  __typename?: 'AllModuleContentCardsEntry';
  entries: Array<ModuleContentCardsEntry>;
};

export type AllModuleContentSpotlightEntry = {
  __typename?: 'AllModuleContentSpotlightEntry';
  entries?: Maybe<Array<ModuleContentSpotlight>>;
};

export type AllModuleEventPromoEntry = {
  __typename?: 'AllModuleEventPromoEntry';
  entries?: Maybe<Array<ModuleEventPromo>>;
};

export type AllModuleExternalLinkEntry = {
  __typename?: 'AllModuleExternalLinkEntry';
  entries?: Maybe<Array<ModuleExternalLink>>;
};

export type AllModuleFeaturedEntry = {
  __typename?: 'AllModuleFeaturedEntry';
  entries: Array<AllModuleFeaturedResult>;
};

export type AllModuleFeaturedResult = {
  __typename?: 'AllModuleFeaturedResult';
  featured?: Maybe<Array<FeaturedContent>>;
  latest?: Maybe<Array<FeaturedContent>>;
  meta: MetaWithEntryModuleFeatured;
};

export type AllModuleLatest = {
  __typename?: 'AllModuleLatest';
  items: ItemModuleLatestContent;
  meta: MetaWithModuleLatestContent;
};

export type AllModuleLatestContentEntry = {
  __typename?: 'AllModuleLatestContentEntry';
  entries: Array<AllModuleLatest>;
};

export type AllModuleLinkListEntry = {
  __typename?: 'AllModuleLinkListEntry';
  entries: Array<AllLinkListContent>;
};

export type AllModuleNewsletterPromoEntry = {
  __typename?: 'AllModuleNewsletterPromoEntry';
  entries?: Maybe<Array<ModuleNewsLetterPromo>>;
};

export type AllModuleSectionPromoEntry = {
  __typename?: 'AllModuleSectionPromoEntry';
  entries: Array<AllSectionPromoContent>;
};

export type AllModuleSectionPromoV2Entry = {
  __typename?: 'AllModuleSectionPromoV2Entry';
  entries: Array<AllSectionPromoContentV2>;
};

export type AllModuleThreeColumnHighlightEntry = {
  __typename?: 'AllModuleThreeColumnHighlightEntry';
  entries: Array<ModuleThreeColumnHighlightResult>;
};

export type AllModuleWeatherEntry = {
  __typename?: 'AllModuleWeatherEntry';
  entries: Array<ModuleWeatherEntry>;
  meta: Meta;
};

export type AllPodcast = {
  __typename?: 'AllPodcast';
  items?: Maybe<Array<Podcast>>;
  meta: Meta;
};

export type AllSectionPromoContent = {
  __typename?: 'AllSectionPromoContent';
  items?: Maybe<Array<SearchContent>>;
  meta: MetaWithEntrySectionPromo;
};

export type AllSectionPromoContentV2 = {
  __typename?: 'AllSectionPromoContentV2';
  items?: Maybe<Array<SearchContent>>;
  meta: MetaWithEntrySectionPromoV2;
};

export type AllSlideshow = {
  __typename?: 'AllSlideshow';
  items?: Maybe<Array<Slideshow>>;
  meta: Meta;
};

export type AllSponsor = {
  __typename?: 'AllSponsor';
  items?: Maybe<Array<Sponsor>>;
  meta: Meta;
};

export type AllSubbrand = {
  __typename?: 'AllSubbrand';
  items?: Maybe<Array<Subbrand>>;
  meta: Meta;
};

export type AllTopicPrimary = {
  __typename?: 'AllTopicPrimary';
  items?: Maybe<Array<TopicPrimary>>;
  meta: Meta;
};

export type AllTopicSecondary = {
  __typename?: 'AllTopicSecondary';
  items?: Maybe<Array<TopicSecondary>>;
  meta: Meta;
};

export type AllTopicTertiary = {
  __typename?: 'AllTopicTertiary';
  items?: Maybe<Array<TopicTertiary>>;
  meta: Meta;
};

export type AllVideo = {
  __typename?: 'AllVideo';
  items?: Maybe<Array<Video>>;
  meta: Meta;
};

export type AllWeather = {
  __typename?: 'AllWeather';
  items?: Maybe<Array<Weather>>;
  meta: Meta;
};

export type AllWebinar = {
  __typename?: 'AllWebinar';
  items?: Maybe<Array<Webinar>>;
  meta: Meta;
};

export enum AllowedSponsorshipGatingGroupExternalForm {
  Eloqua = 'Eloqua',
  None = 'None',
  On24 = 'On24',
  Url = 'URL'
}

export type Article = {
  __typename?: 'Article';
  atAGlance: Array<FieldGroupAtAGlance>;
  authoredBy?: Maybe<Scalars['String']>;
  authoredOn?: Maybe<Scalars['String']>;
  body: Scalars['String'];
  bodyJson: Scalars['JSON'];
  buyersJourney?: Maybe<Scalars['String']>;
  contentFormat?: Maybe<Array<ContentFormat>>;
  contentTypeUid: Scalars['String'];
  contributor?: Maybe<Array<Contributor>>;
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  featuredImageGroup?: Maybe<FeaturedImage>;
  keywords?: Maybe<Array<Keyword>>;
  locale?: Maybe<Scalars['String']>;
  mobileHeadline: Scalars['String'];
  newsletterSignUpPromo?: Maybe<NewsletterSignUpPromo>;
  oldUrl?: Maybe<Scalars['String']>;
  publishedDate: Scalars['DateTime'];
  readTime: Scalars['Float'];
  relatedEvents?: Maybe<Array<Event>>;
  relatedInlineContent?: Maybe<Array<RelatedInlineContents>>;
  seo: Seo;
  seriesTaxonomy?: Maybe<Array<SeriesTaxonomy>>;
  sponsorshipGatingGroup?: Maybe<SponsorshipGatingGroup>;
  subbrand?: Maybe<SubBrand>;
  summary: Scalars['String'];
  summaryJson: Scalars['JSON'];
  /** @deprecated Soon will be replaced by topicSelector */
  termSelector: TermSelector;
  title: Scalars['String'];
  topicSelector: TopicSelector;
  uid: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  url: Scalars['String'];
};

export enum AvailableModuleCtUids {
  ModuleCommodityPrices = 'module_commodity_prices',
  ModuleContentCards = 'module_content_cards',
  ModuleContentSpotlight = 'module_content_spotlight',
  ModuleEventPromo = 'module_event_promo',
  ModuleExternalLinks = 'module_external_links',
  ModuleFeatured = 'module_featured',
  ModuleLatestContent = 'module_latest_content',
  ModuleLinkList = 'module_link_list',
  ModuleMagazinePromo = 'module_magazine_promo',
  ModuleNewsletterPromoCta = 'module_newsletter_promo_cta',
  ModuleSectionPromo = 'module_section_promo',
  ModuleSectionPromoV2 = 'module_section_promo_v2',
  ModuleThreeColumnHighlight = 'module_three_column_highlight',
  ModuleWeather = 'module_weather'
}

export enum AvailableRightBlockModuleCtUids {
  ModuleContentCards = 'module_content_cards',
  ModuleContentSpotlight = 'module_content_spotlight',
  ModuleEventPromo = 'module_event_promo',
  ModuleLinkList = 'module_link_list',
  ModuleNewsletterPromoCta = 'module_newsletter_promo_cta'
}

export enum BackgroundColorOptions {
  BrandColor1 = 'brandColor1',
  BrandColor2 = 'brandColor2',
  BrandColor3 = 'brandColor3',
  BrandColor4 = 'brandColor4',
  BrandColor5 = 'brandColor5',
  BrandColor6 = 'brandColor6',
  NoBackground = 'noBackground'
}

export type BackgroundEventPromo = {
  __typename?: 'BackgroundEventPromo';
  backgroundColor?: Maybe<BackgroundColorOptions>;
  backgroundImage?: Maybe<File>;
  backgroundImageAltText?: Maybe<Scalars['String']>;
};

export type BaseModelWithUrl = {
  __typename?: 'BaseModelWithUrl';
  contentTypeUid: Scalars['String'];
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  uid: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  url: Scalars['String'];
};

export type BasicPage = {
  __typename?: 'BasicPage';
  basicPageDisplayOption: Scalars['String'];
  body: Scalars['String'];
  bodyJson: Scalars['JSON'];
  contentTypeUid: Scalars['String'];
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  mobileHeadline: Scalars['String'];
  seo: Seo;
  summary: Scalars['String'];
  summaryJson: Scalars['JSON'];
  title: Scalars['String'];
  uid: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  url: Scalars['String'];
};

export type BasicPageContent = {
  __typename?: 'BasicPageContent';
  content: BasicPage;
};

export type Bids = {
  __typename?: 'Bids';
  basis: Scalars['String'];
  contract: Scalars['String'];
  currency: Scalars['String'];
  date: Scalars['DateTime'];
  deliveryMonth: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['String'];
};

export type BrandLogo = {
  __typename?: 'BrandLogo';
  image?: Maybe<File>;
  imageAltText?: Maybe<Scalars['String']>;
  link?: Maybe<Link>;
  openInNewTab?: Maybe<Scalars['Boolean']>;
};

export type Branding = {
  __typename?: 'Branding';
  color?: Maybe<Scalars['String']>;
  logo?: Maybe<Logo>;
  logoAltText?: Maybe<Scalars['String']>;
  tagline?: Maybe<Scalars['String']>;
  taglineJson: Scalars['JSON'];
};

export type BreadCrumb = {
  __typename?: 'BreadCrumb';
  title: Scalars['String'];
  url: Scalars['String'];
};

export type BusinessUnit = {
  __typename?: 'BusinessUnit';
  logoUrl?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type CashGrainBids = {
  __typename?: 'CashGrainBids';
  bids: Array<Bids>;
  city: Scalars['String'];
  name: Scalars['String'];
  state: Scalars['String'];
};

export type CashGrainBidsPage = {
  __typename?: 'CashGrainBidsPage';
  items?: Maybe<Array<CashGrainBids>>;
  meta: Meta;
};

export type CashGrainBidsPageWhereInput = {
  zipCode: Scalars['String'];
};

export type Content = Article | Document | Podcast | Slideshow | Video | Webinar;

export type ContentFormat = {
  __typename?: 'ContentFormat';
  contentTypeUid: Scalars['String'];
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  pageDescription?: Maybe<Scalars['String']>;
  seo: Seo;
  title: Scalars['String'];
  uid: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ContentFormatPage = {
  __typename?: 'ContentFormatPage';
  items: Array<Content>;
  meta: ContentFormatPageMeta;
};

export type ContentFormatPageMeta = {
  __typename?: 'ContentFormatPageMeta';
  entry?: Maybe<ContentFormat>;
  pagination: PaginationPage;
};

export type ContentFormatWhereInput = {
  uid?: Maybe<Scalars['String']>;
  uidIn?: Maybe<Array<Scalars['String']>>;
  url?: Maybe<Scalars['String']>;
  urlIn?: Maybe<Array<Scalars['String']>>;
};

export type ContentWhereInput = {
  contentFormat?: Maybe<Scalars['String']>;
  contentFormatIn?: Maybe<Array<Scalars['String']>>;
  contentFormatSlug?: Maybe<Scalars['String']>;
  contentFormatSlugIn?: Maybe<Array<Scalars['String']>>;
  contributor?: Maybe<Scalars['String']>;
  contributorIn?: Maybe<Array<Scalars['String']>>;
  contributorSlug?: Maybe<Scalars['String']>;
  contributorSlugIn?: Maybe<Array<Scalars['String']>>;
  keyword?: Maybe<Scalars['String']>;
  keywordIn?: Maybe<Array<Scalars['String']>>;
  keywordSlug?: Maybe<Scalars['String']>;
  keywordSlugIn?: Maybe<Array<Scalars['String']>>;
  publishedDateGte?: Maybe<Scalars['DateTime']>;
  publishedDateLte?: Maybe<Scalars['DateTime']>;
  sponsorContentSetting?: Maybe<SponsorContentSettingInput>;
  topicPrimary?: Maybe<Scalars['String']>;
  topicPrimaryIn?: Maybe<Array<Scalars['String']>>;
  topicSecondary?: Maybe<Scalars['String']>;
  topicSecondaryIn?: Maybe<Array<Scalars['String']>>;
  uid?: Maybe<Scalars['String']>;
  uidIn?: Maybe<Array<Scalars['String']>>;
  url?: Maybe<Scalars['String']>;
  urlIn?: Maybe<Array<Scalars['String']>>;
};

export type Contributor = {
  __typename?: 'Contributor';
  contentTypeUid: Scalars['String'];
  contributorCompanyName?: Maybe<Scalars['String']>;
  contributorDescription?: Maybe<Scalars['String']>;
  contributorDescriptionJson: Scalars['JSON'];
  contributorEmail: ContributorEmail;
  contributorImage?: Maybe<ContributorImage>;
  contributorName: Scalars['String'];
  contributorRole?: Maybe<Scalars['String']>;
  contributorSummary?: Maybe<Scalars['String']>;
  contributorSummaryJson: Scalars['JSON'];
  country?: Maybe<Array<Country>>;
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  memberSince?: Maybe<Scalars['String']>;
  seo: Seo;
  socialLinks: SocialLinks;
  title: Scalars['String'];
  uid: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  userRoles: Array<Scalars['String']>;
};

export type ContributorEmail = {
  __typename?: 'ContributorEmail';
  emailAddress?: Maybe<Scalars['String']>;
  hideEmail?: Maybe<Scalars['Boolean']>;
};

export type ContributorImage = {
  __typename?: 'ContributorImage';
  image?: Maybe<ContributorImageFile>;
  imageAltText?: Maybe<Scalars['String']>;
};

export type ContributorImageFile = {
  __typename?: 'ContributorImageFile';
  url?: Maybe<Scalars['String']>;
};

export type ContributorPage = {
  __typename?: 'ContributorPage';
  items: Array<Content>;
  meta: ContributorPageMeta;
};

export type ContributorPageMeta = {
  __typename?: 'ContributorPageMeta';
  entry?: Maybe<Contributor>;
  pagination: PaginationPage;
};

export type ContributorWhereInput = {
  contributorEmail?: Maybe<Scalars['String']>;
  contributorEmailIn?: Maybe<Array<Scalars['String']>>;
  contributorName?: Maybe<Scalars['String']>;
  contributorNameIn?: Maybe<Array<Scalars['String']>>;
  uid?: Maybe<Scalars['String']>;
  uidIn?: Maybe<Array<Scalars['String']>>;
  url?: Maybe<Scalars['String']>;
  urlIn?: Maybe<Array<Scalars['String']>>;
  userRoles?: Maybe<Array<Scalars['String']>>;
};

export type Copyright = {
  __typename?: 'Copyright';
  businessUnit: BusinessUnit;
  links: Array<SiteLink>;
};

export type CopyrightInformation = {
  __typename?: 'CopyrightInformation';
  copyrightNotice?: Maybe<Scalars['String']>;
  logoImage?: Maybe<File>;
  logoImageAltText?: Maybe<Scalars['String']>;
};

export type Country = {
  __typename?: 'Country';
  alpha2Code: Scalars['String'];
  alpha3Code: Scalars['String'];
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  numeric: Scalars['String'];
  title: Scalars['String'];
  uid: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type CountryWhereInput = {
  uid?: Maybe<Scalars['String']>;
  uidIn?: Maybe<Array<Scalars['String']>>;
};

export type CoverageButton = {
  __typename?: 'CoverageButton';
  text?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type CtaButton = {
  __typename?: 'CtaButton';
  ctaButtonText?: Maybe<Scalars['String']>;
  ctaButtonUrl?: Maybe<Scalars['String']>;
};

export type CtaButtonLink = {
  __typename?: 'CtaButtonLink';
  ctaButtonLink?: Maybe<Scalars['String']>;
  ctaButtonText?: Maybe<Scalars['String']>;
};


export type DisplayOptions = {
  __typename?: 'DisplayOptions';
  darkLightToggle: Scalars['String'];
  textAlignment: Scalars['String'];
  textPosition: Scalars['String'];
};

export type DisplaySettingsArticle = {
  __typename?: 'DisplaySettingsArticle';
  articleTemplate: Scalars['String'];
};

export type DivisionAndLegal = {
  __typename?: 'DivisionAndLegal';
  editableLinks?: Maybe<Array<EditableLinksBase>>;
  sectionType: Scalars['String'];
  title?: Maybe<Scalars['String']>;
};

export type Document = {
  __typename?: 'Document';
  atAGlance: Array<FieldGroupAtAGlance>;
  authoredBy?: Maybe<Scalars['String']>;
  authoredOn?: Maybe<Scalars['String']>;
  body: Scalars['String'];
  bodyJson: Scalars['JSON'];
  contentFormat?: Maybe<Array<ContentFormat>>;
  contentTypeUid: Scalars['String'];
  contributor?: Maybe<Array<Contributor>>;
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  document?: Maybe<FieldGroupDocument>;
  featuredImageGroup?: Maybe<FeaturedImage>;
  keywords?: Maybe<Array<Keyword>>;
  locale?: Maybe<Scalars['String']>;
  mobileHeadline: Scalars['String'];
  newsletterSignUpPromo?: Maybe<NewsletterSignUpPromo>;
  oldUrl?: Maybe<Scalars['String']>;
  publishedDate: Scalars['DateTime'];
  readTime: Scalars['Float'];
  relatedEvents?: Maybe<Array<Event>>;
  relatedInlineContent?: Maybe<Array<RelatedInlineContents>>;
  seo: Seo;
  seriesTaxonomy?: Maybe<Array<SeriesTaxonomy>>;
  sponsorshipGatingGroup?: Maybe<SponsorshipGatingGroup>;
  subbrand?: Maybe<SubBrand>;
  summary: Scalars['String'];
  summaryJson: Scalars['JSON'];
  /** @deprecated Soon will be replaced by topicSelector */
  termSelector: TermSelector;
  title: Scalars['String'];
  topicSelector: TopicSelector;
  uid: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  url: Scalars['String'];
};

export type DynamicRecentContent = {
  __typename?: 'DynamicRecentContent';
  byContentFormat?: Maybe<Array<BaseModelWithUrl>>;
  byContentTypes?: Maybe<Scalars['String']>;
  byKeywords?: Maybe<Array<BaseModelWithUrl>>;
  bySeries?: Maybe<Array<BaseModelWithUrl>>;
  byTopics?: Maybe<Array<BaseModelWithUrl>>;
  dynamicLimit?: Maybe<Scalars['Int']>;
};

export type DynamicRecentContentLinkList = {
  __typename?: 'DynamicRecentContentLinkList';
  byContentTypes?: Maybe<Scalars['String']>;
};

export type DynamicRecentContentThreeColumn = {
  __typename?: 'DynamicRecentContentThreeColumn';
  byContentFormat?: Maybe<Array<BaseModelWithUrl>>;
  byContentTypes?: Maybe<Scalars['String']>;
  byKeywords?: Maybe<Array<BaseModelWithUrl>>;
  bySeries?: Maybe<Array<BaseModelWithUrl>>;
  byTopics?: Maybe<Array<BaseModelWithUrl>>;
};

export type EditableLinks = {
  __typename?: 'EditableLinks';
  image?: Maybe<File>;
  imageAltText?: Maybe<Scalars['String']>;
  link?: Maybe<Link>;
  openInNewTab?: Maybe<Scalars['Boolean']>;
};

export type EditableLinksBase = {
  __typename?: 'EditableLinksBase';
  link?: Maybe<Link>;
  openInNewTab?: Maybe<Scalars['Boolean']>;
};

export type ElnNewsletter = {
  __typename?: 'ElnNewsletter';
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  frequencyDescription?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  newsletterCode?: Maybe<Scalars['String']>;
  newsletterDescription?: Maybe<Scalars['String']>;
  newsletterTags?: Maybe<Array<Scalars['String']>>;
  order?: Maybe<Scalars['Int']>;
  sampleUrl?: Maybe<Link>;
  state?: Maybe<Array<State>>;
  subbrand?: Maybe<Array<Subbrand>>;
  title: Scalars['String'];
  uid: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ElnNewsletterWhereInput = {
  locale?: Maybe<Scalars['String']>;
  localeIn?: Maybe<Array<Scalars['String']>>;
  newsletterCode?: Maybe<Scalars['String']>;
  newsletterCodeIn?: Maybe<Array<Scalars['String']>>;
  newsletterTags?: Maybe<Scalars['String']>;
  newsletterTagsIn?: Maybe<Scalars['String']>;
  state?: Maybe<StateWhereInput>;
  subbrand?: Maybe<SubbrandWhereInput>;
  uid?: Maybe<Scalars['String']>;
  uidIn?: Maybe<Array<Scalars['String']>>;
};

export type Event = {
  __typename?: 'Event';
  authoredBy?: Maybe<Scalars['String']>;
  authoredOn?: Maybe<Scalars['String']>;
  contentTypeUid: Scalars['String'];
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  eventDescription: Scalars['String'];
  eventDetails: FieldGroupEventDetails;
  locale?: Maybe<Scalars['String']>;
  oldUrl?: Maybe<Scalars['String']>;
  publishDetails?: Maybe<PublishDetails>;
  publishedDate: Scalars['DateTime'];
  relatedInlineContent?: Maybe<RelatedInlineContent>;
  seo: Seo;
  title: Scalars['String'];
  uid: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  url: Scalars['String'];
};

export type EventButton = {
  __typename?: 'EventButton';
  buttonLink?: Maybe<Scalars['String']>;
  buttonName?: Maybe<Scalars['String']>;
};

export type EventDetailInput = {
  button1Link?: Maybe<Scalars['String']>;
  button1Name?: Maybe<Scalars['String']>;
  button2Link?: Maybe<Scalars['String']>;
  button2Name?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['String']>;
  endDateGte?: Maybe<Scalars['String']>;
  endDateLt?: Maybe<Scalars['String']>;
  eventType?: Maybe<Scalars['String']>;
  eventTypeIn?: Maybe<Array<Scalars['String']>>;
  eventUrl?: Maybe<Scalars['String']>;
  eventUrlIn?: Maybe<Array<Scalars['String']>>;
  location?: Maybe<Scalars['String']>;
  locationIn?: Maybe<Array<Scalars['String']>>;
  startDate?: Maybe<Scalars['String']>;
  startDateGte?: Maybe<Scalars['String']>;
  startDateLt?: Maybe<Scalars['String']>;
};

export type EventPage = {
  __typename?: 'EventPage';
  items?: Maybe<Array<RelatedItemUnion>>;
  meta: EventPageMeta;
};

export type EventPageMeta = {
  __typename?: 'EventPageMeta';
  entry?: Maybe<Event>;
  pagination: PaginationPage;
};

export type EventWhereInput = {
  eventDetails?: Maybe<EventDetailInput>;
  publishedDetails?: Maybe<PublishDetailInput>;
  uid?: Maybe<Scalars['String']>;
  uidIn?: Maybe<Array<Scalars['String']>>;
  url?: Maybe<Scalars['String']>;
  urlIn?: Maybe<Array<Scalars['String']>>;
};

export type EventsPage = {
  __typename?: 'EventsPage';
  items: Array<Event>;
  meta: EventsPageMeta;
};

export type EventsPageMeta = {
  __typename?: 'EventsPageMeta';
  pagination: PaginationPage;
};

export type ExternalLink = {
  __typename?: 'ExternalLink';
  contentFormat?: Maybe<Array<ContentFormat>>;
  contentTypeUid: Scalars['String'];
  contributor?: Maybe<Array<Contributor>>;
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  externalLink: Scalars['String'];
  featuredImageGroup?: Maybe<FeaturedImage>;
  keywords?: Maybe<Array<Keyword>>;
  locale?: Maybe<Scalars['String']>;
  mobileHeadline: Scalars['String'];
  publishedDate: Scalars['DateTime'];
  relatedEvents?: Maybe<Array<Event>>;
  seo: Seo;
  seriesTaxonomy?: Maybe<Array<SeriesTaxonomy>>;
  sponsorshipGatingGroup?: Maybe<SponsorshipGatingGroup>;
  subbrand?: Maybe<SubBrand>;
  summary: Scalars['String'];
  summaryJson: Scalars['JSON'];
  /** @deprecated Soon will be replaced by topicSelector */
  termSelector: TermSelector;
  title: Scalars['String'];
  topicSelector: TopicSelector;
  uid: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  url: Scalars['String'];
};

export type FeaturedContent = Article | Document | ExternalLink | Magazine | Podcast | Slideshow | Video | Webinar;

export type FeaturedImage = {
  __typename?: 'FeaturedImage';
  featuredImage?: Maybe<File>;
  featuredImageCaption?: Maybe<Scalars['String']>;
  featuredImageCredit?: Maybe<Scalars['String']>;
  imageAltText?: Maybe<Scalars['String']>;
};

export type FieldGroupAtAGlance = {
  __typename?: 'FieldGroupAtAGlance';
  shortGlanceVersions: Scalars['String'];
};

export type FieldGroupDocument = {
  __typename?: 'FieldGroupDocument';
  materialMultiple?: Maybe<Array<File>>;
  materialResource?: Maybe<File>;
  materialTitle?: Maybe<Scalars['String']>;
  materialUrl?: Maybe<Scalars['String']>;
};

export type FieldGroupDuration = {
  __typename?: 'FieldGroupDuration';
  duration?: Maybe<Scalars['String']>;
};

export type FieldGroupEventDetails = {
  __typename?: 'FieldGroupEventDetails';
  buttons?: Maybe<Array<EventButton>>;
  endDate?: Maybe<Scalars['DateTime']>;
  eventLogo: FieldGroupEventLogo;
  eventType: Scalars['String'];
  eventUrl?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['DateTime']>;
};

export type FieldGroupEventLogo = {
  __typename?: 'FieldGroupEventLogo';
  eventLogoAlt?: Maybe<Scalars['String']>;
  logoFile?: Maybe<File>;
};

export type FieldGroupMagazine = {
  __typename?: 'FieldGroupMagazine';
  magazineId: Scalars['String'];
  magazineImage: File;
  magazineImageAltText: Scalars['String'];
  magazineListingTitle: Scalars['String'];
  magazineSource: Scalars['String'];
  magazineUrl: Scalars['String'];
};

export type FieldGroupPodcast = {
  __typename?: 'FieldGroupPodcast';
  duration?: Maybe<FieldGroupDuration>;
  podcastId?: Maybe<Scalars['String']>;
  podcastLink?: Maybe<Scalars['String']>;
  podcastService?: Maybe<Scalars['String']>;
};

export type FieldGroupVideo = {
  __typename?: 'FieldGroupVideo';
  duration?: Maybe<FieldGroupDuration>;
  videoCredit?: Maybe<Scalars['String']>;
  videoEmbedCode?: Maybe<Scalars['String']>;
  videoId?: Maybe<Scalars['String']>;
  videoService?: Maybe<Scalars['String']>;
  videoUrl?: Maybe<Scalars['String']>;
};

export type File = {
  __typename?: 'File';
  url?: Maybe<Scalars['String']>;
};

export type FixedLinks = {
  __typename?: 'FixedLinks';
  openInNewTab?: Maybe<Scalars['Boolean']>;
  referenceTopic?: Maybe<Array<ReferenceLinkUnion>>;
};

export type Footer = {
  __typename?: 'Footer';
  footerLogo: FooterLogo;
  footerSections?: Maybe<Array<FooterSection>>;
  informaFooterBar?: Maybe<InformaFooterBar>;
};

export type FooterLogo = {
  __typename?: 'FooterLogo';
  image: File;
  imageAltText?: Maybe<Scalars['String']>;
};

export type FooterSection = {
  __typename?: 'FooterSection';
  editableLinks?: Maybe<Array<EditableLinks>>;
  fixedLinks?: Maybe<Array<FixedLinks>>;
  sectionType: Scalars['String'];
  title?: Maybe<Scalars['String']>;
};

export type GoogleNewsItem = {
  __typename?: 'GoogleNewsItem';
  contentTypeUid: Scalars['String'];
  contributor: Array<Contributor>;
  description: Scalars['String'];
  image?: Maybe<Image>;
  language: Scalars['String'];
  publicationDate: Scalars['DateTime'];
  title: Scalars['String'];
  uid: Scalars['String'];
  url: Scalars['String'];
};

export type HomePage = {
  __typename?: 'HomePage';
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  modules?: Maybe<MultipleModularBlocks>;
  seo: Seo;
  title: Scalars['String'];
  uid: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  url: Scalars['String'];
};

export type Image = {
  __typename?: 'Image';
  title: Scalars['String'];
  url?: Maybe<Scalars['String']>;
};

export type InformaBarLeftSection = {
  __typename?: 'InformaBarLeftSection';
  description: Scalars['String'];
  subMenu?: Maybe<Array<SimpleLink>>;
};

export type InformaBarRightSection = {
  __typename?: 'InformaBarRightSection';
  description?: Maybe<Scalars['String']>;
};

export type InformaFooterBar = {
  __typename?: 'InformaFooterBar';
  brandLogo?: Maybe<BrandLogo>;
  divisionLegal?: Maybe<DivisionAndLegal>;
};

export type ItemModuleLatestContent = {
  __typename?: 'ItemModuleLatestContent';
  itemsLatestSection1?: Maybe<Array<SearchContent>>;
  itemsLatestSection2?: Maybe<Array<SearchContent>>;
};


export type Keyword = {
  __typename?: 'Keyword';
  contentTypeUid: Scalars['String'];
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  keywordBranding?: Maybe<KeywordBranding>;
  keywordDescription?: Maybe<Scalars['String']>;
  keywordDisplayOptions: Scalars['String'];
  keywordSponsorReference?: Maybe<Array<Sponsor>>;
  locale?: Maybe<Scalars['String']>;
  modules?: Maybe<ModularBlocks>;
  seo: Seo;
  title: Scalars['String'];
  uid: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  url: Scalars['String'];
};

export type KeywordBranding = {
  __typename?: 'KeywordBranding';
  keywordBrandingColor?: Maybe<Scalars['String']>;
  keywordBrandingDescriptionWithHyperlink?: Maybe<Scalars['String']>;
  keywordBrandingDescriptionWithHyperlinkJson: Scalars['JSON'];
  keywordBrandingLogo?: Maybe<KeywordBrandingLogo>;
  keywordBrandingLogoAltText?: Maybe<Scalars['String']>;
};

export type KeywordBrandingLogo = {
  __typename?: 'KeywordBrandingLogo';
  url?: Maybe<Scalars['String']>;
};

export type KeywordPage = {
  __typename?: 'KeywordPage';
  items: Array<Content>;
  meta: KeywordPageMeta;
};

export type KeywordPageMeta = {
  __typename?: 'KeywordPageMeta';
  entry?: Maybe<Keyword>;
  pagination: PaginationPage;
};

export type KeywordWhereInput = {
  uid?: Maybe<Scalars['String']>;
  uidIn?: Maybe<Array<Scalars['String']>>;
  url?: Maybe<Scalars['String']>;
  urlIn?: Maybe<Array<Scalars['String']>>;
};

export type LargeMenu = {
  __typename?: 'LargeMenu';
  hasSubMenu?: Maybe<Scalars['Boolean']>;
  seeAllLink?: Maybe<Scalars['String']>;
  seeAllLinkUrl?: Maybe<Scalars['String']>;
  subMenu?: Maybe<Array<SimpleLink>>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type LatestSection = {
  __typename?: 'LatestSection';
  ctaButton?: Maybe<CtaButton>;
  dynamicRecentContent?: Maybe<DynamicRecentContent>;
  sectionLabel: Scalars['String'];
};

export type Link = {
  __typename?: 'Link';
  href: Scalars['String'];
  title: Scalars['String'];
};

export type LinkImage = {
  __typename?: 'LinkImage';
  altText?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type LinkListModule = {
  __typename?: 'LinkListModule';
  contentListOption: Scalars['String'];
  contentTypeUid: Scalars['String'];
  dynamicRecentContent?: Maybe<DynamicRecentContentLinkList>;
  manualCuratedContentGroup?: Maybe<ManualCuratedContent>;
  moduleLabel: Scalars['String'];
  title: Scalars['String'];
  uid: Scalars['String'];
};

export type LinkSections = {
  __typename?: 'LinkSections';
  links: Array<SiteLink>;
  title: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type Logo = {
  __typename?: 'Logo';
  url?: Maybe<Scalars['String']>;
};

export type Magazine = {
  __typename?: 'Magazine';
  atAGlance: Array<FieldGroupAtAGlance>;
  authoredBy?: Maybe<Scalars['String']>;
  authoredOn?: Maybe<Scalars['String']>;
  body: Scalars['String'];
  bodyJson: Scalars['JSON'];
  contentFormat?: Maybe<Array<ContentFormat>>;
  contentTypeUid: Scalars['String'];
  contributor?: Maybe<Array<Contributor>>;
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  featuredImageGroup?: Maybe<FeaturedImage>;
  keywords?: Maybe<Array<Keyword>>;
  locale?: Maybe<Scalars['String']>;
  magazine?: Maybe<FieldGroupMagazine>;
  mobileHeadline: Scalars['String'];
  newsletterSignUpPromo?: Maybe<NewsletterSignUpPromo>;
  oldUrl?: Maybe<Scalars['String']>;
  publishedDate: Scalars['DateTime'];
  readTime: Scalars['Float'];
  relatedEvents?: Maybe<Array<Event>>;
  relatedInlineContent?: Maybe<Array<RelatedInlineContents>>;
  seo: Seo;
  seriesTaxonomy?: Maybe<Array<SeriesTaxonomy>>;
  sponsorshipGatingGroup?: Maybe<SponsorshipGatingGroup>;
  subbrand?: Maybe<SubBrand>;
  summary: Scalars['String'];
  summaryJson: Scalars['JSON'];
  /** @deprecated Soon will be replaced by topicSelector */
  termSelector: TermSelector;
  title: Scalars['String'];
  topicSelector: TopicSelector;
  uid: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  url: Scalars['String'];
};

export type MainMenuItem = {
  __typename?: 'MainMenuItem';
  hasSubMenu?: Maybe<Scalars['Boolean']>;
  recentContents: Array<RecentContentEntry>;
  seeAllLink?: Maybe<Scalars['String']>;
  seeAllLinkUrl?: Maybe<Scalars['String']>;
  subMenu?: Maybe<Array<SimpleLink>>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ManualCuratedContent = {
  __typename?: 'ManualCuratedContent';
  manualCuratedContent?: Maybe<Array<ManualCuratedContentItem>>;
  manualCuratedContentLimit?: Maybe<Scalars['Int']>;
};

export type ManualCuratedContentItem = {
  __typename?: 'ManualCuratedContentItem';
  contentTypeUid: Scalars['String'];
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  uid: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type Meta = {
  __typename?: 'Meta';
  total?: Maybe<Scalars['Int']>;
};

export type MetaSectionPromoV2WithEntry = {
  __typename?: 'MetaSectionPromoV2WithEntry';
  entry: ModuleSectionPromoV2;
  total?: Maybe<Scalars['Int']>;
};

export type MetaSectionPromoWithEntry = {
  __typename?: 'MetaSectionPromoWithEntry';
  entry: ModuleSectionPromo;
  total?: Maybe<Scalars['Int']>;
};

export type MetaThreeColumnHighlightWithEntry = {
  __typename?: 'MetaThreeColumnHighlightWithEntry';
  entry: ModuleThreeColumnHighlight;
  total?: Maybe<Scalars['Int']>;
};

export type MetaWithEntry = {
  __typename?: 'MetaWithEntry';
  entry: ModuleContentCards;
  total?: Maybe<Scalars['Int']>;
};

export type MetaWithEntryLinkList = {
  __typename?: 'MetaWithEntryLinkList';
  entry: LinkListModule;
  total?: Maybe<Scalars['Int']>;
};

export type MetaWithEntryModuleFeatured = {
  __typename?: 'MetaWithEntryModuleFeatured';
  entry: ModuleFeatured;
  total?: Maybe<Scalars['Int']>;
};

export type MetaWithEntrySectionPromo = {
  __typename?: 'MetaWithEntrySectionPromo';
  entry: ModuleSectionPromo;
  total?: Maybe<Scalars['Int']>;
};

export type MetaWithEntrySectionPromoV2 = {
  __typename?: 'MetaWithEntrySectionPromoV2';
  entry: ModuleSectionPromoV2;
  total?: Maybe<Scalars['Int']>;
};

export type MetaWithModuleCommodityPricesEntry = {
  __typename?: 'MetaWithModuleCommodityPricesEntry';
  entry: ModuleCommodityPrices;
};

export type MetaWithModuleLatestContent = {
  __typename?: 'MetaWithModuleLatestContent';
  entry: ModuleLatestContent;
  total?: Maybe<Scalars['Int']>;
  totalLatestSection1?: Maybe<Scalars['Int']>;
  totalLatestSection2?: Maybe<Scalars['Int']>;
};

export type MetaWithModuleWeatherEntry = {
  __typename?: 'MetaWithModuleWeatherEntry';
  entry: ModuleWeather;
};

export type ModularBlocks = {
  __typename?: 'ModularBlocks';
  moduleBlocks?: Maybe<Array<ModuleBlocks>>;
};

export type ModularWhereInput = {
  uid?: Maybe<Scalars['String']>;
  uidIn?: Maybe<Array<Scalars['String']>>;
};

export type ModuleBlocks = {
  __typename?: 'ModuleBlocks';
  title?: Maybe<Scalars['String']>;
  uid: Scalars['String'];
};

export type ModuleCommodityPrices = {
  __typename?: 'ModuleCommodityPrices';
  commoditySymbols: Scalars['String'];
  contentTypeUid: Scalars['String'];
  copyrightInformation?: Maybe<CopyrightInformation>;
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  ctaButton?: Maybe<CtaButtonLink>;
  locale?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  uid: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ModuleCommodityPricesEntry = {
  __typename?: 'ModuleCommodityPricesEntry';
  items?: Maybe<Array<QuotesPrice>>;
  meta: MetaWithModuleCommodityPricesEntry;
};

export type ModuleContentCards = {
  __typename?: 'ModuleContentCards';
  contentDisplayOption?: Maybe<Scalars['String']>;
  contentTypeUid: Scalars['String'];
  dynamicRecentContent?: Maybe<DynamicRecentContent>;
  manualCuratedContentGroup?: Maybe<ManualCuratedContent>;
  settingOption?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  uid: Scalars['String'];
};

export type ModuleContentCardsEntry = {
  __typename?: 'ModuleContentCardsEntry';
  items?: Maybe<Array<SearchContent>>;
  meta: MetaWithEntry;
};

export type ModuleContentSpotlight = {
  __typename?: 'ModuleContentSpotlight';
  ctaButtonText?: Maybe<Scalars['String']>;
  displayOptions?: Maybe<DisplayOptions>;
  promoLabel: Scalars['String'];
  promotedContent?: Maybe<Array<Content>>;
  title: Scalars['String'];
  uid: Scalars['String'];
};

export type ModuleEventPromo = {
  __typename?: 'ModuleEventPromo';
  background?: Maybe<BackgroundEventPromo>;
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  event: Array<Event>;
  locale?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  uid: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ModuleExternalLink = {
  __typename?: 'ModuleExternalLink';
  contentTypeUid: Scalars['String'];
  ctaButton?: Maybe<CtaButton>;
  externalLinks?: Maybe<Array<ExternalLink>>;
  moduleLabel: Scalars['String'];
  title: Scalars['String'];
  uid: Scalars['String'];
};

export type ModuleFeatured = {
  __typename?: 'ModuleFeatured';
  featuredContent?: Maybe<Array<BaseModelWithUrl>>;
  moduleDisplayOption: Scalars['String'];
  recentSection?: Maybe<RecentSection>;
  title: Scalars['String'];
  uid: Scalars['String'];
};

export type ModuleLatestContent = {
  __typename?: 'ModuleLatestContent';
  latestSection1?: Maybe<LatestSection>;
  latestSection2?: Maybe<LatestSection>;
  title: Scalars['String'];
  uid: Scalars['String'];
};

export type ModuleNewsLetterPromo = {
  __typename?: 'ModuleNewsLetterPromo';
  ctaButton?: Maybe<NewsLetterCtaButton>;
  ctaMessage?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  uid: Scalars['String'];
};

export type ModuleSectionPromo = {
  __typename?: 'ModuleSectionPromo';
  altText: Scalars['String'];
  background?: Maybe<SectionPromoBackground>;
  contentListOption: Scalars['String'];
  contentTypeUid: Scalars['String'];
  coverageButton?: Maybe<CoverageButton>;
  ctaButton?: Maybe<SectionPromoCtaButton>;
  description?: Maybe<Scalars['String']>;
  dynamicRecentContent?: Maybe<DynamicRecentContent>;
  logo: File;
  logoPosition: Scalars['String'];
  manualCuratedContentGroup?: Maybe<ManualCuratedContent>;
  moduleDisplayOption: Scalars['String'];
  title: Scalars['String'];
  uid: Scalars['String'];
};

export type ModuleSectionPromoV2 = {
  __typename?: 'ModuleSectionPromoV2';
  altText: Scalars['String'];
  background?: Maybe<SectionPromoBackground>;
  contentListOption: Scalars['String'];
  contentTypeUid: Scalars['String'];
  coverageButton?: Maybe<CoverageButton>;
  ctaButton?: Maybe<SectionPromoCtaButton>;
  description?: Maybe<Scalars['String']>;
  dynamicRecentContent?: Maybe<DynamicRecentContent>;
  logo: File;
  logoPosition: Scalars['String'];
  manualCuratedContentGroup?: Maybe<ManualCuratedContent>;
  moduleDisplayOption: Scalars['String'];
  title: Scalars['String'];
  uid: Scalars['String'];
};

export type ModuleThreeColumnHighlight = {
  __typename?: 'ModuleThreeColumnHighlight';
  contentTypeUid: Scalars['String'];
  threeColumnSection1: ThreeColumnSection;
  threeColumnSection2: ThreeColumnSection;
  threeColumnSection3: ThreeColumnSection;
  title: Scalars['String'];
  uid: Scalars['String'];
};

export type ModuleThreeColumnHighlightItems = {
  __typename?: 'ModuleThreeColumnHighlightItems';
  column1: Array<SearchContent>;
  column2: Array<SearchContent>;
  column3: Array<SearchContent>;
};

export type ModuleThreeColumnHighlightResult = {
  __typename?: 'ModuleThreeColumnHighlightResult';
  items: ModuleThreeColumnHighlightItems;
  meta: MetaThreeColumnHighlightWithEntry;
};

export type ModuleWeather = {
  __typename?: 'ModuleWeather';
  contentTypeUid: Scalars['String'];
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  defaultZip: Scalars['String'];
  locale?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  uid: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type ModuleWeatherEntry = {
  __typename?: 'ModuleWeatherEntry';
  items?: Maybe<Array<Weather>>;
  meta: MetaWithModuleWeatherEntry;
};

export type MultipleModularBlockRef = {
  __typename?: 'MultipleModularBlockRef';
  contentTypeUid: AvailableModuleCtUids;
  uid: Scalars['String'];
};

export type MultipleModularBlocks = {
  __typename?: 'MultipleModularBlocks';
  moduleBlocks?: Maybe<Array<MultipleModularBlockRef>>;
};

export type MultipleRightBlocks = {
  __typename?: 'MultipleRightBlocks';
  rightComponents?: Maybe<Array<RightComponentsRef>>;
};

export type NewsLetterCtaButton = {
  __typename?: 'NewsLetterCtaButton';
  ctaButtonText?: Maybe<Scalars['String']>;
  ctaButtonUrl?: Maybe<Link>;
};

export type NewsletterSignUpPromo = {
  __typename?: 'NewsletterSignUpPromo';
  message: Scalars['String'];
  newsletterId?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type PageContent = {
  __typename?: 'PageContent';
  content?: Maybe<Content>;
};

export type PageWhereInput = {
  url: Scalars['String'];
};

export type PaginationPage = {
  __typename?: 'PaginationPage';
  limit: Scalars['Int'];
  page: Scalars['Int'];
  total: Scalars['Int'];
  totalPage: Scalars['Int'];
};

export type Podcast = {
  __typename?: 'Podcast';
  atAGlance: Array<FieldGroupAtAGlance>;
  authoredBy?: Maybe<Scalars['String']>;
  authoredOn?: Maybe<Scalars['String']>;
  body: Scalars['String'];
  bodyJson: Scalars['JSON'];
  contentFormat?: Maybe<Array<ContentFormat>>;
  contentTypeUid: Scalars['String'];
  contributor?: Maybe<Array<Contributor>>;
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  featuredImageGroup?: Maybe<FeaturedImage>;
  keywords?: Maybe<Array<Keyword>>;
  locale?: Maybe<Scalars['String']>;
  mobileHeadline: Scalars['String'];
  newsletterSignUpPromo?: Maybe<NewsletterSignUpPromo>;
  oldUrl?: Maybe<Scalars['String']>;
  podcast: FieldGroupPodcast;
  publishedDate: Scalars['DateTime'];
  readTime: Scalars['Float'];
  relatedEvents?: Maybe<Array<Event>>;
  relatedInlineContent?: Maybe<Array<RelatedInlineContents>>;
  seo: Seo;
  seriesTaxonomy?: Maybe<Array<SeriesTaxonomy>>;
  sponsorshipGatingGroup?: Maybe<SponsorshipGatingGroup>;
  subbrand?: Maybe<SubBrand>;
  summary: Scalars['String'];
  summaryJson: Scalars['JSON'];
  /** @deprecated Soon will be replaced by topicSelector */
  termSelector: TermSelector;
  title: Scalars['String'];
  topicSelector: TopicSelector;
  uid: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  url: Scalars['String'];
};

export type PodcastPage = {
  __typename?: 'PodcastPage';
  items: Array<Podcast>;
  meta: PodcastPageMeta;
};

export type PodcastPageMeta = {
  __typename?: 'PodcastPageMeta';
  pagination: PaginationPage;
};

export type PublishDetailInput = {
  publishedDateGte?: Maybe<Scalars['DateTime']>;
  publishedDateLte?: Maybe<Scalars['DateTime']>;
};

export type PublishDetails = {
  __typename?: 'PublishDetails';
  locale?: Maybe<Scalars['String']>;
  time?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  all_article: AllArticle;
  all_content_format: AllContentFormat;
  all_contributor: AllContributor;
  all_country: AllCountry;
  all_document: AllDocument;
  all_eln_newsletter?: Maybe<AllElnNewsletter>;
  all_event: AllEvent;
  all_external_link: AllExternalLink;
  all_keyword: AllKeyword;
  all_magazine: AllMagazine;
  all_module_commodity_prices?: Maybe<AllModuleCommodityPricesEntry>;
  all_module_content_cards?: Maybe<AllModuleContentCardsEntry>;
  all_module_content_spotlight?: Maybe<AllModuleContentSpotlightEntry>;
  all_module_event_promo?: Maybe<AllModuleEventPromoEntry>;
  all_module_external_link?: Maybe<AllModuleExternalLinkEntry>;
  all_module_featured?: Maybe<AllModuleFeaturedEntry>;
  all_module_latest_content?: Maybe<AllModuleLatestContentEntry>;
  all_module_link_list?: Maybe<AllModuleLinkListEntry>;
  all_module_newsletter_promo?: Maybe<AllModuleNewsletterPromoEntry>;
  all_module_section_promo?: Maybe<AllModuleSectionPromoEntry>;
  all_module_section_promo_v2?: Maybe<AllModuleSectionPromoV2Entry>;
  all_module_three_column_highlight?: Maybe<AllModuleThreeColumnHighlightEntry>;
  all_module_weather?: Maybe<AllModuleWeatherEntry>;
  all_podcast: AllPodcast;
  all_slideshow: AllSlideshow;
  all_sponsor: AllSponsor;
  all_subbrand: AllSubbrand;
  all_topic_primary: AllTopicPrimary;
  all_topic_secondary: AllTopicSecondary;
  all_topic_tertiary: AllTopicTertiary;
  all_video: AllVideo;
  all_webinar: AllWebinar;
  footer: SiteFooter;
  navigation: SiteNavigation;
  page_basic: BasicPageContent;
  page_cash_grain_bids: CashGrainBidsPage;
  page_content: PageContent;
  page_content_format: ContentFormatPage;
  page_contributor: ContributorPage;
  page_event: EventPage;
  page_events: EventsPage;
  page_google_news: AllGoogleNewsPage;
  page_home: HomePage;
  page_keyword: KeywordPage;
  page_podcasts: PodcastPage;
  page_rss: RssFeed;
  page_search: SearchPage;
  page_series: SeriesPage;
  page_slideshows: SlideshowPage;
  page_subbrand: SubbrandPage;
  page_topic: TopicPage;
  page_videos: VideoPage;
  page_weather: AllWeather;
  page_webinars: WebinarPage;
  page_whitepapers: WhitePaperPage;
  settings_article?: Maybe<SettingsArticle>;
  settings_eln_config?: Maybe<SettingsElnConfig>;
  settings_search?: Maybe<SettingsSearch>;
  settings_site?: Maybe<SettingsSite>;
  test_role_protected_data: Scalars['String'];
  test_role_public_data: Scalars['String'];
};


export type QueryAll_ArticleArgs = {
  asc?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ContentWhereInput>;
};


export type QueryAll_Content_FormatArgs = {
  asc?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ContentFormatWhereInput>;
};


export type QueryAll_ContributorArgs = {
  asc?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ContributorWhereInput>;
};


export type QueryAll_CountryArgs = {
  asc?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<CountryWhereInput>;
};


export type QueryAll_DocumentArgs = {
  asc?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ContentWhereInput>;
};


export type QueryAll_Eln_NewsletterArgs = {
  asc?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ElnNewsletterWhereInput>;
};


export type QueryAll_EventArgs = {
  asc?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<EventWhereInput>;
};


export type QueryAll_KeywordArgs = {
  asc?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<KeywordWhereInput>;
};


export type QueryAll_Module_Commodity_PricesArgs = {
  where: ModularWhereInput;
};


export type QueryAll_Module_Content_CardsArgs = {
  where: ModularWhereInput;
};


export type QueryAll_Module_Content_SpotlightArgs = {
  where: ModularWhereInput;
};


export type QueryAll_Module_Event_PromoArgs = {
  where: ModularWhereInput;
};


export type QueryAll_Module_External_LinkArgs = {
  where: ModularWhereInput;
};


export type QueryAll_Module_FeaturedArgs = {
  where: ModularWhereInput;
};


export type QueryAll_Module_Latest_ContentArgs = {
  where: ModularWhereInput;
};


export type QueryAll_Module_Link_ListArgs = {
  where: ModularWhereInput;
};


export type QueryAll_Module_Newsletter_PromoArgs = {
  where: ModularWhereInput;
};


export type QueryAll_Module_Section_PromoArgs = {
  where: ModularWhereInput;
};


export type QueryAll_Module_Section_Promo_V2Args = {
  where: ModularWhereInput;
};


export type QueryAll_Module_Three_Column_HighlightArgs = {
  where: ModularWhereInput;
};


export type QueryAll_Module_WeatherArgs = {
  where: ModularWhereInput;
};


export type QueryAll_PodcastArgs = {
  asc?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ContentWhereInput>;
};


export type QueryAll_SlideshowArgs = {
  asc?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ContentWhereInput>;
};


export type QueryAll_SponsorArgs = {
  asc?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<SponsorWhereInput>;
};


export type QueryAll_SubbrandArgs = {
  asc?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<SubbrandWhereInput>;
};


export type QueryAll_Topic_PrimaryArgs = {
  asc?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<TopicPrimaryWhereInput>;
};


export type QueryAll_Topic_SecondaryArgs = {
  asc?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<TopicSecondaryWhereInput>;
};


export type QueryAll_Topic_TertiaryArgs = {
  asc?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<TopicTertiaryWhereInput>;
};


export type QueryAll_VideoArgs = {
  asc?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ContentWhereInput>;
};


export type QueryAll_WebinarArgs = {
  asc?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ContentWhereInput>;
};


export type QueryPage_BasicArgs = {
  url?: Maybe<Scalars['String']>;
};


export type QueryPage_Cash_Grain_BidsArgs = {
  where: CashGrainBidsPageWhereInput;
};


export type QueryPage_ContentArgs = {
  url: Scalars['String'];
};


export type QueryPage_Content_FormatArgs = {
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortType>;
  where: PageWhereInput;
};


export type QueryPage_ContributorArgs = {
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortType>;
  where: PageWhereInput;
};


export type QueryPage_EventArgs = {
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortType>;
  where: PageWhereInput;
};


export type QueryPage_EventsArgs = {
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortType>;
};


export type QueryPage_KeywordArgs = {
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortType>;
  where: PageWhereInput;
};


export type QueryPage_PodcastsArgs = {
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortType>;
};


export type QueryPage_RssArgs = {
  limit?: Maybe<Scalars['Int']>;
  where?: Maybe<RssFeedWhereInput>;
};


export type QueryPage_SearchArgs = {
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortType>;
  where: SearchPageWhereInput;
};


export type QueryPage_SeriesArgs = {
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortType>;
  where: PageWhereInput;
};


export type QueryPage_SlideshowsArgs = {
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortType>;
};


export type QueryPage_SubbrandArgs = {
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortType>;
  where: PageWhereInput;
};


export type QueryPage_TopicArgs = {
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortType>;
  where: PageWhereInput;
};


export type QueryPage_VideosArgs = {
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortType>;
};


export type QueryPage_WeatherArgs = {
  where: WeatherPageWhereInput;
};


export type QueryPage_WebinarsArgs = {
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortType>;
};


export type QueryPage_WhitepapersArgs = {
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortType>;
};

export type QuotesPrice = {
  __typename?: 'QuotesPrice';
  change: Scalars['Float'];
  high: Scalars['Float'];
  last: Scalars['Float'];
  lastTrade: Scalars['DateTime'];
  low: Scalars['Float'];
  name: Scalars['String'];
  open: Scalars['Float'];
};

export type RecentContentEntry = {
  __typename?: 'RecentContentEntry';
  altText?: Maybe<Scalars['String']>;
  categoryName?: Maybe<Scalars['String']>;
  categoryUrl?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  readTime?: Maybe<Scalars['Float']>;
  summary?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type RecentSection = {
  __typename?: 'RecentSection';
  ctaButton?: Maybe<RecentSectionCtaButton>;
  dynamicRecentContent?: Maybe<DynamicRecentContent>;
  sectionLabel: Scalars['String'];
};

export type RecentSectionCtaButton = {
  __typename?: 'RecentSectionCtaButton';
  ctaButtonLink?: Maybe<Array<RecentSectionCtaButtonLink>>;
  ctaButtonText?: Maybe<Scalars['String']>;
};

export type RecentSectionCtaButtonLink = ContentFormat | Keyword | SubBrand | TopicPrimary | TopicSecondary | TopicTertiary;

export type Recommendations = {
  __typename?: 'Recommendations';
  recommendationsTitle?: Maybe<Array<RecommendationtsTitle>>;
  serviceSelect?: Maybe<Scalars['String']>;
};

export type RecommendationtsTitle = {
  __typename?: 'RecommendationtsTitle';
  categoryIdBibblio?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ReferenceLinkUnion = Keyword | SeriesTaxonomy | TopicPrimary | TopicSecondary | TopicTertiary;

export type RelatedInlineContent = {
  __typename?: 'RelatedInlineContent';
  relatedItem?: Maybe<Array<RelatedItemUnion>>;
};

export type RelatedInlineContentTypeRef = {
  __typename?: 'RelatedInlineContentTypeRef';
  contentTypeUid: RelatedItemUids;
  title: Scalars['String'];
  uid: Scalars['String'];
  url: Scalars['String'];
};

export type RelatedInlineContents = {
  __typename?: 'RelatedInlineContents';
  relatedItem?: Maybe<Array<RelatedInlineContentTypeRef>>;
};

export enum RelatedItemUids {
  Article = 'article',
  BasicPage = 'basic_page',
  Document = 'document',
  Event = 'event',
  ExternalLink = 'external_link',
  Magazine = 'magazine',
  Podcast = 'podcast',
  Slideshow = 'slideshow',
  Video = 'video',
  Webinar = 'webinar'
}

export type RelatedItemUnion = Article | BasicPage | Document | Event | ExternalLink | Magazine | Podcast | Slideshow | Video | Webinar;

export type RightComponentsRef = {
  __typename?: 'RightComponentsRef';
  contentTypeUid: AvailableRightBlockModuleCtUids;
  uid: Scalars['String'];
};

export type RssFeed = {
  __typename?: 'RssFeed';
  items: Array<RssFeedItem>;
};

export type RssFeedItem = {
  __typename?: 'RssFeedItem';
  contentTypeUid: Scalars['String'];
  contributor: Array<Contributor>;
  description: Scalars['String'];
  image?: Maybe<Image>;
  publishedDate: Scalars['DateTime'];
  title: Scalars['String'];
  url: Scalars['String'];
};

export type RssFeedWhereInput = {
  contentFormats?: Maybe<Scalars['String']>;
  contentTypes?: Maybe<Scalars['String']>;
  contributors?: Maybe<Scalars['String']>;
  keywords?: Maybe<Scalars['String']>;
  series?: Maybe<Scalars['String']>;
  sponsor?: Maybe<Scalars['Boolean']>;
  subbrands?: Maybe<Scalars['String']>;
  topics?: Maybe<Scalars['String']>;
};

export type SearchContent = Article | Document | Event | ExternalLink | Magazine | Podcast | Slideshow | Video | Webinar;

export type SearchPage = {
  __typename?: 'SearchPage';
  items: Array<Content>;
  meta: SearchPageMeta;
};

export type SearchPageMeta = {
  __typename?: 'SearchPageMeta';
  pagination: PaginationPage;
};

export type SearchPageWhereInput = {
  TopicPrimaryUrlIn?: Maybe<Array<Scalars['String']>>;
  contentTypeUidIn?: Maybe<Array<Scalars['String']>>;
  contributorUrlIn?: Maybe<Array<Scalars['String']>>;
  publishedDateGte?: Maybe<Scalars['DateTime']>;
  publishedDateLte?: Maybe<Scalars['DateTime']>;
  searchTerm?: Maybe<Scalars['String']>;
};

export type SectionLink = {
  __typename?: 'SectionLink';
  referenceLink?: Maybe<Array<ReferenceLinkUnion>>;
  title: Scalars['String'];
  url: Scalars['String'];
};

export type SectionLinkSubBrand = {
  __typename?: 'SectionLinkSubBrand';
  referenceLink?: Maybe<Array<ReferenceLinkUnion>>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SectionPromoBackground = {
  __typename?: 'SectionPromoBackground';
  altText?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  image?: Maybe<File>;
};

export type SectionPromoCtaButton = {
  __typename?: 'SectionPromoCtaButton';
  text?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type Seo = {
  __typename?: 'Seo';
  canonicalUrl?: Maybe<Scalars['String']>;
  metaDescription: Scalars['String'];
  metaTitle: Scalars['String'];
  noIndex?: Maybe<Scalars['Boolean']>;
};

export type SeriesPage = {
  __typename?: 'SeriesPage';
  items: Array<Content>;
  meta: SeriesPageMeta;
};

export type SeriesPageMeta = {
  __typename?: 'SeriesPageMeta';
  entry?: Maybe<SeriesTaxonomy>;
  pagination: PaginationPage;
};

export type SeriesTaxonomy = {
  __typename?: 'SeriesTaxonomy';
  branding?: Maybe<Branding>;
  contentTypeUid: Scalars['String'];
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  displayOptions: Scalars['String'];
  locale?: Maybe<Scalars['String']>;
  modules?: Maybe<ModularBlocks>;
  seo: Seo;
  seriesDescription?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  uid: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  url: Scalars['String'];
};

export type SettingsArticle = {
  __typename?: 'SettingsArticle';
  articleDisplaySettings: DisplaySettingsArticle;
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  modules?: Maybe<MultipleModularBlocks>;
  recommendations?: Maybe<Recommendations>;
  sidebarConfiguration?: Maybe<MultipleRightBlocks>;
  title: Scalars['String'];
  uid: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type SettingsElnConfig = {
  __typename?: 'SettingsElnConfig';
  backendUserDatastoreSelector?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  datahubUserDatastoreProperties?: Maybe<DatahubUserDatastoreProperties>;
  eloquaUserDatastoreProperties?: Maybe<EloquaUserDatastoreProperties>;
  eventEditionCode?: Maybe<Scalars['String']>;
  formId?: Maybe<Scalars['String']>;
  hubspotUserdataStoreProperties?: Maybe<HubspotUserdataStoreProperties>;
  locale?: Maybe<Scalars['String']>;
  siteDescription?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  uid: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type SettingsSearch = {
  __typename?: 'SettingsSearch';
  boostMatchingAuthor?: Maybe<Scalars['Float']>;
  boostMatchingContent?: Maybe<Scalars['Float']>;
  boostMatchingPhrase?: Maybe<Scalars['Float']>;
  boostMatchingTags?: Maybe<Scalars['Float']>;
  boostMatchingTitle?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  searchDisplayRankingScore: Scalars['Boolean'];
  searchMustContainAllWords: Scalars['Boolean'];
  title: Scalars['String'];
  uid: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type SettingsSite = {
  __typename?: 'SettingsSite';
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  placeholderImage?: Maybe<PlaceholderImageGroup>;
  title: Scalars['String'];
  uid: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type SideNavSections = {
  __typename?: 'SideNavSections';
  seeAllLink?: Maybe<Scalars['String']>;
  seeAllLinkUrl?: Maybe<Scalars['String']>;
  subMenu: Array<SimpleLink>;
  title: Scalars['String'];
  url: Scalars['String'];
};

export type SimpleLink = {
  __typename?: 'SimpleLink';
  title: Scalars['String'];
  url: Scalars['String'];
};

export type SiteFooter = {
  __typename?: 'SiteFooter';
  brandLinks: Array<SiteLink>;
  copyright?: Maybe<Copyright>;
  linkSections: Array<LinkSections>;
  logo: SiteImage;
};

export type SiteImage = {
  __typename?: 'SiteImage';
  altText?: Maybe<Scalars['String']>;
  url: Scalars['String'];
};

export type SiteInformaBar = {
  __typename?: 'SiteInformaBar';
  enabled: Scalars['Boolean'];
  leftSection?: Maybe<InformaBarLeftSection>;
  rightSection?: Maybe<InformaBarRightSection>;
};

export type SiteLink = {
  __typename?: 'SiteLink';
  image: LinkImage;
  openInNewTab?: Maybe<Scalars['Boolean']>;
  title: Scalars['String'];
  url: Scalars['String'];
};

export type SiteMegaMenu = {
  __typename?: 'SiteMegaMenu';
  largeMenu: Array<LargeMenu>;
  smallMenu: Array<SmallMenu>;
};

export type SiteNavigation = {
  __typename?: 'SiteNavigation';
  informaBar?: Maybe<SiteInformaBar>;
  logo: SiteImage;
  mainMenuItems: Array<MainMenuItem>;
  megaMenu?: Maybe<SiteMegaMenu>;
  secondaryMenu: Array<SimpleLink>;
  sideNavSections: Array<SideNavSections>;
};

export type Slideshow = {
  __typename?: 'Slideshow';
  atAGlance: Array<FieldGroupAtAGlance>;
  authoredBy?: Maybe<Scalars['String']>;
  authoredOn?: Maybe<Scalars['String']>;
  body: Scalars['String'];
  bodyJson: Scalars['JSON'];
  buyersJourney?: Maybe<Scalars['String']>;
  contentFormat?: Maybe<Array<ContentFormat>>;
  contentTypeUid: Scalars['String'];
  contributor?: Maybe<Array<Contributor>>;
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  featuredImageGroup?: Maybe<FeaturedImage>;
  keywords?: Maybe<Array<Keyword>>;
  locale?: Maybe<Scalars['String']>;
  mobileHeadline: Scalars['String'];
  newsletterSignUpPromo?: Maybe<NewsletterSignUpPromo>;
  oldUrl?: Maybe<Scalars['String']>;
  publishedDate: Scalars['DateTime'];
  readTime: Scalars['Float'];
  relatedEvents?: Maybe<Array<Event>>;
  relatedInlineContent?: Maybe<Array<RelatedInlineContents>>;
  seo: Seo;
  seriesTaxonomy?: Maybe<Array<SeriesTaxonomy>>;
  slideshow?: Maybe<Array<SlideshowCollection>>;
  sponsorshipGatingGroup?: Maybe<SponsorshipGatingGroup>;
  subbrand?: Maybe<SubBrand>;
  summary: Scalars['String'];
  summaryJson: Scalars['JSON'];
  /** @deprecated Soon will be replaced by topicSelector */
  termSelector: TermSelector;
  title: Scalars['String'];
  topicSelector: TopicSelector;
  uid: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  url: Scalars['String'];
};

export type SlideshowCollection = {
  __typename?: 'SlideshowCollection';
  slideEmbed?: Maybe<Scalars['String']>;
  slideImage?: Maybe<File>;
  slideImageAltText?: Maybe<Scalars['String']>;
  slideImageCaption?: Maybe<Scalars['String']>;
  slideImageCredit?: Maybe<Scalars['String']>;
  slideImageDescription?: Maybe<Scalars['String']>;
  slideImageDescriptionJson: Scalars['JSON'];
  slideTitle?: Maybe<Scalars['String']>;
};

export type SlideshowPage = {
  __typename?: 'SlideshowPage';
  items: Array<Slideshow>;
  meta: SlideshowPageMeta;
};

export type SlideshowPageMeta = {
  __typename?: 'SlideshowPageMeta';
  pagination: PaginationPage;
};

export type SmallMenu = {
  __typename?: 'SmallMenu';
  subMenu?: Maybe<Array<SimpleLink>>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SocialLinks = {
  __typename?: 'SocialLinks';
  facebookLink?: Maybe<Link>;
  instagramLink?: Maybe<Link>;
  linkedinLink?: Maybe<Link>;
  twitterLink?: Maybe<Link>;
};

export enum SortType {
  Newest = 'newest',
  Oldest = 'oldest',
  Relevance = 'relevance'
}

export type Sponsor = {
  __typename?: 'Sponsor';
  body?: Maybe<Scalars['String']>;
  bodyJson?: Maybe<Scalars['JSON']>;
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  logoGroup?: Maybe<SponsorLogoGroup>;
  publishedDate: Scalars['DateTime'];
  seo: Seo;
  sponsorUrl?: Maybe<Scalars['String']>;
  summary: Scalars['String'];
  summaryJson: Scalars['JSON'];
  title: Scalars['String'];
  uid: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SponsorContentSettingInput = {
  sponsorshipGatingSponsorFlag?: Maybe<Scalars['Boolean']>;
};

export type SponsorLogoGroup = {
  __typename?: 'SponsorLogoGroup';
  image?: Maybe<File>;
  imageAltText: Scalars['String'];
};

export type SponsorWhereInput = {
  uid?: Maybe<Scalars['String']>;
  uidIn?: Maybe<Array<Scalars['String']>>;
  url?: Maybe<Scalars['String']>;
  urlIn?: Maybe<Array<Scalars['String']>>;
};

export type SponsorshipGatingGroup = {
  __typename?: 'SponsorshipGatingGroup';
  sponsorshipGatingCampaignUrl?: Maybe<Scalars['String']>;
  sponsorshipGatingExternalFormId?: Maybe<Scalars['String']>;
  sponsorshipGatingGateExternalFieldFlag: AllowedSponsorshipGatingGroupExternalForm;
  sponsorshipGatingGateRegFlag: Scalars['Boolean'];
  sponsorshipGatingSponsorFlag?: Maybe<Scalars['Boolean']>;
  sponsorshipGatingSponsorReference?: Maybe<Array<Sponsor>>;
};

export type State = {
  __typename?: 'State';
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type StateWhereInput = {
  code?: Maybe<Scalars['String']>;
  codeIn?: Maybe<Array<Scalars['String']>>;
  name?: Maybe<Scalars['String']>;
  nameIn?: Maybe<Array<Scalars['String']>>;
};

export type SubBrand = {
  __typename?: 'SubBrand';
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  seo: Seo;
  subbrandLogoGroup: SubBrandLogo;
  title: Scalars['String'];
  uid: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SubBrandLogo = {
  __typename?: 'SubBrandLogo';
  subbrandImage: File;
  subbrandImageAltText: Scalars['String'];
};

export type SubMenuItem = {
  __typename?: 'SubMenuItem';
  mainSectionLink?: Maybe<Array<SimpleLink>>;
  mainSeeAllLink?: Maybe<SimpleLink>;
  mainSubmenuTitle?: Maybe<Scalars['String']>;
};

export type Subbrand = {
  __typename?: 'Subbrand';
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  links?: Maybe<Array<SectionLinkSubBrand>>;
  locale?: Maybe<Scalars['String']>;
  seo: Seo;
  subbrandLogoGroup: SubbrandImage;
  title: Scalars['String'];
  uid: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SubbrandImage = {
  __typename?: 'SubbrandImage';
  subbrandImage: File;
  subbrandImageAltText: Scalars['String'];
};

export type SubbrandPage = {
  __typename?: 'SubbrandPage';
  items: Array<Content>;
  meta: SubbrandPageMeta;
};

export type SubbrandPageMeta = {
  __typename?: 'SubbrandPageMeta';
  entry?: Maybe<SubBrand>;
  pagination: PaginationPage;
};

export type SubbrandWhereInput = {
  title?: Maybe<Scalars['String']>;
  titleIn?: Maybe<Array<Scalars['String']>>;
  uid?: Maybe<Scalars['String']>;
  uidIn?: Maybe<Array<Scalars['String']>>;
  url?: Maybe<Scalars['String']>;
  urlIn?: Maybe<Array<Scalars['String']>>;
};

export type TermSelector = {
  __typename?: 'TermSelector';
  historyOfPrimaryTerm: Array<Scalars['String']>;
  primaryCategoryBelonged?: Maybe<Scalars['String']>;
  primaryTerm: Scalars['String'];
  primaryTermInRealText: Scalars['String'];
  secondaryTerm?: Maybe<Array<Scalars['String']>>;
};

export type ThreeColumnSection = {
  __typename?: 'ThreeColumnSection';
  ctaButton?: Maybe<CtaButtonLink>;
  dynamicRecentContent?: Maybe<DynamicRecentContentThreeColumn>;
  manualCuratedContentGroup?: Maybe<Array<SearchContent>>;
  settingOption: Scalars['String'];
  title: Scalars['String'];
};

export type TopicEntry = TopicPrimary | TopicSecondary | TopicTertiary;

export type TopicPage = {
  __typename?: 'TopicPage';
  items: Array<Content>;
  meta: TopicPageMeta;
};

export type TopicPageMeta = {
  __typename?: 'TopicPageMeta';
  breadCrumb?: Maybe<Array<BreadCrumb>>;
  entry?: Maybe<TopicEntry>;
  pagination: PaginationPage;
};

export type TopicPrimary = {
  __typename?: 'TopicPrimary';
  contentTypeUid: Scalars['String'];
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  icon?: Maybe<Image>;
  locale?: Maybe<Scalars['String']>;
  secondaryTopics?: Maybe<Array<TopicSecondary>>;
  seo: Seo;
  title: Scalars['String'];
  topicPageDescription?: Maybe<Scalars['String']>;
  uid: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  url: Scalars['String'];
};

export type TopicPrimaryWhereInput = {
  uid?: Maybe<Scalars['String']>;
  uidIn?: Maybe<Array<Scalars['String']>>;
  url?: Maybe<Scalars['String']>;
  urlIn?: Maybe<Array<Scalars['String']>>;
};

export type TopicSecondary = {
  __typename?: 'TopicSecondary';
  contentTypeUid: Scalars['String'];
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  icon?: Maybe<Image>;
  locale?: Maybe<Scalars['String']>;
  parentTopic?: Maybe<TopicPrimary>;
  seo: Seo;
  tertiaryTopics?: Maybe<Array<TopicTertiary>>;
  title: Scalars['String'];
  topicPageDescription?: Maybe<Scalars['String']>;
  uid: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  url: Scalars['String'];
};

export type TopicSecondaryWhereInput = {
  uid?: Maybe<Scalars['String']>;
  uidIn?: Maybe<Array<Scalars['String']>>;
  url?: Maybe<Scalars['String']>;
  urlIn?: Maybe<Array<Scalars['String']>>;
};

export type TopicSelector = {
  __typename?: 'TopicSelector';
  additionalTopics?: Maybe<Array<TopicUnion>>;
  mainTopic: TopicUnion;
};

export type TopicTertiary = {
  __typename?: 'TopicTertiary';
  contentTypeUid: Scalars['String'];
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  icon?: Maybe<Image>;
  locale?: Maybe<Scalars['String']>;
  parentTopic?: Maybe<TopicSecondary>;
  seo: Seo;
  title: Scalars['String'];
  topicPageDescription?: Maybe<Scalars['String']>;
  uid: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  url: Scalars['String'];
};

export type TopicTertiaryWhereInput = {
  uid?: Maybe<Scalars['String']>;
  uidIn?: Maybe<Array<Scalars['String']>>;
  url?: Maybe<Scalars['String']>;
  urlIn?: Maybe<Array<Scalars['String']>>;
};

export type TopicUnion = TopicPrimary | TopicSecondary | TopicTertiary;

export type Video = {
  __typename?: 'Video';
  atAGlance: Array<FieldGroupAtAGlance>;
  authoredBy?: Maybe<Scalars['String']>;
  authoredOn?: Maybe<Scalars['String']>;
  body: Scalars['String'];
  bodyJson: Scalars['JSON'];
  contentFormat?: Maybe<Array<ContentFormat>>;
  contentTypeUid: Scalars['String'];
  contributor?: Maybe<Array<Contributor>>;
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  featuredImageGroup?: Maybe<FeaturedImage>;
  keywords?: Maybe<Array<Keyword>>;
  locale?: Maybe<Scalars['String']>;
  mobileHeadline: Scalars['String'];
  newsletterSignUpPromo?: Maybe<NewsletterSignUpPromo>;
  oldUrl?: Maybe<Scalars['String']>;
  publishedDate: Scalars['DateTime'];
  readTime: Scalars['Float'];
  relatedEvents?: Maybe<Array<Event>>;
  relatedInlineContent?: Maybe<Array<RelatedInlineContents>>;
  seo: Seo;
  seriesTaxonomy?: Maybe<Array<SeriesTaxonomy>>;
  sponsorshipGatingGroup?: Maybe<SponsorshipGatingGroup>;
  subbrand?: Maybe<SubBrand>;
  summary: Scalars['String'];
  summaryJson: Scalars['JSON'];
  /** @deprecated Soon will be replaced by topicSelector */
  termSelector: TermSelector;
  title: Scalars['String'];
  topicSelector: TopicSelector;
  uid: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  url: Scalars['String'];
  video?: Maybe<FieldGroupVideo>;
};

export type VideoPage = {
  __typename?: 'VideoPage';
  items: Array<Video>;
  meta: VideoPageMeta;
};

export type VideoPageMeta = {
  __typename?: 'VideoPageMeta';
  pagination: PaginationPage;
};

export type Weather = {
  __typename?: 'Weather';
  currentCondition: Scalars['String'];
  currentConditionIcon: Scalars['String'];
  currentTemperature: Scalars['String'];
  forecastHighTemperature: Scalars['String'];
  forecastLowTemperature: Scalars['String'];
  location: Scalars['String'];
  weatherType: Scalars['String'];
  windDirection: Scalars['String'];
  windSpeed: Scalars['String'];
  zipCode: Scalars['String'];
};

export type WeatherPageWhereInput = {
  zipCode: Scalars['String'];
};

export type Webinar = {
  __typename?: 'Webinar';
  atAGlance: Array<FieldGroupAtAGlance>;
  authoredBy?: Maybe<Scalars['String']>;
  authoredOn?: Maybe<Scalars['String']>;
  body: Scalars['String'];
  bodyJson: Scalars['JSON'];
  contentFormat?: Maybe<Array<ContentFormat>>;
  contentTypeUid: Scalars['String'];
  contributor?: Maybe<Array<Contributor>>;
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  featuredImageGroup?: Maybe<FeaturedImage>;
  keywords?: Maybe<Array<Keyword>>;
  locale?: Maybe<Scalars['String']>;
  mobileHeadline: Scalars['String'];
  newsletterSignUpPromo?: Maybe<NewsletterSignUpPromo>;
  oldUrl?: Maybe<Scalars['String']>;
  optionToAddMultipleLineTimesOfMaterials?: Maybe<File>;
  publishedDate: Scalars['DateTime'];
  readTime: Scalars['Float'];
  relatedEvents?: Maybe<Array<Event>>;
  relatedInlineContent?: Maybe<Array<RelatedInlineContents>>;
  seo: Seo;
  seriesTaxonomy?: Maybe<Array<SeriesTaxonomy>>;
  shortGlanceVersions?: Maybe<Scalars['String']>;
  speaker?: Maybe<Array<Contributor>>;
  sponsorshipGatingGroup?: Maybe<SponsorshipGatingGroup>;
  subbrand?: Maybe<SubBrand>;
  summary: Scalars['String'];
  summaryJson: Scalars['JSON'];
  /** @deprecated Soon will be replaced by topicSelector */
  termSelector: TermSelector;
  title: Scalars['String'];
  topicSelector: TopicSelector;
  uid: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  url: Scalars['String'];
  webinarGroup?: Maybe<WebinarGroup>;
  webinarMaterialResourceUploadLink?: Maybe<File>;
};

export type WebinarGroup = {
  __typename?: 'WebinarGroup';
  duration?: Maybe<FieldGroupDuration>;
  multipleLineMaterials?: Maybe<File>;
  on24WebinarEventId?: Maybe<Scalars['String']>;
  on24WebinarKey?: Maybe<Scalars['String']>;
  webinarId?: Maybe<Scalars['String']>;
  webinarMaterialResourceUploadLink?: Maybe<File>;
  webinarMaterialTitle?: Maybe<Scalars['String']>;
  webinarMaterialUrl?: Maybe<Scalars['String']>;
  webinarService?: Maybe<Scalars['String']>;
  webinarStartDateAndTime?: Maybe<Scalars['DateTime']>;
  webinarTimezone?: Maybe<Scalars['String']>;
  webinarUrl?: Maybe<Scalars['String']>;
};

export type WebinarPage = {
  __typename?: 'WebinarPage';
  items: Array<Webinar>;
  meta: WebinarPageMeta;
};

export type WebinarPageMeta = {
  __typename?: 'WebinarPageMeta';
  pagination: PaginationPage;
};

export type WhitePaperPage = {
  __typename?: 'WhitePaperPage';
  items: Array<Document>;
  meta: WhitePaperPageMeta;
};

export type WhitePaperPageMeta = {
  __typename?: 'WhitePaperPageMeta';
  pagination: PaginationPage;
};

export type DatahubUserDatastoreProperties = {
  __typename?: 'datahubUserDatastoreProperties';
  eventEditionCode?: Maybe<Scalars['String']>;
};

export type EloquaUserDatastoreProperties = {
  __typename?: 'eloquaUserDatastoreProperties';
  defaultEntitlementFormId?: Maybe<Scalars['String']>;
  newsletterFormId?: Maybe<Scalars['String']>;
};

export type HubspotUserdataStoreProperties = {
  __typename?: 'hubspotUserdataStoreProperties';
  defaultEntitlementFormId?: Maybe<Scalars['String']>;
  hubspotDefaultFieldMapperForAllForms?: Maybe<Scalars['String']>;
  hubspotFieldMapperByForm?: Maybe<Scalars['String']>;
  newsletterFormId?: Maybe<Scalars['String']>;
};

export type PlaceholderImageGroup = {
  __typename?: 'placeholderImageGroup';
  article?: Maybe<File>;
  contributor?: Maybe<File>;
};

export type ContentFormatItemFragment = (
  { __typename?: 'ContentFormat' }
  & Pick<ContentFormat, 'title' | 'pageDescription'>
);

export type ContributorItemFragment = (
  { __typename?: 'Contributor' }
  & Pick<Contributor, 'title' | 'contributorName' | 'contributorDescriptionJson' | 'contributorRole' | 'contributorCompanyName' | 'url'>
  & { contributorImage?: Maybe<(
    { __typename?: 'ContributorImage' }
    & Pick<ContributorImage, 'imageAltText'>
    & { image?: Maybe<(
      { __typename?: 'ContributorImageFile' }
      & Pick<ContributorImageFile, 'url'>
    )> }
  )> }
);

export type FeaturedImageItemFragment = (
  { __typename?: 'FeaturedImage' }
  & Pick<FeaturedImage, 'featuredImageCredit' | 'featuredImageCaption' | 'imageAltText'>
  & { featuredImage?: Maybe<(
    { __typename?: 'File' }
    & Pick<File, 'url'>
  )> }
);

export type KeywordItemFragment = (
  { __typename?: 'Keyword' }
  & Pick<Keyword, 'title' | 'url'>
);

export type ModuleEventPromoFragment = (
  { __typename?: 'ModuleEventPromo' }
  & Pick<ModuleEventPromo, 'createdAt' | 'createdBy' | 'locale' | 'title' | 'uid' | 'updatedAt' | 'updatedBy'>
  & { background?: Maybe<(
    { __typename?: 'BackgroundEventPromo' }
    & Pick<BackgroundEventPromo, 'backgroundColor' | 'backgroundImageAltText'>
    & { backgroundImage?: Maybe<(
      { __typename?: 'File' }
      & Pick<File, 'url'>
    )> }
  )>, event: Array<(
    { __typename?: 'Event' }
    & Pick<Event, 'contentTypeUid' | 'createdAt' | 'createdBy' | 'eventDescription' | 'locale' | 'publishedDate' | 'title' | 'uid' | 'updatedAt' | 'updatedBy' | 'url'>
    & { eventDetails: (
      { __typename?: 'FieldGroupEventDetails' }
      & Pick<FieldGroupEventDetails, 'endDate' | 'eventType' | 'eventUrl' | 'location' | 'startDate'>
      & { buttons?: Maybe<Array<(
        { __typename?: 'EventButton' }
        & Pick<EventButton, 'buttonLink' | 'buttonName'>
      )>>, eventLogo: (
        { __typename?: 'FieldGroupEventLogo' }
        & Pick<FieldGroupEventLogo, 'eventLogoAlt'>
        & { logoFile?: Maybe<(
          { __typename?: 'File' }
          & Pick<File, 'url'>
        )> }
      ) }
    ), publishDetails?: Maybe<(
      { __typename?: 'PublishDetails' }
      & Pick<PublishDetails, 'locale' | 'time'>
    )>, seo: (
      { __typename?: 'Seo' }
      & Pick<Seo, 'canonicalUrl' | 'metaDescription' | 'metaTitle' | 'noIndex'>
    ) }
  )> }
);

export type NewsletterSignUpPromoItemFragment = (
  { __typename?: 'NewsletterSignUpPromo' }
  & Pick<NewsletterSignUpPromo, 'message' | 'newsletterId' | 'title'>
);

export type RelatedEventItemFragment = (
  { __typename?: 'Event' }
  & Pick<Event, 'title' | 'uid'>
  & { eventDetails: (
    { __typename?: 'FieldGroupEventDetails' }
    & Pick<FieldGroupEventDetails, 'startDate' | 'endDate' | 'eventUrl' | 'eventType' | 'location'>
  ) }
);

export type RelatedInlineContentsItemFragment = (
  { __typename?: 'RelatedInlineContents' }
  & { relatedItem?: Maybe<Array<(
    { __typename?: 'RelatedInlineContentTypeRef' }
    & Pick<RelatedInlineContentTypeRef, 'title' | 'url'>
  )>> }
);

export type SeoItemFragment = (
  { __typename?: 'Seo' }
  & Pick<Seo, 'canonicalUrl' | 'metaDescription' | 'metaTitle' | 'noIndex'>
);

export type SeriesTaxonomyItemFragment = (
  { __typename?: 'SeriesTaxonomy' }
  & Pick<SeriesTaxonomy, 'uid' | 'title' | 'url'>
);

export type SponsorshipGatingGroupItemFragment = (
  { __typename?: 'SponsorshipGatingGroup' }
  & Pick<SponsorshipGatingGroup, 'sponsorshipGatingExternalFormId' | 'sponsorshipGatingGateExternalFieldFlag' | 'sponsorshipGatingGateRegFlag' | 'sponsorshipGatingSponsorFlag' | 'sponsorshipGatingCampaignUrl'>
  & { sponsorshipGatingSponsorReference?: Maybe<Array<(
    { __typename?: 'Sponsor' }
    & Pick<Sponsor, 'sponsorUrl' | 'title'>
    & { logoGroup?: Maybe<(
      { __typename?: 'SponsorLogoGroup' }
      & Pick<SponsorLogoGroup, 'imageAltText'>
      & { image?: Maybe<(
        { __typename?: 'File' }
        & Pick<File, 'url'>
      )> }
    )> }
  )>> }
);

export type SubBrandItemFragment = (
  { __typename?: 'SubBrand' }
  & Pick<SubBrand, 'url' | 'title'>
  & { subbrandLogoGroup: (
    { __typename?: 'SubBrandLogo' }
    & Pick<SubBrandLogo, 'subbrandImageAltText'>
    & { subbrandImage: (
      { __typename?: 'File' }
      & Pick<File, 'url'>
    ) }
  ) }
);

export type ArticleTopicItemFragment = (
  { __typename: 'Article' }
  & Pick<Article, 'contentTypeUid' | 'createdAt' | 'title' | 'summary' | 'url' | 'readTime' | 'publishedDate'>
  & { keywords?: Maybe<Array<(
    { __typename?: 'Keyword' }
    & Pick<Keyword, 'title' | 'url'>
  )>>, featuredImageGroup?: Maybe<(
    { __typename?: 'FeaturedImage' }
    & FeaturedImageItemFragment
  )>, contributor?: Maybe<Array<(
    { __typename?: 'Contributor' }
    & ContributorItemFragment
  )>>, topicSelector: (
    { __typename?: 'TopicSelector' }
    & TopicSelectorItemFragment
  ) }
);

export type DocumentTopicItemFragment = (
  { __typename: 'Document' }
  & Pick<Document, 'contentTypeUid' | 'createdAt' | 'title' | 'summary' | 'url' | 'readTime' | 'publishedDate'>
  & { featuredImageGroup?: Maybe<(
    { __typename?: 'FeaturedImage' }
    & FeaturedImageItemFragment
  )>, contributor?: Maybe<Array<(
    { __typename?: 'Contributor' }
    & ContributorItemFragment
  )>>, topicSelector: (
    { __typename?: 'TopicSelector' }
    & TopicSelectorItemFragment
  ), keywords?: Maybe<Array<(
    { __typename?: 'Keyword' }
    & Pick<Keyword, 'title' | 'url'>
  )>> }
);

export type VideoTopicItemFragment = (
  { __typename: 'Video' }
  & Pick<Video, 'contentTypeUid' | 'createdAt' | 'title' | 'summary' | 'url' | 'readTime' | 'publishedDate'>
  & { featuredImageGroup?: Maybe<(
    { __typename?: 'FeaturedImage' }
    & FeaturedImageItemFragment
  )>, contributor?: Maybe<Array<(
    { __typename?: 'Contributor' }
    & ContributorItemFragment
  )>>, topicSelector: (
    { __typename?: 'TopicSelector' }
    & TopicSelectorItemFragment
  ), keywords?: Maybe<Array<(
    { __typename?: 'Keyword' }
    & Pick<Keyword, 'title' | 'url'>
  )>>, video?: Maybe<(
    { __typename?: 'FieldGroupVideo' }
    & { duration?: Maybe<(
      { __typename?: 'FieldGroupDuration' }
      & Pick<FieldGroupDuration, 'duration'>
    )> }
  )> }
);

export type SlideshowTopicItemFragment = (
  { __typename: 'Slideshow' }
  & Pick<Slideshow, 'contentTypeUid' | 'createdAt' | 'title' | 'summary' | 'url' | 'readTime' | 'publishedDate'>
  & { featuredImageGroup?: Maybe<(
    { __typename?: 'FeaturedImage' }
    & FeaturedImageItemFragment
  )>, contributor?: Maybe<Array<(
    { __typename?: 'Contributor' }
    & ContributorItemFragment
  )>>, topicSelector: (
    { __typename?: 'TopicSelector' }
    & TopicSelectorItemFragment
  ), keywords?: Maybe<Array<(
    { __typename?: 'Keyword' }
    & Pick<Keyword, 'title' | 'url'>
  )>>, slideshow?: Maybe<Array<(
    { __typename?: 'SlideshowCollection' }
    & Pick<SlideshowCollection, 'slideTitle'>
  )>> }
);

export type WebinarTopicItemFragment = (
  { __typename: 'Webinar' }
  & Pick<Webinar, 'contentTypeUid' | 'createdAt' | 'title' | 'summary' | 'url' | 'readTime' | 'publishedDate'>
  & { featuredImageGroup?: Maybe<(
    { __typename?: 'FeaturedImage' }
    & FeaturedImageItemFragment
  )>, contributor?: Maybe<Array<(
    { __typename?: 'Contributor' }
    & ContributorItemFragment
  )>>, topicSelector: (
    { __typename?: 'TopicSelector' }
    & TopicSelectorItemFragment
  ), keywords?: Maybe<Array<(
    { __typename?: 'Keyword' }
    & Pick<Keyword, 'title' | 'url'>
  )>>, webinarGroup?: Maybe<(
    { __typename?: 'WebinarGroup' }
    & { duration?: Maybe<(
      { __typename?: 'FieldGroupDuration' }
      & Pick<FieldGroupDuration, 'duration'>
    )> }
  )> }
);

export type PodcastTopicItemFragment = (
  { __typename: 'Podcast' }
  & Pick<Podcast, 'contentTypeUid' | 'createdAt' | 'title' | 'summary' | 'url' | 'readTime' | 'publishedDate'>
  & { featuredImageGroup?: Maybe<(
    { __typename?: 'FeaturedImage' }
    & FeaturedImageItemFragment
  )>, contributor?: Maybe<Array<(
    { __typename?: 'Contributor' }
    & ContributorItemFragment
  )>>, topicSelector: (
    { __typename?: 'TopicSelector' }
    & TopicSelectorItemFragment
  ), keywords?: Maybe<Array<(
    { __typename?: 'Keyword' }
    & Pick<Keyword, 'title' | 'url'>
  )>>, podcast: (
    { __typename?: 'FieldGroupPodcast' }
    & { duration?: Maybe<(
      { __typename?: 'FieldGroupDuration' }
      & Pick<FieldGroupDuration, 'duration'>
    )> }
  ) }
);

export type MagazineTopicItemFragment = (
  { __typename: 'Magazine' }
  & Pick<Magazine, 'contentTypeUid' | 'createdAt' | 'title' | 'summary' | 'url' | 'readTime' | 'publishedDate'>
  & { featuredImageGroup?: Maybe<(
    { __typename?: 'FeaturedImage' }
    & FeaturedImageItemFragment
  )>, contributor?: Maybe<Array<(
    { __typename?: 'Contributor' }
    & ContributorItemFragment
  )>>, topicSelector: (
    { __typename?: 'TopicSelector' }
    & TopicSelectorItemFragment
  ), keywords?: Maybe<Array<(
    { __typename?: 'Keyword' }
    & Pick<Keyword, 'title' | 'url'>
  )>> }
);

export type EventTopicItemFragment = (
  { __typename: 'Event' }
  & Pick<Event, 'contentTypeUid' | 'createdAt' | 'title' | 'url' | 'publishedDate'>
  & { eventDetails: (
    { __typename?: 'FieldGroupEventDetails' }
    & Pick<FieldGroupEventDetails, 'startDate' | 'endDate' | 'eventType' | 'eventUrl'>
    & { buttons?: Maybe<Array<(
      { __typename?: 'EventButton' }
      & Pick<EventButton, 'buttonLink' | 'buttonName'>
    )>>, eventLogo: (
      { __typename?: 'FieldGroupEventLogo' }
      & Pick<FieldGroupEventLogo, 'eventLogoAlt'>
      & { logoFile?: Maybe<(
        { __typename?: 'File' }
        & Pick<File, 'url'>
      )> }
    ) }
  ) }
);

export type ExternalLinkTopicItemFragment = (
  { __typename: 'ExternalLink' }
  & Pick<ExternalLink, 'contentTypeUid' | 'createdAt' | 'title' | 'summary' | 'url' | 'publishedDate'>
  & { featuredImageGroup?: Maybe<(
    { __typename?: 'FeaturedImage' }
    & FeaturedImageItemFragment
  )>, contributor?: Maybe<Array<(
    { __typename?: 'Contributor' }
    & ContributorItemFragment
  )>>, keywords?: Maybe<Array<(
    { __typename?: 'Keyword' }
    & Pick<Keyword, 'title' | 'url'>
  )>> }
);

export type TopicSelectorItemFragment = (
  { __typename?: 'TopicSelector' }
  & { mainTopic: (
    { __typename: 'TopicPrimary' }
    & Pick<TopicPrimary, 'title' | 'url'>
  ) | (
    { __typename: 'TopicSecondary' }
    & Pick<TopicSecondary, 'title' | 'url'>
    & { parentTopic?: Maybe<(
      { __typename?: 'TopicPrimary' }
      & Pick<TopicPrimary, 'title'>
    )> }
  ) | (
    { __typename: 'TopicTertiary' }
    & Pick<TopicTertiary, 'title' | 'url'>
    & { parentTopic?: Maybe<(
      { __typename?: 'TopicSecondary' }
      & Pick<TopicSecondary, 'title'>
      & { parentTopic?: Maybe<(
        { __typename?: 'TopicPrimary' }
        & Pick<TopicPrimary, 'title'>
      )> }
    )> }
  ), additionalTopics?: Maybe<Array<(
    { __typename: 'TopicPrimary' }
    & Pick<TopicPrimary, 'title' | 'url'>
  ) | (
    { __typename: 'TopicSecondary' }
    & Pick<TopicSecondary, 'title' | 'url'>
    & { parentTopic?: Maybe<(
      { __typename?: 'TopicPrimary' }
      & Pick<TopicPrimary, 'title'>
    )> }
  ) | (
    { __typename: 'TopicTertiary' }
    & Pick<TopicTertiary, 'title' | 'url'>
    & { parentTopic?: Maybe<(
      { __typename?: 'TopicSecondary' }
      & Pick<TopicSecondary, 'title'>
      & { parentTopic?: Maybe<(
        { __typename?: 'TopicPrimary' }
        & Pick<TopicPrimary, 'title'>
      )> }
    )> }
  )>> }
);

export type GetBasicPageQueryVariables = Exact<{
  url: Scalars['String'];
}>;


export type GetBasicPageQuery = (
  { __typename?: 'Query' }
  & { page_basic: (
    { __typename?: 'BasicPageContent' }
    & { content: (
      { __typename?: 'BasicPage' }
      & Pick<BasicPage, 'bodyJson' | 'title' | 'uid' | 'url'>
      & { seo: (
        { __typename?: 'Seo' }
        & SeoItemFragment
      ) }
    ) }
  ) }
);

export type GetContentFormatListQueryVariables = Exact<{
  url: Scalars['String'];
  page: Scalars['Int'];
}>;


export type GetContentFormatListQuery = (
  { __typename?: 'Query' }
  & { page_content_format: (
    { __typename?: 'ContentFormatPage' }
    & { items: Array<(
      { __typename?: 'Article' }
      & ArticleTopicItemFragment
    ) | (
      { __typename?: 'Document' }
      & DocumentTopicItemFragment
    ) | (
      { __typename?: 'Podcast' }
      & PodcastTopicItemFragment
    ) | (
      { __typename?: 'Slideshow' }
      & SlideshowTopicItemFragment
    ) | (
      { __typename?: 'Video' }
      & VideoTopicItemFragment
    ) | (
      { __typename?: 'Webinar' }
      & WebinarTopicItemFragment
    )>, meta: (
      { __typename?: 'ContentFormatPageMeta' }
      & { pagination: (
        { __typename?: 'PaginationPage' }
        & Pick<PaginationPage, 'limit' | 'page' | 'total' | 'totalPage'>
      ), entry?: Maybe<(
        { __typename?: 'ContentFormat' }
        & Pick<ContentFormat, 'createdAt' | 'createdBy' | 'locale' | 'pageDescription' | 'title' | 'uid' | 'url'>
        & { seo: (
          { __typename?: 'Seo' }
          & SeoItemFragment
        ) }
      )> }
    ) }
  ) }
);

export type GetContributorQueryVariables = Exact<{
  url: Scalars['String'];
  page: Scalars['Int'];
}>;


export type GetContributorQuery = (
  { __typename?: 'Query' }
  & { page_contributor: (
    { __typename?: 'ContributorPage' }
    & { items: Array<(
      { __typename?: 'Article' }
      & ArticleTopicItemFragment
    ) | (
      { __typename?: 'Document' }
      & DocumentTopicItemFragment
    ) | (
      { __typename?: 'Podcast' }
      & PodcastTopicItemFragment
    ) | (
      { __typename?: 'Slideshow' }
      & SlideshowTopicItemFragment
    ) | (
      { __typename?: 'Video' }
      & VideoTopicItemFragment
    ) | (
      { __typename?: 'Webinar' }
      & WebinarTopicItemFragment
    )>, meta: (
      { __typename?: 'ContributorPageMeta' }
      & { pagination: (
        { __typename?: 'PaginationPage' }
        & Pick<PaginationPage, 'limit' | 'page' | 'total' | 'totalPage'>
      ), entry?: Maybe<(
        { __typename?: 'Contributor' }
        & Pick<Contributor, 'url' | 'contributorName' | 'contributorRole' | 'contributorCompanyName' | 'contributorDescription' | 'contributorDescriptionJson' | 'uid'>
        & { seo: (
          { __typename?: 'Seo' }
          & SeoItemFragment
        ), contributorImage?: Maybe<(
          { __typename?: 'ContributorImage' }
          & Pick<ContributorImage, 'imageAltText'>
          & { image?: Maybe<(
            { __typename?: 'ContributorImageFile' }
            & Pick<ContributorImageFile, 'url'>
          )> }
        )>, socialLinks: (
          { __typename?: 'SocialLinks' }
          & { facebookLink?: Maybe<(
            { __typename?: 'Link' }
            & Pick<Link, 'href'>
          )>, instagramLink?: Maybe<(
            { __typename?: 'Link' }
            & Pick<Link, 'href'>
          )>, linkedinLink?: Maybe<(
            { __typename?: 'Link' }
            & Pick<Link, 'href'>
          )>, twitterLink?: Maybe<(
            { __typename?: 'Link' }
            & Pick<Link, 'href'>
          )> }
        ) }
      )> }
    ) }
  ) }
);

export type GetDocumentListQueryVariables = Exact<{
  page: Scalars['Int'];
}>;


export type GetDocumentListQuery = (
  { __typename?: 'Query' }
  & { page_whitepapers: (
    { __typename?: 'WhitePaperPage' }
    & { items: Array<(
      { __typename?: 'Document' }
      & DocumentTopicItemFragment
    )>, meta: (
      { __typename?: 'WhitePaperPageMeta' }
      & { pagination: (
        { __typename?: 'PaginationPage' }
        & Pick<PaginationPage, 'limit' | 'page' | 'total' | 'totalPage'>
      ) }
    ) }
  ) }
);

export type GetEventListQueryVariables = Exact<{
  page: Scalars['Int'];
}>;


export type GetEventListQuery = (
  { __typename?: 'Query' }
  & { page_events: (
    { __typename?: 'EventsPage' }
    & { meta: (
      { __typename?: 'EventsPageMeta' }
      & { pagination: (
        { __typename?: 'PaginationPage' }
        & Pick<PaginationPage, 'limit' | 'page' | 'total' | 'totalPage'>
      ) }
    ), items: Array<(
      { __typename?: 'Event' }
      & Pick<Event, 'title' | 'url' | 'eventDescription' | 'uid' | 'createdAt' | 'createdBy' | 'locale' | 'updatedAt' | 'updatedBy'>
      & { eventDetails: (
        { __typename?: 'FieldGroupEventDetails' }
        & Pick<FieldGroupEventDetails, 'startDate' | 'endDate' | 'eventType' | 'eventUrl' | 'location'>
        & { eventLogo: (
          { __typename?: 'FieldGroupEventLogo' }
          & Pick<FieldGroupEventLogo, 'eventLogoAlt'>
          & { logoFile?: Maybe<(
            { __typename?: 'File' }
            & Pick<File, 'url'>
          )> }
        ), buttons?: Maybe<Array<(
          { __typename?: 'EventButton' }
          & Pick<EventButton, 'buttonLink' | 'buttonName'>
        )>> }
      ), publishDetails?: Maybe<(
        { __typename?: 'PublishDetails' }
        & Pick<PublishDetails, 'locale' | 'time'>
      )>, seo: (
        { __typename?: 'Seo' }
        & SeoItemFragment
      ) }
    )> }
  ) }
);

export type GetGoogleNewsPageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGoogleNewsPageQuery = (
  { __typename?: 'Query' }
  & { page_google_news: (
    { __typename?: 'AllGoogleNewsPage' }
    & { items?: Maybe<Array<(
      { __typename?: 'GoogleNewsItem' }
      & Pick<GoogleNewsItem, 'title' | 'publicationDate' | 'language' | 'url' | 'uid' | 'description'>
      & { contributor: Array<(
        { __typename?: 'Contributor' }
        & Pick<Contributor, 'contributorName'>
      )>, image?: Maybe<(
        { __typename?: 'Image' }
        & Pick<Image, 'url'>
      )> }
    )>>, meta: (
      { __typename?: 'Meta' }
      & Pick<Meta, 'total'>
    ) }
  ) }
);

export type GetHomepageModuleIdsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHomepageModuleIdsQuery = (
  { __typename?: 'Query' }
  & { page_home: (
    { __typename?: 'HomePage' }
    & Pick<HomePage, 'title'>
    & { seo: (
      { __typename?: 'Seo' }
      & Pick<Seo, 'canonicalUrl' | 'metaDescription' | 'metaTitle' | 'noIndex'>
    ), modules?: Maybe<(
      { __typename?: 'MultipleModularBlocks' }
      & { moduleBlocks?: Maybe<Array<(
        { __typename?: 'MultipleModularBlockRef' }
        & Pick<MultipleModularBlockRef, 'uid' | 'contentTypeUid'>
      )>> }
    )> }
  ), navigation: (
    { __typename?: 'SiteNavigation' }
    & { logo: (
      { __typename?: 'SiteImage' }
      & Pick<SiteImage, 'url'>
    ) }
  ) }
);

export type GetKeywordListQueryVariables = Exact<{
  url: Scalars['String'];
  page: Scalars['Int'];
}>;


export type GetKeywordListQuery = (
  { __typename?: 'Query' }
  & { page_keyword: (
    { __typename?: 'KeywordPage' }
    & { items: Array<(
      { __typename?: 'Article' }
      & ArticleTopicItemFragment
    ) | (
      { __typename?: 'Document' }
      & DocumentTopicItemFragment
    ) | (
      { __typename?: 'Podcast' }
      & PodcastTopicItemFragment
    ) | (
      { __typename?: 'Slideshow' }
      & SlideshowTopicItemFragment
    ) | (
      { __typename?: 'Video' }
      & VideoTopicItemFragment
    ) | (
      { __typename?: 'Webinar' }
      & WebinarTopicItemFragment
    )>, meta: (
      { __typename?: 'KeywordPageMeta' }
      & { pagination: (
        { __typename?: 'PaginationPage' }
        & Pick<PaginationPage, 'limit' | 'page' | 'total' | 'totalPage'>
      ), entry?: Maybe<(
        { __typename?: 'Keyword' }
        & Pick<Keyword, 'title' | 'url' | 'uid'>
        & { seo: (
          { __typename?: 'Seo' }
          & SeoItemFragment
        ) }
      )> }
    ) }
  ) }
);

export type GetLayoutQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLayoutQuery = (
  { __typename?: 'Query' }
  & { navigation: (
    { __typename?: 'SiteNavigation' }
    & { mainMenuItems: Array<(
      { __typename?: 'MainMenuItem' }
      & Pick<MainMenuItem, 'title' | 'seeAllLink' | 'url' | 'seeAllLinkUrl' | 'hasSubMenu'>
      & { subMenu?: Maybe<Array<(
        { __typename?: 'SimpleLink' }
        & Pick<SimpleLink, 'title' | 'url'>
      )>>, recentContents: Array<(
        { __typename?: 'RecentContentEntry' }
        & Pick<RecentContentEntry, 'title' | 'summary' | 'image' | 'altText' | 'url' | 'publishedDate' | 'categoryName' | 'categoryUrl' | 'contentType' | 'duration' | 'readTime'>
      )> }
    )>, secondaryMenu: Array<(
      { __typename?: 'SimpleLink' }
      & Pick<SimpleLink, 'title' | 'url'>
    )>, logo: (
      { __typename?: 'SiteImage' }
      & Pick<SiteImage, 'url' | 'altText'>
    ), sideNavSections: Array<(
      { __typename?: 'SideNavSections' }
      & Pick<SideNavSections, 'title' | 'url' | 'seeAllLink' | 'seeAllLinkUrl'>
      & { subMenu: Array<(
        { __typename?: 'SimpleLink' }
        & Pick<SimpleLink, 'title' | 'url'>
      )> }
    )>, megaMenu?: Maybe<(
      { __typename?: 'SiteMegaMenu' }
      & { largeMenu: Array<(
        { __typename?: 'LargeMenu' }
        & Pick<LargeMenu, 'title' | 'url' | 'seeAllLink' | 'seeAllLinkUrl'>
        & { subMenu?: Maybe<Array<(
          { __typename?: 'SimpleLink' }
          & Pick<SimpleLink, 'title' | 'url'>
        )>> }
      )>, smallMenu: Array<(
        { __typename?: 'SmallMenu' }
        & Pick<SmallMenu, 'title' | 'url'>
        & { subMenu?: Maybe<Array<(
          { __typename?: 'SimpleLink' }
          & Pick<SimpleLink, 'title' | 'url'>
        )>> }
      )> }
    )>, informaBar?: Maybe<(
      { __typename?: 'SiteInformaBar' }
      & Pick<SiteInformaBar, 'enabled'>
      & { leftSection?: Maybe<(
        { __typename?: 'InformaBarLeftSection' }
        & Pick<InformaBarLeftSection, 'description'>
        & { subMenu?: Maybe<Array<(
          { __typename?: 'SimpleLink' }
          & Pick<SimpleLink, 'title' | 'url'>
        )>> }
      )>, rightSection?: Maybe<(
        { __typename?: 'InformaBarRightSection' }
        & Pick<InformaBarRightSection, 'description'>
      )> }
    )> }
  ), footer: (
    { __typename?: 'SiteFooter' }
    & { logo: (
      { __typename?: 'SiteImage' }
      & Pick<SiteImage, 'url' | 'altText'>
    ), linkSections: Array<(
      { __typename?: 'LinkSections' }
      & Pick<LinkSections, 'title' | 'type'>
      & { links: Array<(
        { __typename?: 'SiteLink' }
        & Pick<SiteLink, 'title' | 'url' | 'openInNewTab'>
        & { image: (
          { __typename?: 'LinkImage' }
          & Pick<LinkImage, 'url' | 'altText'>
        ) }
      )> }
    )>, brandLinks: Array<(
      { __typename?: 'SiteLink' }
      & Pick<SiteLink, 'title' | 'url' | 'openInNewTab'>
      & { image: (
        { __typename?: 'LinkImage' }
        & Pick<LinkImage, 'url' | 'altText'>
      ) }
    )>, copyright?: Maybe<(
      { __typename?: 'Copyright' }
      & { businessUnit: (
        { __typename?: 'BusinessUnit' }
        & Pick<BusinessUnit, 'url' | 'name' | 'logoUrl'>
      ), links: Array<(
        { __typename?: 'SiteLink' }
        & Pick<SiteLink, 'title' | 'url' | 'openInNewTab'>
        & { image: (
          { __typename?: 'LinkImage' }
          & Pick<LinkImage, 'url' | 'altText'>
        ) }
      )> }
    )> }
  ) }
);

export type GetModuleByIds1QueryVariables = Exact<{
  contentCardIds?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  contentSpotLighhtIds?: Maybe<Array<Scalars['String']> | Scalars['String']>;
}>;


export type GetModuleByIds1Query = (
  { __typename?: 'Query' }
  & { all_module_content_cards?: Maybe<(
    { __typename?: 'AllModuleContentCardsEntry' }
    & { entries: Array<(
      { __typename: 'ModuleContentCardsEntry' }
      & { items?: Maybe<Array<(
        { __typename: 'Article' }
        & ArticleTopicItemFragment
      ) | (
        { __typename: 'Document' }
        & DocumentTopicItemFragment
      ) | (
        { __typename: 'Event' }
        & EventTopicItemFragment
      ) | (
        { __typename: 'ExternalLink' }
        & ExternalLinkTopicItemFragment
      ) | (
        { __typename: 'Magazine' }
        & MagazineTopicItemFragment
      ) | (
        { __typename: 'Podcast' }
        & PodcastTopicItemFragment
      ) | (
        { __typename: 'Slideshow' }
        & SlideshowTopicItemFragment
      ) | (
        { __typename: 'Video' }
        & VideoTopicItemFragment
      ) | (
        { __typename: 'Webinar' }
        & WebinarTopicItemFragment
      )>>, meta: (
        { __typename?: 'MetaWithEntry' }
        & { entry: (
          { __typename?: 'ModuleContentCards' }
          & Pick<ModuleContentCards, 'contentDisplayOption' | 'settingOption' | 'title' | 'uid'>
        ) }
      ) }
    )> }
  )>, all_module_content_spotlight?: Maybe<(
    { __typename?: 'AllModuleContentSpotlightEntry' }
    & { entries?: Maybe<Array<(
      { __typename: 'ModuleContentSpotlight' }
      & Pick<ModuleContentSpotlight, 'uid' | 'title' | 'ctaButtonText' | 'promoLabel'>
      & { displayOptions?: Maybe<(
        { __typename?: 'DisplayOptions' }
        & Pick<DisplayOptions, 'darkLightToggle' | 'textAlignment' | 'textPosition'>
      )>, promotedContent?: Maybe<Array<(
        { __typename: 'Article' }
        & ArticleTopicItemFragment
      ) | (
        { __typename: 'Document' }
        & DocumentTopicItemFragment
      ) | (
        { __typename: 'Podcast' }
        & PodcastTopicItemFragment
      ) | (
        { __typename: 'Slideshow' }
        & SlideshowTopicItemFragment
      ) | (
        { __typename: 'Video' }
        & VideoTopicItemFragment
      ) | (
        { __typename: 'Webinar' }
        & WebinarTopicItemFragment
      )>> }
    )>> }
  )> }
);

export type GetModuleByIds2QueryVariables = Exact<{
  featuredIds?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  newsletterPromoIds?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  sectionPromoV2Ids?: Maybe<Array<Scalars['String']> | Scalars['String']>;
}>;


export type GetModuleByIds2Query = (
  { __typename?: 'Query' }
  & { all_module_featured?: Maybe<(
    { __typename?: 'AllModuleFeaturedEntry' }
    & { entries: Array<(
      { __typename: 'AllModuleFeaturedResult' }
      & { featured?: Maybe<Array<(
        { __typename: 'Article' }
        & ArticleTopicItemFragment
      ) | (
        { __typename: 'Document' }
        & DocumentTopicItemFragment
      ) | { __typename: 'ExternalLink' } | (
        { __typename: 'Magazine' }
        & MagazineTopicItemFragment
      ) | (
        { __typename: 'Podcast' }
        & PodcastTopicItemFragment
      ) | (
        { __typename: 'Slideshow' }
        & SlideshowTopicItemFragment
      ) | (
        { __typename: 'Video' }
        & VideoTopicItemFragment
      ) | (
        { __typename: 'Webinar' }
        & WebinarTopicItemFragment
      )>>, latest?: Maybe<Array<(
        { __typename: 'Article' }
        & ArticleTopicItemFragment
      ) | (
        { __typename: 'Document' }
        & DocumentTopicItemFragment
      ) | { __typename: 'ExternalLink' } | (
        { __typename: 'Magazine' }
        & MagazineTopicItemFragment
      ) | (
        { __typename: 'Podcast' }
        & PodcastTopicItemFragment
      ) | (
        { __typename: 'Slideshow' }
        & SlideshowTopicItemFragment
      ) | (
        { __typename: 'Video' }
        & VideoTopicItemFragment
      ) | (
        { __typename: 'Webinar' }
        & WebinarTopicItemFragment
      )>>, meta: (
        { __typename?: 'MetaWithEntryModuleFeatured' }
        & { entry: (
          { __typename?: 'ModuleFeatured' }
          & Pick<ModuleFeatured, 'title' | 'uid'>
        ) }
      ) }
    )> }
  )>, all_module_newsletter_promo?: Maybe<(
    { __typename?: 'AllModuleNewsletterPromoEntry' }
    & { entries?: Maybe<Array<(
      { __typename: 'ModuleNewsLetterPromo' }
      & Pick<ModuleNewsLetterPromo, 'uid' | 'title' | 'ctaMessage'>
      & { ctaButton?: Maybe<(
        { __typename?: 'NewsLetterCtaButton' }
        & Pick<NewsLetterCtaButton, 'ctaButtonText'>
        & { ctaButtonUrl?: Maybe<(
          { __typename?: 'Link' }
          & Pick<Link, 'href' | 'title'>
        )> }
      )> }
    )>> }
  )>, all_module_section_promo_v2?: Maybe<(
    { __typename?: 'AllModuleSectionPromoV2Entry' }
    & { entries: Array<(
      { __typename: 'AllSectionPromoContentV2' }
      & { items?: Maybe<Array<(
        { __typename: 'Article' }
        & ArticleTopicItemFragment
      ) | (
        { __typename: 'Document' }
        & DocumentTopicItemFragment
      ) | (
        { __typename: 'Event' }
        & EventTopicItemFragment
      ) | (
        { __typename: 'ExternalLink' }
        & ExternalLinkTopicItemFragment
      ) | (
        { __typename: 'Magazine' }
        & MagazineTopicItemFragment
      ) | (
        { __typename: 'Podcast' }
        & PodcastTopicItemFragment
      ) | (
        { __typename: 'Slideshow' }
        & SlideshowTopicItemFragment
      ) | (
        { __typename: 'Video' }
        & VideoTopicItemFragment
      ) | (
        { __typename: 'Webinar' }
        & WebinarTopicItemFragment
      )>>, meta: (
        { __typename?: 'MetaWithEntrySectionPromoV2' }
        & Pick<MetaWithEntrySectionPromoV2, 'total'>
        & { entry: (
          { __typename?: 'ModuleSectionPromoV2' }
          & Pick<ModuleSectionPromoV2, 'altText' | 'contentListOption' | 'contentTypeUid' | 'description' | 'logoPosition' | 'moduleDisplayOption' | 'title' | 'uid'>
          & { background?: Maybe<(
            { __typename?: 'SectionPromoBackground' }
            & Pick<SectionPromoBackground, 'altText' | 'backgroundColor'>
            & { image?: Maybe<(
              { __typename?: 'File' }
              & Pick<File, 'url'>
            )> }
          )>, coverageButton?: Maybe<(
            { __typename?: 'CoverageButton' }
            & Pick<CoverageButton, 'text' | 'url'>
          )>, ctaButton?: Maybe<(
            { __typename?: 'SectionPromoCtaButton' }
            & Pick<SectionPromoCtaButton, 'text' | 'url'>
          )>, logo: (
            { __typename?: 'File' }
            & Pick<File, 'url'>
          ) }
        ) }
      ) }
    )> }
  )> }
);

export type GetModuleByIds3QueryVariables = Exact<{
  sectionPromoIds?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  latestContent?: Maybe<Array<Scalars['String']> | Scalars['String']>;
}>;


export type GetModuleByIds3Query = (
  { __typename?: 'Query' }
  & { all_module_section_promo?: Maybe<(
    { __typename?: 'AllModuleSectionPromoEntry' }
    & { entries: Array<(
      { __typename?: 'AllSectionPromoContent' }
      & { items?: Maybe<Array<(
        { __typename?: 'Article' }
        & ArticleTopicItemFragment
      ) | (
        { __typename?: 'Document' }
        & DocumentTopicItemFragment
      ) | (
        { __typename?: 'Event' }
        & EventTopicItemFragment
      ) | (
        { __typename?: 'ExternalLink' }
        & ExternalLinkTopicItemFragment
      ) | (
        { __typename?: 'Magazine' }
        & MagazineTopicItemFragment
      ) | (
        { __typename?: 'Podcast' }
        & PodcastTopicItemFragment
      ) | (
        { __typename?: 'Slideshow' }
        & SlideshowTopicItemFragment
      ) | (
        { __typename?: 'Video' }
        & VideoTopicItemFragment
      ) | (
        { __typename?: 'Webinar' }
        & WebinarTopicItemFragment
      )>>, meta: (
        { __typename?: 'MetaWithEntrySectionPromo' }
        & { entry: (
          { __typename?: 'ModuleSectionPromo' }
          & Pick<ModuleSectionPromo, 'altText' | 'contentListOption' | 'contentTypeUid' | 'description' | 'logoPosition' | 'moduleDisplayOption' | 'title' | 'uid'>
          & { background?: Maybe<(
            { __typename?: 'SectionPromoBackground' }
            & Pick<SectionPromoBackground, 'altText' | 'backgroundColor'>
            & { image?: Maybe<(
              { __typename?: 'File' }
              & Pick<File, 'url'>
            )> }
          )>, coverageButton?: Maybe<(
            { __typename?: 'CoverageButton' }
            & Pick<CoverageButton, 'text' | 'url'>
          )>, ctaButton?: Maybe<(
            { __typename?: 'SectionPromoCtaButton' }
            & Pick<SectionPromoCtaButton, 'text' | 'url'>
          )>, logo: (
            { __typename?: 'File' }
            & Pick<File, 'url'>
          ) }
        ) }
      ) }
    )> }
  )>, all_module_latest_content?: Maybe<(
    { __typename?: 'AllModuleLatestContentEntry' }
    & { entries: Array<(
      { __typename: 'AllModuleLatest' }
      & { items: (
        { __typename?: 'ItemModuleLatestContent' }
        & { itemsLatestSection1?: Maybe<Array<(
          { __typename?: 'Article' }
          & ArticleTopicItemFragment
        ) | (
          { __typename?: 'Document' }
          & DocumentTopicItemFragment
        ) | (
          { __typename?: 'Event' }
          & EventTopicItemFragment
        ) | (
          { __typename?: 'ExternalLink' }
          & ExternalLinkTopicItemFragment
        ) | (
          { __typename?: 'Magazine' }
          & MagazineTopicItemFragment
        ) | (
          { __typename?: 'Podcast' }
          & PodcastTopicItemFragment
        ) | (
          { __typename?: 'Slideshow' }
          & SlideshowTopicItemFragment
        ) | (
          { __typename?: 'Video' }
          & VideoTopicItemFragment
        ) | (
          { __typename?: 'Webinar' }
          & WebinarTopicItemFragment
        )>>, itemsLatestSection2?: Maybe<Array<(
          { __typename: 'Article' }
          & ArticleTopicItemFragment
        ) | (
          { __typename: 'Document' }
          & DocumentTopicItemFragment
        ) | (
          { __typename: 'Event' }
          & EventTopicItemFragment
        ) | (
          { __typename: 'ExternalLink' }
          & ExternalLinkTopicItemFragment
        ) | (
          { __typename: 'Magazine' }
          & MagazineTopicItemFragment
        ) | (
          { __typename: 'Podcast' }
          & PodcastTopicItemFragment
        ) | (
          { __typename: 'Slideshow' }
          & SlideshowTopicItemFragment
        ) | (
          { __typename: 'Video' }
          & VideoTopicItemFragment
        ) | (
          { __typename: 'Webinar' }
          & WebinarTopicItemFragment
        )>> }
      ), meta: (
        { __typename?: 'MetaWithModuleLatestContent' }
        & Pick<MetaWithModuleLatestContent, 'totalLatestSection1' | 'totalLatestSection2'>
        & { entry: (
          { __typename?: 'ModuleLatestContent' }
          & Pick<ModuleLatestContent, 'title' | 'uid'>
          & { latestSection1?: Maybe<(
            { __typename?: 'LatestSection' }
            & Pick<LatestSection, 'sectionLabel'>
            & { ctaButton?: Maybe<(
              { __typename?: 'CtaButton' }
              & Pick<CtaButton, 'ctaButtonText' | 'ctaButtonUrl'>
            )> }
          )>, latestSection2?: Maybe<(
            { __typename?: 'LatestSection' }
            & Pick<LatestSection, 'sectionLabel'>
            & { ctaButton?: Maybe<(
              { __typename?: 'CtaButton' }
              & Pick<CtaButton, 'ctaButtonText' | 'ctaButtonUrl'>
            )> }
          )> }
        ) }
      ) }
    )> }
  )> }
);

export type GetModuleByIds4QueryVariables = Exact<{
  eventPromoIds?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  threeColumnHighlightIds?: Maybe<Array<Scalars['String']> | Scalars['String']>;
}>;


export type GetModuleByIds4Query = (
  { __typename?: 'Query' }
  & { all_module_event_promo?: Maybe<(
    { __typename?: 'AllModuleEventPromoEntry' }
    & { entries?: Maybe<Array<(
      { __typename: 'ModuleEventPromo' }
      & Pick<ModuleEventPromo, 'uid' | 'title'>
      & { background?: Maybe<(
        { __typename?: 'BackgroundEventPromo' }
        & Pick<BackgroundEventPromo, 'backgroundImageAltText'>
        & { backgroundImage?: Maybe<(
          { __typename?: 'File' }
          & Pick<File, 'url'>
        )> }
      )>, event: Array<(
        { __typename: 'Event' }
        & Pick<Event, 'contentTypeUid' | 'eventDescription' | 'locale' | 'publishedDate' | 'url'>
        & { eventDetails: (
          { __typename?: 'FieldGroupEventDetails' }
          & Pick<FieldGroupEventDetails, 'endDate' | 'startDate' | 'eventType' | 'eventUrl' | 'location'>
          & { buttons?: Maybe<Array<(
            { __typename?: 'EventButton' }
            & Pick<EventButton, 'buttonLink' | 'buttonName'>
          )>>, eventLogo: (
            { __typename?: 'FieldGroupEventLogo' }
            & Pick<FieldGroupEventLogo, 'eventLogoAlt'>
            & { logoFile?: Maybe<(
              { __typename?: 'File' }
              & Pick<File, 'url'>
            )> }
          ) }
        ), publishDetails?: Maybe<(
          { __typename?: 'PublishDetails' }
          & Pick<PublishDetails, 'locale' | 'time'>
        )> }
      )> }
    )>> }
  )>, all_module_three_column_highlight?: Maybe<(
    { __typename?: 'AllModuleThreeColumnHighlightEntry' }
    & { entries: Array<(
      { __typename?: 'ModuleThreeColumnHighlightResult' }
      & { items: (
        { __typename?: 'ModuleThreeColumnHighlightItems' }
        & { column1: Array<(
          { __typename: 'Article' }
          & ArticleTopicItemFragment
        ) | (
          { __typename: 'Document' }
          & DocumentTopicItemFragment
        ) | (
          { __typename: 'Event' }
          & EventTopicItemFragment
        ) | (
          { __typename: 'ExternalLink' }
          & ExternalLinkTopicItemFragment
        ) | (
          { __typename: 'Magazine' }
          & MagazineTopicItemFragment
        ) | (
          { __typename: 'Podcast' }
          & PodcastTopicItemFragment
        ) | (
          { __typename: 'Slideshow' }
          & SlideshowTopicItemFragment
        ) | (
          { __typename: 'Video' }
          & VideoTopicItemFragment
        ) | (
          { __typename: 'Webinar' }
          & WebinarTopicItemFragment
        )>, column2: Array<(
          { __typename: 'Article' }
          & ArticleTopicItemFragment
        ) | (
          { __typename: 'Document' }
          & DocumentTopicItemFragment
        ) | (
          { __typename: 'Event' }
          & EventTopicItemFragment
        ) | (
          { __typename: 'ExternalLink' }
          & ExternalLinkTopicItemFragment
        ) | (
          { __typename: 'Magazine' }
          & MagazineTopicItemFragment
        ) | (
          { __typename: 'Podcast' }
          & PodcastTopicItemFragment
        ) | (
          { __typename: 'Slideshow' }
          & SlideshowTopicItemFragment
        ) | (
          { __typename: 'Video' }
          & VideoTopicItemFragment
        ) | (
          { __typename: 'Webinar' }
          & WebinarTopicItemFragment
        )>, column3: Array<(
          { __typename: 'Article' }
          & ArticleTopicItemFragment
        ) | (
          { __typename: 'Document' }
          & DocumentTopicItemFragment
        ) | (
          { __typename: 'Event' }
          & EventTopicItemFragment
        ) | (
          { __typename: 'ExternalLink' }
          & ExternalLinkTopicItemFragment
        ) | (
          { __typename: 'Magazine' }
          & MagazineTopicItemFragment
        ) | (
          { __typename: 'Podcast' }
          & PodcastTopicItemFragment
        ) | (
          { __typename: 'Slideshow' }
          & SlideshowTopicItemFragment
        ) | (
          { __typename: 'Video' }
          & VideoTopicItemFragment
        ) | (
          { __typename: 'Webinar' }
          & WebinarTopicItemFragment
        )> }
      ), meta: (
        { __typename?: 'MetaThreeColumnHighlightWithEntry' }
        & { entry: (
          { __typename?: 'ModuleThreeColumnHighlight' }
          & Pick<ModuleThreeColumnHighlight, 'uid'>
          & { threeColumnSection1: (
            { __typename?: 'ThreeColumnSection' }
            & Pick<ThreeColumnSection, 'title'>
            & { ctaButton?: Maybe<(
              { __typename?: 'CtaButtonLink' }
              & Pick<CtaButtonLink, 'ctaButtonText' | 'ctaButtonLink'>
            )> }
          ), threeColumnSection2: (
            { __typename?: 'ThreeColumnSection' }
            & Pick<ThreeColumnSection, 'title'>
            & { ctaButton?: Maybe<(
              { __typename?: 'CtaButtonLink' }
              & Pick<CtaButtonLink, 'ctaButtonText' | 'ctaButtonLink'>
            )> }
          ), threeColumnSection3: (
            { __typename?: 'ThreeColumnSection' }
            & Pick<ThreeColumnSection, 'title'>
            & { ctaButton?: Maybe<(
              { __typename?: 'CtaButtonLink' }
              & Pick<CtaButtonLink, 'ctaButtonText' | 'ctaButtonLink'>
            )> }
          ) }
        ) }
      ) }
    )> }
  )> }
);

export type ArticleTemplateFragment = (
  { __typename: 'Article' }
  & Pick<Article, 'uid' | 'url' | 'publishedDate' | 'title' | 'mobileHeadline' | 'bodyJson' | 'summary' | 'readTime' | 'buyersJourney' | 'updatedAt' | 'authoredBy' | 'authoredOn' | 'oldUrl'>
  & { relatedInlineContent?: Maybe<Array<(
    { __typename?: 'RelatedInlineContents' }
    & RelatedInlineContentsItemFragment
  )>>, featuredImageGroup?: Maybe<(
    { __typename?: 'FeaturedImage' }
    & FeaturedImageItemFragment
  )>, seo: (
    { __typename?: 'Seo' }
    & SeoItemFragment
  ), subbrand?: Maybe<(
    { __typename?: 'SubBrand' }
    & SubBrandItemFragment
  )>, contributor?: Maybe<Array<(
    { __typename?: 'Contributor' }
    & ContributorItemFragment
  )>>, contentFormat?: Maybe<Array<(
    { __typename?: 'ContentFormat' }
    & ContentFormatItemFragment
  )>>, keywords?: Maybe<Array<(
    { __typename?: 'Keyword' }
    & KeywordItemFragment
  )>>, newsletterSignUpPromo?: Maybe<(
    { __typename?: 'NewsletterSignUpPromo' }
    & NewsletterSignUpPromoItemFragment
  )>, sponsorshipGatingGroup?: Maybe<(
    { __typename?: 'SponsorshipGatingGroup' }
    & SponsorshipGatingGroupItemFragment
  )>, atAGlance: Array<(
    { __typename?: 'FieldGroupAtAGlance' }
    & Pick<FieldGroupAtAGlance, 'shortGlanceVersions'>
  )>, topicSelector: (
    { __typename?: 'TopicSelector' }
    & TopicSelectorItemFragment
  ), seriesTaxonomy?: Maybe<Array<(
    { __typename?: 'SeriesTaxonomy' }
    & SeriesTaxonomyItemFragment
  )>>, relatedEvents?: Maybe<Array<(
    { __typename?: 'Event' }
    & RelatedEventItemFragment
  )>> }
);

export type DocumentTemplateFragment = (
  { __typename: 'Document' }
  & Pick<Document, 'uid' | 'url' | 'publishedDate' | 'title' | 'bodyJson' | 'updatedAt' | 'summary' | 'readTime' | 'authoredBy' | 'authoredOn' | 'oldUrl'>
  & { document?: Maybe<(
    { __typename?: 'FieldGroupDocument' }
    & Pick<FieldGroupDocument, 'materialTitle' | 'materialUrl'>
    & { materialMultiple?: Maybe<Array<(
      { __typename?: 'File' }
      & Pick<File, 'url'>
    )>>, materialResource?: Maybe<(
      { __typename?: 'File' }
      & Pick<File, 'url'>
    )> }
  )>, relatedInlineContent?: Maybe<Array<(
    { __typename?: 'RelatedInlineContents' }
    & RelatedInlineContentsItemFragment
  )>>, featuredImageGroup?: Maybe<(
    { __typename?: 'FeaturedImage' }
    & FeaturedImageItemFragment
  )>, seo: (
    { __typename?: 'Seo' }
    & SeoItemFragment
  ), subbrand?: Maybe<(
    { __typename?: 'SubBrand' }
    & SubBrandItemFragment
  )>, contributor?: Maybe<Array<(
    { __typename?: 'Contributor' }
    & ContributorItemFragment
  )>>, contentFormat?: Maybe<Array<(
    { __typename?: 'ContentFormat' }
    & ContentFormatItemFragment
  )>>, keywords?: Maybe<Array<(
    { __typename?: 'Keyword' }
    & KeywordItemFragment
  )>>, newsletterSignUpPromo?: Maybe<(
    { __typename?: 'NewsletterSignUpPromo' }
    & NewsletterSignUpPromoItemFragment
  )>, sponsorshipGatingGroup?: Maybe<(
    { __typename?: 'SponsorshipGatingGroup' }
    & SponsorshipGatingGroupItemFragment
  )>, atAGlance: Array<(
    { __typename?: 'FieldGroupAtAGlance' }
    & Pick<FieldGroupAtAGlance, 'shortGlanceVersions'>
  )>, topicSelector: (
    { __typename?: 'TopicSelector' }
    & TopicSelectorItemFragment
  ), seriesTaxonomy?: Maybe<Array<(
    { __typename?: 'SeriesTaxonomy' }
    & SeriesTaxonomyItemFragment
  )>>, relatedEvents?: Maybe<Array<(
    { __typename?: 'Event' }
    & RelatedEventItemFragment
  )>> }
);

export type VideoTemplateFragment = (
  { __typename: 'Video' }
  & Pick<Video, 'uid' | 'url' | 'publishedDate' | 'title' | 'bodyJson' | 'summary' | 'readTime' | 'authoredBy' | 'updatedAt' | 'authoredOn' | 'oldUrl'>
  & { video?: Maybe<(
    { __typename?: 'FieldGroupVideo' }
    & Pick<FieldGroupVideo, 'videoCredit' | 'videoId' | 'videoService'>
    & { duration?: Maybe<(
      { __typename?: 'FieldGroupDuration' }
      & Pick<FieldGroupDuration, 'duration'>
    )> }
  )>, relatedInlineContent?: Maybe<Array<(
    { __typename?: 'RelatedInlineContents' }
    & RelatedInlineContentsItemFragment
  )>>, featuredImageGroup?: Maybe<(
    { __typename?: 'FeaturedImage' }
    & FeaturedImageItemFragment
  )>, seo: (
    { __typename?: 'Seo' }
    & SeoItemFragment
  ), subbrand?: Maybe<(
    { __typename?: 'SubBrand' }
    & SubBrandItemFragment
  )>, contributor?: Maybe<Array<(
    { __typename?: 'Contributor' }
    & ContributorItemFragment
  )>>, contentFormat?: Maybe<Array<(
    { __typename?: 'ContentFormat' }
    & ContentFormatItemFragment
  )>>, keywords?: Maybe<Array<(
    { __typename?: 'Keyword' }
    & KeywordItemFragment
  )>>, newsletterSignUpPromo?: Maybe<(
    { __typename?: 'NewsletterSignUpPromo' }
    & NewsletterSignUpPromoItemFragment
  )>, sponsorshipGatingGroup?: Maybe<(
    { __typename?: 'SponsorshipGatingGroup' }
    & SponsorshipGatingGroupItemFragment
  )>, atAGlance: Array<(
    { __typename?: 'FieldGroupAtAGlance' }
    & Pick<FieldGroupAtAGlance, 'shortGlanceVersions'>
  )>, topicSelector: (
    { __typename?: 'TopicSelector' }
    & TopicSelectorItemFragment
  ), seriesTaxonomy?: Maybe<Array<(
    { __typename?: 'SeriesTaxonomy' }
    & SeriesTaxonomyItemFragment
  )>>, relatedEvents?: Maybe<Array<(
    { __typename?: 'Event' }
    & RelatedEventItemFragment
  )>> }
);

export type PodcastTemplateFragment = (
  { __typename: 'Podcast' }
  & Pick<Podcast, 'uid' | 'url' | 'publishedDate' | 'title' | 'bodyJson' | 'summary' | 'updatedAt' | 'readTime' | 'authoredBy' | 'authoredOn' | 'oldUrl'>
  & { podcast: (
    { __typename?: 'FieldGroupPodcast' }
    & Pick<FieldGroupPodcast, 'podcastId' | 'podcastService' | 'podcastLink'>
    & { duration?: Maybe<(
      { __typename?: 'FieldGroupDuration' }
      & Pick<FieldGroupDuration, 'duration'>
    )> }
  ), relatedInlineContent?: Maybe<Array<(
    { __typename?: 'RelatedInlineContents' }
    & RelatedInlineContentsItemFragment
  )>>, featuredImageGroup?: Maybe<(
    { __typename?: 'FeaturedImage' }
    & FeaturedImageItemFragment
  )>, seo: (
    { __typename?: 'Seo' }
    & SeoItemFragment
  ), subbrand?: Maybe<(
    { __typename?: 'SubBrand' }
    & SubBrandItemFragment
  )>, contributor?: Maybe<Array<(
    { __typename?: 'Contributor' }
    & ContributorItemFragment
  )>>, contentFormat?: Maybe<Array<(
    { __typename?: 'ContentFormat' }
    & ContentFormatItemFragment
  )>>, keywords?: Maybe<Array<(
    { __typename?: 'Keyword' }
    & KeywordItemFragment
  )>>, newsletterSignUpPromo?: Maybe<(
    { __typename?: 'NewsletterSignUpPromo' }
    & NewsletterSignUpPromoItemFragment
  )>, sponsorshipGatingGroup?: Maybe<(
    { __typename?: 'SponsorshipGatingGroup' }
    & SponsorshipGatingGroupItemFragment
  )>, atAGlance: Array<(
    { __typename?: 'FieldGroupAtAGlance' }
    & Pick<FieldGroupAtAGlance, 'shortGlanceVersions'>
  )>, topicSelector: (
    { __typename?: 'TopicSelector' }
    & TopicSelectorItemFragment
  ), seriesTaxonomy?: Maybe<Array<(
    { __typename?: 'SeriesTaxonomy' }
    & SeriesTaxonomyItemFragment
  )>>, relatedEvents?: Maybe<Array<(
    { __typename?: 'Event' }
    & RelatedEventItemFragment
  )>> }
);

export type SlideshowTemplateFragment = (
  { __typename: 'Slideshow' }
  & Pick<Slideshow, 'uid' | 'url' | 'publishedDate' | 'title' | 'bodyJson' | 'summary' | 'updatedAt' | 'readTime' | 'buyersJourney' | 'authoredBy' | 'authoredOn' | 'oldUrl'>
  & { relatedInlineContent?: Maybe<Array<(
    { __typename?: 'RelatedInlineContents' }
    & RelatedInlineContentsItemFragment
  )>>, featuredImageGroup?: Maybe<(
    { __typename?: 'FeaturedImage' }
    & FeaturedImageItemFragment
  )>, seo: (
    { __typename?: 'Seo' }
    & SeoItemFragment
  ), subbrand?: Maybe<(
    { __typename?: 'SubBrand' }
    & SubBrandItemFragment
  )>, contributor?: Maybe<Array<(
    { __typename?: 'Contributor' }
    & ContributorItemFragment
  )>>, contentFormat?: Maybe<Array<(
    { __typename?: 'ContentFormat' }
    & ContentFormatItemFragment
  )>>, keywords?: Maybe<Array<(
    { __typename?: 'Keyword' }
    & KeywordItemFragment
  )>>, newsletterSignUpPromo?: Maybe<(
    { __typename?: 'NewsletterSignUpPromo' }
    & NewsletterSignUpPromoItemFragment
  )>, slideshow?: Maybe<Array<(
    { __typename?: 'SlideshowCollection' }
    & Pick<SlideshowCollection, 'slideTitle'>
  )>>, sponsorshipGatingGroup?: Maybe<(
    { __typename?: 'SponsorshipGatingGroup' }
    & SponsorshipGatingGroupItemFragment
  )>, atAGlance: Array<(
    { __typename?: 'FieldGroupAtAGlance' }
    & Pick<FieldGroupAtAGlance, 'shortGlanceVersions'>
  )>, topicSelector: (
    { __typename?: 'TopicSelector' }
    & TopicSelectorItemFragment
  ), seriesTaxonomy?: Maybe<Array<(
    { __typename?: 'SeriesTaxonomy' }
    & SeriesTaxonomyItemFragment
  )>>, relatedEvents?: Maybe<Array<(
    { __typename?: 'Event' }
    & RelatedEventItemFragment
  )>> }
);

export type WebinarTemplateFragment = (
  { __typename: 'Webinar' }
  & Pick<Webinar, 'uid' | 'url' | 'publishedDate' | 'title' | 'bodyJson' | 'updatedAt' | 'summary' | 'readTime' | 'authoredBy' | 'authoredOn' | 'oldUrl'>
  & { speaker?: Maybe<Array<(
    { __typename?: 'Contributor' }
    & Pick<Contributor, 'contributorName' | 'contributorRole' | 'url' | 'contributorCompanyName'>
    & { contributorImage?: Maybe<(
      { __typename?: 'ContributorImage' }
      & Pick<ContributorImage, 'imageAltText'>
      & { image?: Maybe<(
        { __typename?: 'ContributorImageFile' }
        & Pick<ContributorImageFile, 'url'>
      )> }
    )> }
  )>>, webinarGroup?: Maybe<(
    { __typename?: 'WebinarGroup' }
    & Pick<WebinarGroup, 'webinarStartDateAndTime' | 'webinarUrl'>
    & { duration?: Maybe<(
      { __typename?: 'FieldGroupDuration' }
      & Pick<FieldGroupDuration, 'duration'>
    )> }
  )>, relatedInlineContent?: Maybe<Array<(
    { __typename?: 'RelatedInlineContents' }
    & RelatedInlineContentsItemFragment
  )>>, featuredImageGroup?: Maybe<(
    { __typename?: 'FeaturedImage' }
    & FeaturedImageItemFragment
  )>, seo: (
    { __typename?: 'Seo' }
    & SeoItemFragment
  ), subbrand?: Maybe<(
    { __typename?: 'SubBrand' }
    & SubBrandItemFragment
  )>, contributor?: Maybe<Array<(
    { __typename?: 'Contributor' }
    & ContributorItemFragment
  )>>, contentFormat?: Maybe<Array<(
    { __typename?: 'ContentFormat' }
    & ContentFormatItemFragment
  )>>, keywords?: Maybe<Array<(
    { __typename?: 'Keyword' }
    & KeywordItemFragment
  )>>, newsletterSignUpPromo?: Maybe<(
    { __typename?: 'NewsletterSignUpPromo' }
    & NewsletterSignUpPromoItemFragment
  )>, sponsorshipGatingGroup?: Maybe<(
    { __typename?: 'SponsorshipGatingGroup' }
    & SponsorshipGatingGroupItemFragment
  )>, atAGlance: Array<(
    { __typename?: 'FieldGroupAtAGlance' }
    & Pick<FieldGroupAtAGlance, 'shortGlanceVersions'>
  )>, topicSelector: (
    { __typename?: 'TopicSelector' }
    & TopicSelectorItemFragment
  ), seriesTaxonomy?: Maybe<Array<(
    { __typename?: 'SeriesTaxonomy' }
    & SeriesTaxonomyItemFragment
  )>>, relatedEvents?: Maybe<Array<(
    { __typename?: 'Event' }
    & RelatedEventItemFragment
  )>> }
);

export type GetPageContentQueryVariables = Exact<{
  url: Scalars['String'];
}>;


export type GetPageContentQuery = (
  { __typename?: 'Query' }
  & { page_content: (
    { __typename?: 'PageContent' }
    & { content?: Maybe<(
      { __typename?: 'Article' }
      & ArticleTemplateFragment
    ) | (
      { __typename?: 'Document' }
      & DocumentTemplateFragment
    ) | (
      { __typename?: 'Podcast' }
      & PodcastTemplateFragment
    ) | (
      { __typename?: 'Slideshow' }
      & SlideshowTemplateFragment
    ) | (
      { __typename?: 'Video' }
      & VideoTemplateFragment
    ) | (
      { __typename?: 'Webinar' }
      & WebinarTemplateFragment
    )> }
  ) }
);

export type GetPodcastListQueryVariables = Exact<{
  page: Scalars['Int'];
}>;


export type GetPodcastListQuery = (
  { __typename?: 'Query' }
  & { page_podcasts: (
    { __typename?: 'PodcastPage' }
    & { items: Array<(
      { __typename?: 'Podcast' }
      & PodcastTopicItemFragment
    )>, meta: (
      { __typename?: 'PodcastPageMeta' }
      & { pagination: (
        { __typename?: 'PaginationPage' }
        & Pick<PaginationPage, 'limit' | 'page' | 'total' | 'totalPage'>
      ) }
    ) }
  ) }
);

export type GetRssPageQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  where?: Maybe<RssFeedWhereInput>;
}>;


export type GetRssPageQuery = (
  { __typename?: 'Query' }
  & { page_rss: (
    { __typename?: 'RssFeed' }
    & { items: Array<(
      { __typename?: 'RssFeedItem' }
      & Pick<RssFeedItem, 'title' | 'url' | 'description' | 'publishedDate'>
      & { contributor: Array<(
        { __typename?: 'Contributor' }
        & Pick<Contributor, 'contributorName'>
      )>, image?: Maybe<(
        { __typename?: 'Image' }
        & Pick<Image, 'url'>
      )> }
    )> }
  ) }
);

export type GetSearchFilterOptionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSearchFilterOptionsQuery = (
  { __typename?: 'Query' }
  & { all_contributor: (
    { __typename?: 'AllContributor' }
    & { items?: Maybe<Array<(
      { __typename?: 'Contributor' }
      & Pick<Contributor, 'contributorName' | 'url'>
    )>> }
  ), all_topic_primary: (
    { __typename?: 'AllTopicPrimary' }
    & { items?: Maybe<Array<(
      { __typename?: 'TopicPrimary' }
      & Pick<TopicPrimary, 'title' | 'url'>
    )>> }
  ) }
);

export type GetSearchResultQueryVariables = Exact<{
  page: Scalars['Int'];
  searchTerm: Scalars['String'];
  sort: SortType;
  topics?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  contentTypes?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  authors?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  from?: Maybe<Scalars['DateTime']>;
}>;


export type GetSearchResultQuery = (
  { __typename?: 'Query' }
  & { page_search: (
    { __typename?: 'SearchPage' }
    & { items: Array<(
      { __typename?: 'Article' }
      & ArticleTopicItemFragment
    ) | (
      { __typename?: 'Document' }
      & DocumentTopicItemFragment
    ) | (
      { __typename?: 'Podcast' }
      & PodcastTopicItemFragment
    ) | (
      { __typename?: 'Slideshow' }
      & SlideshowTopicItemFragment
    ) | (
      { __typename?: 'Video' }
      & VideoTopicItemFragment
    ) | (
      { __typename?: 'Webinar' }
      & WebinarTopicItemFragment
    )>, meta: (
      { __typename?: 'SearchPageMeta' }
      & { pagination: (
        { __typename?: 'PaginationPage' }
        & Pick<PaginationPage, 'limit' | 'page' | 'total' | 'totalPage'>
      ) }
    ) }
  ) }
);

export type GetSidebarModuleIdsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSidebarModuleIdsQuery = (
  { __typename?: 'Query' }
  & { settings_article?: Maybe<(
    { __typename?: 'SettingsArticle' }
    & { sidebarConfiguration?: Maybe<(
      { __typename?: 'MultipleRightBlocks' }
      & { rightComponents?: Maybe<Array<(
        { __typename?: 'RightComponentsRef' }
        & Pick<RightComponentsRef, 'contentTypeUid' | 'uid'>
      )>> }
    )> }
  )> }
);

export type GetSidebarModulesQueryVariables = Exact<{
  moduleIds?: Maybe<Array<Scalars['String']> | Scalars['String']>;
}>;


export type GetSidebarModulesQuery = (
  { __typename?: 'Query' }
  & { all_module_event_promo?: Maybe<(
    { __typename: 'AllModuleEventPromoEntry' }
    & { entries?: Maybe<Array<(
      { __typename: 'ModuleEventPromo' }
      & Pick<ModuleEventPromo, 'uid' | 'title'>
      & { event: Array<(
        { __typename: 'Event' }
        & Pick<Event, 'contentTypeUid' | 'eventDescription' | 'locale' | 'publishedDate' | 'url'>
        & { eventDetails: (
          { __typename?: 'FieldGroupEventDetails' }
          & Pick<FieldGroupEventDetails, 'endDate' | 'startDate' | 'eventType' | 'eventUrl' | 'location'>
          & { buttons?: Maybe<Array<(
            { __typename?: 'EventButton' }
            & Pick<EventButton, 'buttonLink' | 'buttonName'>
          )>>, eventLogo: (
            { __typename?: 'FieldGroupEventLogo' }
            & Pick<FieldGroupEventLogo, 'eventLogoAlt'>
            & { logoFile?: Maybe<(
              { __typename?: 'File' }
              & Pick<File, 'url'>
            )> }
          ) }
        ), publishDetails?: Maybe<(
          { __typename?: 'PublishDetails' }
          & Pick<PublishDetails, 'locale' | 'time'>
        )> }
      )> }
    )>> }
  )>, all_module_content_cards?: Maybe<(
    { __typename: 'AllModuleContentCardsEntry' }
    & { entries: Array<(
      { __typename: 'ModuleContentCardsEntry' }
      & { items?: Maybe<Array<(
        { __typename: 'Article' }
        & ArticleTopicItemFragment
      ) | (
        { __typename: 'Document' }
        & DocumentTopicItemFragment
      ) | (
        { __typename: 'Event' }
        & EventTopicItemFragment
      ) | (
        { __typename: 'ExternalLink' }
        & ExternalLinkTopicItemFragment
      ) | (
        { __typename: 'Magazine' }
        & MagazineTopicItemFragment
      ) | (
        { __typename: 'Podcast' }
        & PodcastTopicItemFragment
      ) | (
        { __typename: 'Slideshow' }
        & SlideshowTopicItemFragment
      ) | (
        { __typename: 'Video' }
        & VideoTopicItemFragment
      ) | (
        { __typename: 'Webinar' }
        & WebinarTopicItemFragment
      )>>, meta: (
        { __typename?: 'MetaWithEntry' }
        & { entry: (
          { __typename?: 'ModuleContentCards' }
          & Pick<ModuleContentCards, 'title' | 'contentDisplayOption' | 'uid' | 'settingOption'>
        ) }
      ) }
    )> }
  )>, all_module_content_spotlight?: Maybe<(
    { __typename: 'AllModuleContentSpotlightEntry' }
    & { entries?: Maybe<Array<(
      { __typename?: 'ModuleContentSpotlight' }
      & Pick<ModuleContentSpotlight, 'ctaButtonText' | 'promoLabel' | 'title' | 'uid'>
      & { displayOptions?: Maybe<(
        { __typename?: 'DisplayOptions' }
        & Pick<DisplayOptions, 'darkLightToggle' | 'textAlignment' | 'textPosition'>
      )>, promotedContent?: Maybe<Array<{ __typename: 'Article' } | { __typename: 'Document' } | { __typename: 'Podcast' } | { __typename: 'Slideshow' } | { __typename: 'Video' } | { __typename: 'Webinar' }>> }
    )>> }
  )>, all_module_newsletter_promo?: Maybe<(
    { __typename: 'AllModuleNewsletterPromoEntry' }
    & { entries?: Maybe<Array<(
      { __typename?: 'ModuleNewsLetterPromo' }
      & Pick<ModuleNewsLetterPromo, 'ctaMessage' | 'title' | 'uid'>
      & { ctaButton?: Maybe<(
        { __typename?: 'NewsLetterCtaButton' }
        & Pick<NewsLetterCtaButton, 'ctaButtonText'>
        & { ctaButtonUrl?: Maybe<(
          { __typename?: 'Link' }
          & Pick<Link, 'href' | 'title'>
        )> }
      )> }
    )>> }
  )>, all_module_link_list?: Maybe<(
    { __typename: 'AllModuleLinkListEntry' }
    & { entries: Array<(
      { __typename?: 'AllLinkListContent' }
      & { items?: Maybe<Array<(
        { __typename: 'Article' }
        & ArticleTopicItemFragment
      ) | (
        { __typename: 'Document' }
        & DocumentTopicItemFragment
      ) | (
        { __typename: 'Event' }
        & EventTopicItemFragment
      ) | (
        { __typename: 'ExternalLink' }
        & ExternalLinkTopicItemFragment
      ) | (
        { __typename: 'Magazine' }
        & MagazineTopicItemFragment
      ) | (
        { __typename: 'Podcast' }
        & PodcastTopicItemFragment
      ) | (
        { __typename: 'Slideshow' }
        & SlideshowTopicItemFragment
      ) | (
        { __typename: 'Video' }
        & VideoTopicItemFragment
      ) | (
        { __typename: 'Webinar' }
        & WebinarTopicItemFragment
      )>>, meta: (
        { __typename?: 'MetaWithEntryLinkList' }
        & { entry: (
          { __typename?: 'LinkListModule' }
          & Pick<LinkListModule, 'contentListOption' | 'contentTypeUid' | 'moduleLabel' | 'title'>
        ) }
      ) }
    )> }
  )> }
);

export type GetSingleEventListQueryVariables = Exact<{
  url: Scalars['String'];
}>;


export type GetSingleEventListQuery = (
  { __typename?: 'Query' }
  & { all_event: (
    { __typename?: 'AllEvent' }
    & { items?: Maybe<Array<(
      { __typename?: 'Event' }
      & Pick<Event, 'title' | 'uid' | 'eventDescription' | 'url' | 'locale'>
      & { publishDetails?: Maybe<(
        { __typename?: 'PublishDetails' }
        & Pick<PublishDetails, 'locale' | 'time'>
      )>, seo: (
        { __typename?: 'Seo' }
        & SeoItemFragment
      ), eventDetails: (
        { __typename?: 'FieldGroupEventDetails' }
        & Pick<FieldGroupEventDetails, 'endDate' | 'eventType' | 'eventUrl' | 'location' | 'startDate'>
        & { eventLogo: (
          { __typename?: 'FieldGroupEventLogo' }
          & Pick<FieldGroupEventLogo, 'eventLogoAlt'>
          & { logoFile?: Maybe<(
            { __typename?: 'File' }
            & Pick<File, 'url'>
          )> }
        ), buttons?: Maybe<Array<(
          { __typename?: 'EventButton' }
          & Pick<EventButton, 'buttonLink' | 'buttonName'>
        )>> }
      ), relatedInlineContent?: Maybe<(
        { __typename?: 'RelatedInlineContent' }
        & { relatedItem?: Maybe<Array<(
          { __typename?: 'Article' }
          & ArticleTopicItemFragment
        ) | { __typename?: 'BasicPage' } | (
          { __typename?: 'Document' }
          & DocumentTopicItemFragment
        ) | { __typename?: 'Event' } | { __typename?: 'ExternalLink' } | (
          { __typename?: 'Magazine' }
          & MagazineTopicItemFragment
        ) | (
          { __typename?: 'Podcast' }
          & PodcastTopicItemFragment
        ) | (
          { __typename?: 'Slideshow' }
          & SlideshowTopicItemFragment
        ) | (
          { __typename?: 'Video' }
          & VideoTopicItemFragment
        ) | (
          { __typename?: 'Webinar' }
          & WebinarTopicItemFragment
        )>> }
      )> }
    )>>, meta: (
      { __typename?: 'Meta' }
      & Pick<Meta, 'total'>
    ) }
  ) }
);

export type GetSlideshowListQueryVariables = Exact<{
  page: Scalars['Int'];
}>;


export type GetSlideshowListQuery = (
  { __typename?: 'Query' }
  & { page_slideshows: (
    { __typename?: 'SlideshowPage' }
    & { items: Array<(
      { __typename?: 'Slideshow' }
      & SlideshowTopicItemFragment
    )>, meta: (
      { __typename?: 'SlideshowPageMeta' }
      & { pagination: (
        { __typename?: 'PaginationPage' }
        & Pick<PaginationPage, 'limit' | 'page' | 'total' | 'totalPage'>
      ) }
    ) }
  ) }
);

export type TopicPrimaryTemplateFragment = (
  { __typename: 'TopicPrimary' }
  & Pick<TopicPrimary, 'title' | 'topicPageDescription' | 'url' | 'uid'>
  & { secondaryTopics?: Maybe<Array<(
    { __typename?: 'TopicSecondary' }
    & Pick<TopicSecondary, 'title' | 'url'>
  )>>, seo: (
    { __typename?: 'Seo' }
    & SeoItemFragment
  ) }
);

export type TopicSecondaryTemplateFragment = (
  { __typename: 'TopicSecondary' }
  & Pick<TopicSecondary, 'title' | 'topicPageDescription' | 'url' | 'uid'>
  & { seo: (
    { __typename?: 'Seo' }
    & SeoItemFragment
  ) }
);

export type TopicTertiaryTemplateFragment = (
  { __typename: 'TopicTertiary' }
  & Pick<TopicTertiary, 'title' | 'topicPageDescription' | 'url' | 'uid'>
  & { seo: (
    { __typename?: 'Seo' }
    & SeoItemFragment
  ) }
);

export type GetTopicListQueryVariables = Exact<{
  url: Scalars['String'];
  page: Scalars['Int'];
}>;


export type GetTopicListQuery = (
  { __typename?: 'Query' }
  & { page_topic: (
    { __typename?: 'TopicPage' }
    & { items: Array<(
      { __typename?: 'Article' }
      & ArticleTopicItemFragment
    ) | (
      { __typename?: 'Document' }
      & DocumentTopicItemFragment
    ) | (
      { __typename?: 'Podcast' }
      & PodcastTopicItemFragment
    ) | (
      { __typename?: 'Slideshow' }
      & SlideshowTopicItemFragment
    ) | (
      { __typename?: 'Video' }
      & VideoTopicItemFragment
    ) | (
      { __typename?: 'Webinar' }
      & WebinarTopicItemFragment
    )>, meta: (
      { __typename: 'TopicPageMeta' }
      & { pagination: (
        { __typename?: 'PaginationPage' }
        & Pick<PaginationPage, 'limit' | 'page' | 'total' | 'totalPage'>
      ), breadCrumb?: Maybe<Array<(
        { __typename?: 'BreadCrumb' }
        & Pick<BreadCrumb, 'title' | 'url'>
      )>>, entry?: Maybe<(
        { __typename: 'TopicPrimary' }
        & TopicPrimaryTemplateFragment
      ) | (
        { __typename: 'TopicSecondary' }
        & TopicSecondaryTemplateFragment
      ) | (
        { __typename: 'TopicTertiary' }
        & TopicTertiaryTemplateFragment
      )> }
    ) }
  ) }
);

export type GetVideoListQueryVariables = Exact<{
  page: Scalars['Int'];
}>;


export type GetVideoListQuery = (
  { __typename?: 'Query' }
  & { page_videos: (
    { __typename?: 'VideoPage' }
    & { items: Array<(
      { __typename?: 'Video' }
      & VideoTopicItemFragment
    )>, meta: (
      { __typename?: 'VideoPageMeta' }
      & { pagination: (
        { __typename?: 'PaginationPage' }
        & Pick<PaginationPage, 'limit' | 'page' | 'total' | 'totalPage'>
      ) }
    ) }
  ) }
);

export type GetWebinarListQueryVariables = Exact<{
  page: Scalars['Int'];
}>;


export type GetWebinarListQuery = (
  { __typename?: 'Query' }
  & { page_webinars: (
    { __typename?: 'WebinarPage' }
    & { items: Array<(
      { __typename?: 'Webinar' }
      & WebinarTopicItemFragment
    )>, meta: (
      { __typename?: 'WebinarPageMeta' }
      & { pagination: (
        { __typename?: 'PaginationPage' }
        & Pick<PaginationPage, 'limit' | 'page' | 'total' | 'totalPage'>
      ) }
    ) }
  ) }
);

export const ModuleEventPromoFragmentDoc = gql`
    fragment ModuleEventPromo on ModuleEventPromo {
  background {
    backgroundColor
    backgroundImage {
      url
    }
    backgroundImageAltText
  }
  createdAt
  createdBy
  event {
    contentTypeUid
    createdAt
    createdBy
    eventDescription
    eventDetails {
      buttons {
        buttonLink
        buttonName
      }
      endDate
      eventLogo {
        eventLogoAlt
        logoFile {
          url
        }
      }
      eventType
      eventUrl
      location
      startDate
    }
    locale
    publishDetails {
      locale
      time
    }
    publishedDate
    seo {
      canonicalUrl
      metaDescription
      metaTitle
      noIndex
    }
    title
    uid
    updatedAt
    updatedBy
    url
  }
  locale
  title
  uid
  updatedAt
  updatedBy
}
    `;
export const FeaturedImageItemFragmentDoc = gql`
    fragment FeaturedImageItem on FeaturedImage {
  featuredImage {
    url
  }
  featuredImageCredit
  featuredImageCaption
  imageAltText
}
    `;
export const ContributorItemFragmentDoc = gql`
    fragment ContributorItem on Contributor {
  title
  contributorName
  contributorDescriptionJson
  contributorRole
  contributorCompanyName
  url
  contributorImage {
    image {
      url
    }
    imageAltText
  }
}
    `;
export const TopicSelectorItemFragmentDoc = gql`
    fragment TopicSelectorItem on TopicSelector {
  mainTopic {
    __typename
    ... on TopicPrimary {
      title
      url
    }
    ... on TopicSecondary {
      title
      url
      parentTopic {
        title
      }
    }
    ... on TopicTertiary {
      title
      url
      parentTopic {
        title
        parentTopic {
          title
        }
      }
    }
  }
  additionalTopics {
    __typename
    ... on TopicPrimary {
      title
      url
    }
    ... on TopicSecondary {
      title
      url
      parentTopic {
        title
      }
    }
    ... on TopicTertiary {
      title
      url
      parentTopic {
        title
        parentTopic {
          title
        }
      }
    }
  }
}
    `;
export const ArticleTopicItemFragmentDoc = gql`
    fragment ArticleTopicItem on Article {
  __typename
  contentTypeUid
  createdAt
  title
  summary
  url
  readTime
  publishedDate
  keywords {
    title
    url
  }
  featuredImageGroup {
    ...FeaturedImageItem
  }
  contributor {
    ...ContributorItem
  }
  topicSelector {
    ...TopicSelectorItem
  }
  publishedDate
}
    ${FeaturedImageItemFragmentDoc}
${ContributorItemFragmentDoc}
${TopicSelectorItemFragmentDoc}`;
export const DocumentTopicItemFragmentDoc = gql`
    fragment DocumentTopicItem on Document {
  __typename
  contentTypeUid
  createdAt
  title
  summary
  url
  readTime
  publishedDate
  featuredImageGroup {
    ...FeaturedImageItem
  }
  contributor {
    ...ContributorItem
  }
  topicSelector {
    ...TopicSelectorItem
  }
  keywords {
    title
    url
  }
  publishedDate
}
    ${FeaturedImageItemFragmentDoc}
${ContributorItemFragmentDoc}
${TopicSelectorItemFragmentDoc}`;
export const VideoTopicItemFragmentDoc = gql`
    fragment VideoTopicItem on Video {
  __typename
  contentTypeUid
  createdAt
  title
  summary
  url
  readTime
  publishedDate
  featuredImageGroup {
    ...FeaturedImageItem
  }
  contributor {
    ...ContributorItem
  }
  topicSelector {
    ...TopicSelectorItem
  }
  keywords {
    title
    url
  }
  video {
    duration {
      duration
    }
  }
  publishedDate
}
    ${FeaturedImageItemFragmentDoc}
${ContributorItemFragmentDoc}
${TopicSelectorItemFragmentDoc}`;
export const SlideshowTopicItemFragmentDoc = gql`
    fragment SlideshowTopicItem on Slideshow {
  __typename
  contentTypeUid
  createdAt
  title
  summary
  url
  readTime
  publishedDate
  featuredImageGroup {
    ...FeaturedImageItem
  }
  contributor {
    ...ContributorItem
  }
  topicSelector {
    ...TopicSelectorItem
  }
  keywords {
    title
    url
  }
  slideshow {
    slideTitle
  }
  publishedDate
}
    ${FeaturedImageItemFragmentDoc}
${ContributorItemFragmentDoc}
${TopicSelectorItemFragmentDoc}`;
export const WebinarTopicItemFragmentDoc = gql`
    fragment WebinarTopicItem on Webinar {
  __typename
  contentTypeUid
  createdAt
  title
  summary
  url
  readTime
  publishedDate
  featuredImageGroup {
    ...FeaturedImageItem
  }
  contributor {
    ...ContributorItem
  }
  topicSelector {
    ...TopicSelectorItem
  }
  keywords {
    title
    url
  }
  webinarGroup {
    duration {
      duration
    }
  }
  publishedDate
}
    ${FeaturedImageItemFragmentDoc}
${ContributorItemFragmentDoc}
${TopicSelectorItemFragmentDoc}`;
export const PodcastTopicItemFragmentDoc = gql`
    fragment PodcastTopicItem on Podcast {
  __typename
  contentTypeUid
  createdAt
  title
  summary
  url
  readTime
  publishedDate
  featuredImageGroup {
    ...FeaturedImageItem
  }
  contributor {
    ...ContributorItem
  }
  topicSelector {
    ...TopicSelectorItem
  }
  keywords {
    title
    url
  }
  podcast {
    duration {
      duration
    }
  }
  publishedDate
}
    ${FeaturedImageItemFragmentDoc}
${ContributorItemFragmentDoc}
${TopicSelectorItemFragmentDoc}`;
export const MagazineTopicItemFragmentDoc = gql`
    fragment MagazineTopicItem on Magazine {
  __typename
  contentTypeUid
  createdAt
  title
  summary
  url
  readTime
  featuredImageGroup {
    ...FeaturedImageItem
  }
  contributor {
    ...ContributorItem
  }
  topicSelector {
    ...TopicSelectorItem
  }
  keywords {
    title
    url
  }
  publishedDate
}
    ${FeaturedImageItemFragmentDoc}
${ContributorItemFragmentDoc}
${TopicSelectorItemFragmentDoc}`;
export const EventTopicItemFragmentDoc = gql`
    fragment EventTopicItem on Event {
  __typename
  contentTypeUid
  createdAt
  title
  url
  eventDetails {
    buttons {
      buttonLink
      buttonName
    }
    startDate
    endDate
    eventLogo {
      eventLogoAlt
      logoFile {
        url
      }
    }
    eventType
    eventUrl
  }
  publishedDate
}
    `;
export const ExternalLinkTopicItemFragmentDoc = gql`
    fragment ExternalLinkTopicItem on ExternalLink {
  __typename
  contentTypeUid
  createdAt
  title
  summary
  url
  featuredImageGroup {
    ...FeaturedImageItem
  }
  contributor {
    ...ContributorItem
  }
  keywords {
    title
    url
  }
  publishedDate
}
    ${FeaturedImageItemFragmentDoc}
${ContributorItemFragmentDoc}`;
export const RelatedInlineContentsItemFragmentDoc = gql`
    fragment RelatedInlineContentsItem on RelatedInlineContents {
  relatedItem {
    title
    url
  }
}
    `;
export const SeoItemFragmentDoc = gql`
    fragment SeoItem on Seo {
  canonicalUrl
  metaDescription
  metaTitle
  noIndex
}
    `;
export const SubBrandItemFragmentDoc = gql`
    fragment SubBrandItem on SubBrand {
  url
  title
  subbrandLogoGroup {
    subbrandImage {
      url
    }
    subbrandImageAltText
  }
}
    `;
export const ContentFormatItemFragmentDoc = gql`
    fragment ContentFormatItem on ContentFormat {
  title
  pageDescription
}
    `;
export const KeywordItemFragmentDoc = gql`
    fragment KeywordItem on Keyword {
  title
  url
}
    `;
export const NewsletterSignUpPromoItemFragmentDoc = gql`
    fragment NewsletterSignUpPromoItem on NewsletterSignUpPromo {
  message
  newsletterId
  title
}
    `;
export const SponsorshipGatingGroupItemFragmentDoc = gql`
    fragment SponsorshipGatingGroupItem on SponsorshipGatingGroup {
  sponsorshipGatingExternalFormId
  sponsorshipGatingGateExternalFieldFlag
  sponsorshipGatingGateRegFlag
  sponsorshipGatingSponsorFlag
  sponsorshipGatingCampaignUrl
  sponsorshipGatingSponsorReference {
    sponsorUrl
    title
    logoGroup {
      image {
        url
      }
      imageAltText
    }
  }
}
    `;
export const SeriesTaxonomyItemFragmentDoc = gql`
    fragment SeriesTaxonomyItem on SeriesTaxonomy {
  uid
  title
  url
}
    `;
export const RelatedEventItemFragmentDoc = gql`
    fragment RelatedEventItem on Event {
  title
  uid
  eventDetails {
    startDate
    endDate
    eventUrl
    eventType
    location
  }
}
    `;
export const ArticleTemplateFragmentDoc = gql`
    fragment ArticleTemplate on Article {
  __typename
  uid
  url
  publishedDate
  title
  mobileHeadline
  bodyJson
  summary
  readTime
  buyersJourney
  updatedAt
  authoredBy
  authoredOn
  oldUrl
  relatedInlineContent {
    ...RelatedInlineContentsItem
  }
  featuredImageGroup {
    ...FeaturedImageItem
  }
  seo {
    ...SeoItem
  }
  subbrand {
    ...SubBrandItem
  }
  contributor {
    ...ContributorItem
  }
  contentFormat {
    ...ContentFormatItem
  }
  keywords {
    ...KeywordItem
  }
  newsletterSignUpPromo {
    ...NewsletterSignUpPromoItem
  }
  sponsorshipGatingGroup {
    ...SponsorshipGatingGroupItem
  }
  atAGlance {
    shortGlanceVersions
  }
  topicSelector {
    ...TopicSelectorItem
  }
  seriesTaxonomy {
    ...SeriesTaxonomyItem
  }
  relatedEvents {
    ...RelatedEventItem
  }
}
    ${RelatedInlineContentsItemFragmentDoc}
${FeaturedImageItemFragmentDoc}
${SeoItemFragmentDoc}
${SubBrandItemFragmentDoc}
${ContributorItemFragmentDoc}
${ContentFormatItemFragmentDoc}
${KeywordItemFragmentDoc}
${NewsletterSignUpPromoItemFragmentDoc}
${SponsorshipGatingGroupItemFragmentDoc}
${TopicSelectorItemFragmentDoc}
${SeriesTaxonomyItemFragmentDoc}
${RelatedEventItemFragmentDoc}`;
export const DocumentTemplateFragmentDoc = gql`
    fragment DocumentTemplate on Document {
  document {
    materialMultiple {
      url
    }
    materialResource {
      url
    }
    materialTitle
    materialUrl
  }
  __typename
  uid
  url
  publishedDate
  title
  bodyJson
  updatedAt
  summary
  readTime
  authoredBy
  authoredOn
  oldUrl
  relatedInlineContent {
    ...RelatedInlineContentsItem
  }
  featuredImageGroup {
    ...FeaturedImageItem
  }
  seo {
    ...SeoItem
  }
  subbrand {
    ...SubBrandItem
  }
  contributor {
    ...ContributorItem
  }
  contentFormat {
    ...ContentFormatItem
  }
  keywords {
    ...KeywordItem
  }
  newsletterSignUpPromo {
    ...NewsletterSignUpPromoItem
  }
  sponsorshipGatingGroup {
    ...SponsorshipGatingGroupItem
  }
  atAGlance {
    shortGlanceVersions
  }
  topicSelector {
    ...TopicSelectorItem
  }
  seriesTaxonomy {
    ...SeriesTaxonomyItem
  }
  relatedEvents {
    ...RelatedEventItem
  }
}
    ${RelatedInlineContentsItemFragmentDoc}
${FeaturedImageItemFragmentDoc}
${SeoItemFragmentDoc}
${SubBrandItemFragmentDoc}
${ContributorItemFragmentDoc}
${ContentFormatItemFragmentDoc}
${KeywordItemFragmentDoc}
${NewsletterSignUpPromoItemFragmentDoc}
${SponsorshipGatingGroupItemFragmentDoc}
${TopicSelectorItemFragmentDoc}
${SeriesTaxonomyItemFragmentDoc}
${RelatedEventItemFragmentDoc}`;
export const VideoTemplateFragmentDoc = gql`
    fragment VideoTemplate on Video {
  video {
    duration {
      duration
    }
    videoCredit
    videoId
    videoService
  }
  __typename
  uid
  url
  publishedDate
  title
  bodyJson
  summary
  readTime
  authoredBy
  updatedAt
  authoredOn
  oldUrl
  relatedInlineContent {
    ...RelatedInlineContentsItem
  }
  featuredImageGroup {
    ...FeaturedImageItem
  }
  seo {
    ...SeoItem
  }
  subbrand {
    ...SubBrandItem
  }
  contributor {
    ...ContributorItem
  }
  contentFormat {
    ...ContentFormatItem
  }
  keywords {
    ...KeywordItem
  }
  newsletterSignUpPromo {
    ...NewsletterSignUpPromoItem
  }
  sponsorshipGatingGroup {
    ...SponsorshipGatingGroupItem
  }
  atAGlance {
    shortGlanceVersions
  }
  topicSelector {
    ...TopicSelectorItem
  }
  seriesTaxonomy {
    ...SeriesTaxonomyItem
  }
  relatedEvents {
    ...RelatedEventItem
  }
}
    ${RelatedInlineContentsItemFragmentDoc}
${FeaturedImageItemFragmentDoc}
${SeoItemFragmentDoc}
${SubBrandItemFragmentDoc}
${ContributorItemFragmentDoc}
${ContentFormatItemFragmentDoc}
${KeywordItemFragmentDoc}
${NewsletterSignUpPromoItemFragmentDoc}
${SponsorshipGatingGroupItemFragmentDoc}
${TopicSelectorItemFragmentDoc}
${SeriesTaxonomyItemFragmentDoc}
${RelatedEventItemFragmentDoc}`;
export const PodcastTemplateFragmentDoc = gql`
    fragment PodcastTemplate on Podcast {
  podcast {
    podcastId
    podcastService
    podcastLink
    duration {
      duration
    }
  }
  __typename
  uid
  url
  publishedDate
  title
  bodyJson
  summary
  updatedAt
  readTime
  authoredBy
  authoredOn
  oldUrl
  relatedInlineContent {
    ...RelatedInlineContentsItem
  }
  featuredImageGroup {
    ...FeaturedImageItem
  }
  seo {
    ...SeoItem
  }
  subbrand {
    ...SubBrandItem
  }
  contributor {
    ...ContributorItem
  }
  contentFormat {
    ...ContentFormatItem
  }
  keywords {
    ...KeywordItem
  }
  newsletterSignUpPromo {
    ...NewsletterSignUpPromoItem
  }
  sponsorshipGatingGroup {
    ...SponsorshipGatingGroupItem
  }
  atAGlance {
    shortGlanceVersions
  }
  topicSelector {
    ...TopicSelectorItem
  }
  seriesTaxonomy {
    ...SeriesTaxonomyItem
  }
  relatedEvents {
    ...RelatedEventItem
  }
}
    ${RelatedInlineContentsItemFragmentDoc}
${FeaturedImageItemFragmentDoc}
${SeoItemFragmentDoc}
${SubBrandItemFragmentDoc}
${ContributorItemFragmentDoc}
${ContentFormatItemFragmentDoc}
${KeywordItemFragmentDoc}
${NewsletterSignUpPromoItemFragmentDoc}
${SponsorshipGatingGroupItemFragmentDoc}
${TopicSelectorItemFragmentDoc}
${SeriesTaxonomyItemFragmentDoc}
${RelatedEventItemFragmentDoc}`;
export const SlideshowTemplateFragmentDoc = gql`
    fragment SlideshowTemplate on Slideshow {
  __typename
  uid
  url
  publishedDate
  title
  bodyJson
  summary
  updatedAt
  readTime
  buyersJourney
  authoredBy
  authoredOn
  oldUrl
  relatedInlineContent {
    ...RelatedInlineContentsItem
  }
  featuredImageGroup {
    ...FeaturedImageItem
  }
  seo {
    ...SeoItem
  }
  subbrand {
    ...SubBrandItem
  }
  contributor {
    ...ContributorItem
  }
  contentFormat {
    ...ContentFormatItem
  }
  keywords {
    ...KeywordItem
  }
  newsletterSignUpPromo {
    ...NewsletterSignUpPromoItem
  }
  slideshow {
    slideTitle
  }
  sponsorshipGatingGroup {
    ...SponsorshipGatingGroupItem
  }
  atAGlance {
    shortGlanceVersions
  }
  topicSelector {
    ...TopicSelectorItem
  }
  seriesTaxonomy {
    ...SeriesTaxonomyItem
  }
  relatedEvents {
    ...RelatedEventItem
  }
}
    ${RelatedInlineContentsItemFragmentDoc}
${FeaturedImageItemFragmentDoc}
${SeoItemFragmentDoc}
${SubBrandItemFragmentDoc}
${ContributorItemFragmentDoc}
${ContentFormatItemFragmentDoc}
${KeywordItemFragmentDoc}
${NewsletterSignUpPromoItemFragmentDoc}
${SponsorshipGatingGroupItemFragmentDoc}
${TopicSelectorItemFragmentDoc}
${SeriesTaxonomyItemFragmentDoc}
${RelatedEventItemFragmentDoc}`;
export const WebinarTemplateFragmentDoc = gql`
    fragment WebinarTemplate on Webinar {
  speaker {
    contributorName
    contributorRole
    url
    contributorCompanyName
    contributorImage {
      image {
        url
      }
      imageAltText
    }
  }
  webinarGroup {
    duration {
      duration
    }
    webinarStartDateAndTime
    webinarUrl
  }
  __typename
  uid
  url
  publishedDate
  title
  bodyJson
  updatedAt
  summary
  readTime
  authoredBy
  authoredOn
  oldUrl
  relatedInlineContent {
    ...RelatedInlineContentsItem
  }
  featuredImageGroup {
    ...FeaturedImageItem
  }
  seo {
    ...SeoItem
  }
  subbrand {
    ...SubBrandItem
  }
  contributor {
    ...ContributorItem
  }
  contentFormat {
    ...ContentFormatItem
  }
  keywords {
    ...KeywordItem
  }
  newsletterSignUpPromo {
    ...NewsletterSignUpPromoItem
  }
  sponsorshipGatingGroup {
    ...SponsorshipGatingGroupItem
  }
  atAGlance {
    shortGlanceVersions
  }
  topicSelector {
    ...TopicSelectorItem
  }
  seriesTaxonomy {
    ...SeriesTaxonomyItem
  }
  relatedEvents {
    ...RelatedEventItem
  }
}
    ${RelatedInlineContentsItemFragmentDoc}
${FeaturedImageItemFragmentDoc}
${SeoItemFragmentDoc}
${SubBrandItemFragmentDoc}
${ContributorItemFragmentDoc}
${ContentFormatItemFragmentDoc}
${KeywordItemFragmentDoc}
${NewsletterSignUpPromoItemFragmentDoc}
${SponsorshipGatingGroupItemFragmentDoc}
${TopicSelectorItemFragmentDoc}
${SeriesTaxonomyItemFragmentDoc}
${RelatedEventItemFragmentDoc}`;
export const TopicPrimaryTemplateFragmentDoc = gql`
    fragment TopicPrimaryTemplate on TopicPrimary {
  secondaryTopics {
    title
    url
  }
  __typename
  title
  topicPageDescription
  url
  uid
  seo {
    ...SeoItem
  }
}
    ${SeoItemFragmentDoc}`;
export const TopicSecondaryTemplateFragmentDoc = gql`
    fragment TopicSecondaryTemplate on TopicSecondary {
  __typename
  title
  topicPageDescription
  url
  uid
  seo {
    ...SeoItem
  }
}
    ${SeoItemFragmentDoc}`;
export const TopicTertiaryTemplateFragmentDoc = gql`
    fragment TopicTertiaryTemplate on TopicTertiary {
  __typename
  title
  topicPageDescription
  url
  uid
  seo {
    ...SeoItem
  }
}
    ${SeoItemFragmentDoc}`;
export const GetBasicPageDocument = gql`
    query getBasicPage($url: String!) {
  page_basic(url: $url) {
    content {
      bodyJson
      seo {
        ...SeoItem
      }
      title
      uid
      url
    }
  }
}
    ${SeoItemFragmentDoc}`;
export const GetContentFormatListDocument = gql`
    query getContentFormatList($url: String!, $page: Int!) {
  page_content_format(limit: 25, page: $page, where: {url: $url}) {
    items {
      ...ArticleTopicItem
      ...DocumentTopicItem
      ...VideoTopicItem
      ...SlideshowTopicItem
      ...WebinarTopicItem
      ...PodcastTopicItem
    }
    meta {
      pagination {
        limit
        page
        total
        totalPage
      }
      entry {
        createdAt
        createdBy
        locale
        pageDescription
        seo {
          ...SeoItem
        }
        title
        uid
        url
      }
    }
  }
}
    ${ArticleTopicItemFragmentDoc}
${DocumentTopicItemFragmentDoc}
${VideoTopicItemFragmentDoc}
${SlideshowTopicItemFragmentDoc}
${WebinarTopicItemFragmentDoc}
${PodcastTopicItemFragmentDoc}
${SeoItemFragmentDoc}`;
export const GetContributorDocument = gql`
    query getContributor($url: String!, $page: Int!) {
  page_contributor(limit: 35, page: $page, where: {url: $url}) {
    items {
      ...ArticleTopicItem
      ...DocumentTopicItem
      ...VideoTopicItem
      ...SlideshowTopicItem
      ...WebinarTopicItem
      ...PodcastTopicItem
    }
    meta {
      pagination {
        limit
        page
        total
        totalPage
      }
      entry {
        url
        seo {
          ...SeoItem
        }
        contributorImage {
          image {
            url
          }
          imageAltText
        }
        contributorName
        contributorRole
        contributorCompanyName
        contributorDescription
        contributorDescriptionJson
        socialLinks {
          facebookLink {
            href
          }
          instagramLink {
            href
          }
          linkedinLink {
            href
          }
          twitterLink {
            href
          }
        }
        uid
      }
    }
  }
}
    ${ArticleTopicItemFragmentDoc}
${DocumentTopicItemFragmentDoc}
${VideoTopicItemFragmentDoc}
${SlideshowTopicItemFragmentDoc}
${WebinarTopicItemFragmentDoc}
${PodcastTopicItemFragmentDoc}
${SeoItemFragmentDoc}`;
export const GetDocumentListDocument = gql`
    query getDocumentList($page: Int!) {
  page_whitepapers(limit: 35, page: $page) {
    items {
      ... on Document {
        ...DocumentTopicItem
      }
    }
    meta {
      pagination {
        limit
        page
        total
        totalPage
      }
    }
  }
}
    ${DocumentTopicItemFragmentDoc}`;
export const GetEventListDocument = gql`
    query getEventList($page: Int!) {
  page_events(limit: 35, page: $page) {
    meta {
      pagination {
        limit
        page
        total
        totalPage
      }
    }
    items {
      title
      url
      eventDescription
      uid
      createdAt
      createdBy
      locale
      updatedAt
      updatedBy
      eventDetails {
        startDate
        endDate
        eventLogo {
          eventLogoAlt
          logoFile {
            url
          }
        }
        buttons {
          buttonLink
          buttonName
        }
        eventType
        eventUrl
        location
      }
      publishDetails {
        locale
        time
      }
      seo {
        ...SeoItem
      }
    }
  }
}
    ${SeoItemFragmentDoc}`;
export const GetGoogleNewsPageDocument = gql`
    query getGoogleNewsPage {
  page_google_news {
    items {
      title
      publicationDate
      language
      url
      uid
      description
      contributor {
        contributorName
      }
      image {
        url
      }
    }
    meta {
      total
    }
  }
}
    `;
export const GetHomepageModuleIdsDocument = gql`
    query getHomepageModuleIds {
  page_home {
    title
    seo {
      canonicalUrl
      metaDescription
      metaTitle
      noIndex
    }
    modules {
      moduleBlocks {
        uid
        contentTypeUid
      }
    }
  }
  navigation {
    logo {
      url
    }
  }
}
    `;
export const GetKeywordListDocument = gql`
    query getKeywordList($url: String!, $page: Int!) {
  page_keyword(limit: 35, page: $page, where: {url: $url}) {
    items {
      ...ArticleTopicItem
      ...DocumentTopicItem
      ...VideoTopicItem
      ...SlideshowTopicItem
      ...WebinarTopicItem
      ...PodcastTopicItem
    }
    meta {
      pagination {
        limit
        page
        total
        totalPage
      }
      entry {
        title
        url
        seo {
          ...SeoItem
        }
        uid
      }
    }
  }
}
    ${ArticleTopicItemFragmentDoc}
${DocumentTopicItemFragmentDoc}
${VideoTopicItemFragmentDoc}
${SlideshowTopicItemFragmentDoc}
${WebinarTopicItemFragmentDoc}
${PodcastTopicItemFragmentDoc}
${SeoItemFragmentDoc}`;
export const GetLayoutDocument = gql`
    query getLayout {
  navigation {
    mainMenuItems {
      title
      seeAllLink
      url
      seeAllLinkUrl
      hasSubMenu
      subMenu {
        title
        url
      }
      recentContents {
        title
        summary
        image
        altText
        url
        publishedDate
        categoryName
        categoryUrl
        contentType
        duration
        readTime
      }
    }
    secondaryMenu {
      title
      url
    }
    logo {
      url
      altText
    }
    sideNavSections {
      title
      url
      subMenu {
        title
        url
      }
      seeAllLink
      seeAllLinkUrl
    }
    megaMenu {
      largeMenu {
        title
        url
        seeAllLink
        seeAllLinkUrl
        subMenu {
          title
          url
        }
      }
      smallMenu {
        title
        url
        subMenu {
          title
          url
        }
      }
    }
    informaBar {
      enabled
      leftSection {
        description
        subMenu {
          title
          url
        }
      }
      rightSection {
        description
      }
    }
  }
  footer {
    logo {
      url
      altText
    }
    linkSections {
      title
      type
      links {
        title
        url
        openInNewTab
        image {
          url
          altText
        }
      }
    }
    brandLinks {
      title
      url
      openInNewTab
      image {
        url
        altText
      }
    }
    copyright {
      businessUnit {
        url
        name
        logoUrl
      }
      links {
        title
        url
        openInNewTab
        image {
          url
          altText
        }
      }
    }
  }
}
    `;
export const GetModuleByIds1Document = gql`
    query getModuleByIds1($contentCardIds: [String!], $contentSpotLighhtIds: [String!]) {
  all_module_content_cards(where: {uidIn: $contentCardIds}) {
    entries {
      __typename
      items {
        __typename
        ... on Article {
          ...ArticleTopicItem
        }
        ... on Document {
          ...DocumentTopicItem
        }
        ... on Video {
          ...VideoTopicItem
        }
        ... on Slideshow {
          ...SlideshowTopicItem
        }
        ... on Webinar {
          ...WebinarTopicItem
        }
        ... on Podcast {
          ...PodcastTopicItem
        }
        ... on Event {
          ...EventTopicItem
        }
        ... on ExternalLink {
          ...ExternalLinkTopicItem
        }
        ... on Magazine {
          ...MagazineTopicItem
        }
      }
      meta {
        entry {
          contentDisplayOption
          settingOption
          title
          uid
        }
      }
    }
  }
  all_module_content_spotlight(where: {uidIn: $contentSpotLighhtIds}) {
    entries {
      __typename
      uid
      title
      ctaButtonText
      displayOptions {
        darkLightToggle
        textAlignment
        textPosition
      }
      promotedContent {
        __typename
        ... on Article {
          ...ArticleTopicItem
        }
        ... on Document {
          ...DocumentTopicItem
        }
        ... on Video {
          ...VideoTopicItem
        }
        ... on Slideshow {
          ...SlideshowTopicItem
        }
        ... on Webinar {
          ...WebinarTopicItem
        }
        ... on Podcast {
          ...PodcastTopicItem
        }
      }
      promoLabel
    }
  }
}
    ${ArticleTopicItemFragmentDoc}
${DocumentTopicItemFragmentDoc}
${VideoTopicItemFragmentDoc}
${SlideshowTopicItemFragmentDoc}
${WebinarTopicItemFragmentDoc}
${PodcastTopicItemFragmentDoc}
${EventTopicItemFragmentDoc}
${ExternalLinkTopicItemFragmentDoc}
${MagazineTopicItemFragmentDoc}`;
export const GetModuleByIds2Document = gql`
    query getModuleByIds2($featuredIds: [String!], $newsletterPromoIds: [String!], $sectionPromoV2Ids: [String!]) {
  all_module_featured(where: {uidIn: $featuredIds}) {
    entries {
      __typename
      featured {
        __typename
        ... on Article {
          ...ArticleTopicItem
        }
        ... on Document {
          ...DocumentTopicItem
        }
        ... on Video {
          ...VideoTopicItem
        }
        ... on Slideshow {
          ...SlideshowTopicItem
        }
        ... on Webinar {
          ...WebinarTopicItem
        }
        ... on Podcast {
          ...PodcastTopicItem
        }
        ... on Magazine {
          ...MagazineTopicItem
        }
      }
      latest {
        __typename
        ... on Article {
          ...ArticleTopicItem
        }
        ... on Document {
          ...DocumentTopicItem
        }
        ... on Video {
          ...VideoTopicItem
        }
        ... on Slideshow {
          ...SlideshowTopicItem
        }
        ... on Webinar {
          ...WebinarTopicItem
        }
        ... on Podcast {
          ...PodcastTopicItem
        }
        ... on Magazine {
          ...MagazineTopicItem
        }
      }
      meta {
        entry {
          title
          uid
        }
      }
    }
  }
  all_module_newsletter_promo(where: {uidIn: $newsletterPromoIds}) {
    entries {
      __typename
      uid
      title
      ctaMessage
      ctaButton {
        ctaButtonText
        ctaButtonUrl {
          href
          title
        }
      }
    }
  }
  all_module_section_promo_v2(where: {uidIn: $sectionPromoV2Ids}) {
    entries {
      __typename
      items {
        __typename
        ... on Article {
          ...ArticleTopicItem
        }
        ... on Document {
          ...DocumentTopicItem
        }
        ... on Video {
          ...VideoTopicItem
        }
        ... on Slideshow {
          ...SlideshowTopicItem
        }
        ... on Webinar {
          ...WebinarTopicItem
        }
        ... on Podcast {
          ...PodcastTopicItem
        }
        ... on Event {
          ...EventTopicItem
        }
        ... on ExternalLink {
          ...ExternalLinkTopicItem
        }
        ... on Magazine {
          ...MagazineTopicItem
        }
      }
      meta {
        entry {
          altText
          background {
            altText
            backgroundColor
            image {
              url
            }
          }
          contentListOption
          contentTypeUid
          coverageButton {
            text
            url
          }
          ctaButton {
            text
            url
          }
          description
          logo {
            url
          }
          logoPosition
          moduleDisplayOption
          title
          uid
        }
        total
      }
    }
  }
}
    ${ArticleTopicItemFragmentDoc}
${DocumentTopicItemFragmentDoc}
${VideoTopicItemFragmentDoc}
${SlideshowTopicItemFragmentDoc}
${WebinarTopicItemFragmentDoc}
${PodcastTopicItemFragmentDoc}
${MagazineTopicItemFragmentDoc}
${EventTopicItemFragmentDoc}
${ExternalLinkTopicItemFragmentDoc}`;
export const GetModuleByIds3Document = gql`
    query getModuleByIds3($sectionPromoIds: [String!], $latestContent: [String!]) {
  all_module_section_promo(where: {uidIn: $sectionPromoIds}) {
    entries {
      items {
        ... on Article {
          ...ArticleTopicItem
        }
        ... on Document {
          ...DocumentTopicItem
        }
        ... on Video {
          ...VideoTopicItem
        }
        ... on Slideshow {
          ...SlideshowTopicItem
        }
        ... on Webinar {
          ...WebinarTopicItem
        }
        ... on Podcast {
          ...PodcastTopicItem
        }
        ... on Event {
          ...EventTopicItem
        }
        ... on ExternalLink {
          ...ExternalLinkTopicItem
        }
        ... on Magazine {
          ...MagazineTopicItem
        }
      }
      meta {
        entry {
          altText
          background {
            altText
            backgroundColor
            image {
              url
            }
          }
          contentListOption
          contentTypeUid
          coverageButton {
            text
            url
          }
          ctaButton {
            text
            url
          }
          description
          logo {
            url
          }
          logoPosition
          moduleDisplayOption
          title
          uid
        }
      }
    }
  }
  all_module_latest_content(where: {uidIn: $latestContent}) {
    entries {
      __typename
      items {
        itemsLatestSection1 {
          ... on Article {
            ...ArticleTopicItem
          }
          ... on Document {
            ...DocumentTopicItem
          }
          ... on Video {
            ...VideoTopicItem
          }
          ... on Slideshow {
            ...SlideshowTopicItem
          }
          ... on Webinar {
            ...WebinarTopicItem
          }
          ... on Podcast {
            ...PodcastTopicItem
          }
          ... on Event {
            ...EventTopicItem
          }
          ... on ExternalLink {
            ...ExternalLinkTopicItem
          }
          ... on Magazine {
            ...MagazineTopicItem
          }
        }
        itemsLatestSection2 {
          __typename
          ... on Article {
            ...ArticleTopicItem
          }
          ... on Document {
            ...DocumentTopicItem
          }
          ... on Video {
            ...VideoTopicItem
          }
          ... on Slideshow {
            ...SlideshowTopicItem
          }
          ... on Webinar {
            ...WebinarTopicItem
          }
          ... on Podcast {
            ...PodcastTopicItem
          }
          ... on Event {
            ...EventTopicItem
          }
          ... on ExternalLink {
            ...ExternalLinkTopicItem
          }
          ... on Magazine {
            ...MagazineTopicItem
          }
        }
      }
      meta {
        entry {
          latestSection1 {
            ctaButton {
              ctaButtonText
              ctaButtonUrl
            }
            sectionLabel
          }
          latestSection2 {
            ctaButton {
              ctaButtonText
              ctaButtonUrl
            }
            sectionLabel
          }
          title
          uid
        }
        totalLatestSection1
        totalLatestSection2
      }
    }
  }
}
    ${ArticleTopicItemFragmentDoc}
${DocumentTopicItemFragmentDoc}
${VideoTopicItemFragmentDoc}
${SlideshowTopicItemFragmentDoc}
${WebinarTopicItemFragmentDoc}
${PodcastTopicItemFragmentDoc}
${EventTopicItemFragmentDoc}
${ExternalLinkTopicItemFragmentDoc}
${MagazineTopicItemFragmentDoc}`;
export const GetModuleByIds4Document = gql`
    query getModuleByIds4($eventPromoIds: [String!], $threeColumnHighlightIds: [String!]) {
  all_module_event_promo(where: {uidIn: $eventPromoIds}) {
    entries {
      __typename
      uid
      title
      background {
        backgroundImage {
          url
        }
        backgroundImageAltText
      }
      event {
        __typename
        contentTypeUid
        eventDescription
        eventDetails {
          buttons {
            buttonLink
            buttonName
          }
          endDate
          startDate
          eventLogo {
            eventLogoAlt
            logoFile {
              url
            }
          }
          eventType
          eventUrl
          location
        }
        locale
        publishDetails {
          locale
          time
        }
        publishedDate
        url
      }
    }
  }
  all_module_three_column_highlight(where: {uidIn: $threeColumnHighlightIds}) {
    entries {
      items {
        column1 {
          __typename
          ... on Article {
            ...ArticleTopicItem
          }
          ... on Document {
            ...DocumentTopicItem
          }
          ... on Video {
            ...VideoTopicItem
          }
          ... on Slideshow {
            ...SlideshowTopicItem
          }
          ... on Webinar {
            ...WebinarTopicItem
          }
          ... on Podcast {
            ...PodcastTopicItem
          }
          ... on Event {
            ...EventTopicItem
          }
          ... on ExternalLink {
            ...ExternalLinkTopicItem
          }
          ... on Magazine {
            ...MagazineTopicItem
          }
        }
        column2 {
          __typename
          ... on Article {
            ...ArticleTopicItem
          }
          ... on Document {
            ...DocumentTopicItem
          }
          ... on Video {
            ...VideoTopicItem
          }
          ... on Slideshow {
            ...SlideshowTopicItem
          }
          ... on Webinar {
            ...WebinarTopicItem
          }
          ... on Podcast {
            ...PodcastTopicItem
          }
          ... on Event {
            ...EventTopicItem
          }
          ... on ExternalLink {
            ...ExternalLinkTopicItem
          }
          ... on Magazine {
            ...MagazineTopicItem
          }
        }
        column3 {
          __typename
          ... on Article {
            ...ArticleTopicItem
          }
          ... on Document {
            ...DocumentTopicItem
          }
          ... on Video {
            ...VideoTopicItem
          }
          ... on Slideshow {
            ...SlideshowTopicItem
          }
          ... on Webinar {
            ...WebinarTopicItem
          }
          ... on Podcast {
            ...PodcastTopicItem
          }
          ... on Event {
            ...EventTopicItem
          }
          ... on ExternalLink {
            ...ExternalLinkTopicItem
          }
          ... on Magazine {
            ...MagazineTopicItem
          }
        }
      }
      meta {
        entry {
          threeColumnSection1 {
            title
            ctaButton {
              ctaButtonText
              ctaButtonLink
            }
          }
          threeColumnSection2 {
            title
            ctaButton {
              ctaButtonText
              ctaButtonLink
            }
          }
          threeColumnSection3 {
            title
            ctaButton {
              ctaButtonText
              ctaButtonLink
            }
          }
          uid
        }
      }
    }
  }
}
    ${ArticleTopicItemFragmentDoc}
${DocumentTopicItemFragmentDoc}
${VideoTopicItemFragmentDoc}
${SlideshowTopicItemFragmentDoc}
${WebinarTopicItemFragmentDoc}
${PodcastTopicItemFragmentDoc}
${EventTopicItemFragmentDoc}
${ExternalLinkTopicItemFragmentDoc}
${MagazineTopicItemFragmentDoc}`;
export const GetPageContentDocument = gql`
    query getPageContent($url: String!) {
  page_content(url: $url) {
    content {
      ...ArticleTemplate
      ...DocumentTemplate
      ...PodcastTemplate
      ...SlideshowTemplate
      ...VideoTemplate
      ...WebinarTemplate
    }
  }
}
    ${ArticleTemplateFragmentDoc}
${DocumentTemplateFragmentDoc}
${PodcastTemplateFragmentDoc}
${SlideshowTemplateFragmentDoc}
${VideoTemplateFragmentDoc}
${WebinarTemplateFragmentDoc}`;
export const GetPodcastListDocument = gql`
    query getPodcastList($page: Int!) {
  page_podcasts(limit: 35, page: $page) {
    items {
      ...PodcastTopicItem
    }
    meta {
      pagination {
        limit
        page
        total
        totalPage
      }
    }
  }
}
    ${PodcastTopicItemFragmentDoc}`;
export const GetRssPageDocument = gql`
    query getRssPage($limit: Int, $where: RssFeedWhereInput) {
  page_rss(limit: $limit, where: $where) {
    items {
      title
      url
      description
      publishedDate
      contributor {
        contributorName
      }
      image {
        url
      }
    }
  }
}
    `;
export const GetSearchFilterOptionsDocument = gql`
    query getSearchFilterOptions {
  all_contributor(limit: 10000) {
    items {
      contributorName
      url
    }
  }
  all_topic_primary(limit: 10000) {
    items {
      title
      url
    }
  }
}
    `;
export const GetSearchResultDocument = gql`
    query getSearchResult($page: Int!, $searchTerm: String!, $sort: SortType!, $topics: [String!], $contentTypes: [String!], $authors: [String!], $from: DateTime) {
  page_search(
    limit: 35
    page: $page
    sort: $sort
    where: {searchTerm: $searchTerm, TopicPrimaryUrlIn: $topics, contentTypeUidIn: $contentTypes, contributorUrlIn: $authors, publishedDateGte: $from}
  ) {
    items {
      ...ArticleTopicItem
      ...DocumentTopicItem
      ...VideoTopicItem
      ...SlideshowTopicItem
      ...WebinarTopicItem
      ...PodcastTopicItem
    }
    meta {
      pagination {
        limit
        page
        total
        totalPage
      }
    }
  }
}
    ${ArticleTopicItemFragmentDoc}
${DocumentTopicItemFragmentDoc}
${VideoTopicItemFragmentDoc}
${SlideshowTopicItemFragmentDoc}
${WebinarTopicItemFragmentDoc}
${PodcastTopicItemFragmentDoc}`;
export const GetSidebarModuleIdsDocument = gql`
    query getSidebarModuleIds {
  settings_article {
    sidebarConfiguration {
      rightComponents {
        contentTypeUid
        uid
      }
    }
  }
}
    `;
export const GetSidebarModulesDocument = gql`
    query getSidebarModules($moduleIds: [String!]) {
  all_module_event_promo(where: {uidIn: $moduleIds}) {
    __typename
    entries {
      __typename
      uid
      title
      event {
        __typename
        contentTypeUid
        eventDescription
        eventDetails {
          buttons {
            buttonLink
            buttonName
          }
          endDate
          startDate
          eventLogo {
            eventLogoAlt
            logoFile {
              url
            }
          }
          eventType
          eventUrl
          location
        }
        locale
        publishDetails {
          locale
          time
        }
        publishedDate
        url
      }
    }
  }
  all_module_content_cards(where: {uidIn: $moduleIds}) {
    __typename
    entries {
      __typename
      items {
        __typename
        ... on Article {
          ...ArticleTopicItem
        }
        ... on Document {
          ...DocumentTopicItem
        }
        ... on Video {
          ...VideoTopicItem
        }
        ... on Slideshow {
          ...SlideshowTopicItem
        }
        ... on Webinar {
          ...WebinarTopicItem
        }
        ... on Podcast {
          ...PodcastTopicItem
        }
        ... on Event {
          ...EventTopicItem
        }
        ... on ExternalLink {
          ...ExternalLinkTopicItem
        }
        ... on Magazine {
          ...MagazineTopicItem
        }
      }
      meta {
        entry {
          title
          contentDisplayOption
          uid
          settingOption
        }
      }
    }
  }
  all_module_content_spotlight(where: {uidIn: $moduleIds}) {
    __typename
    entries {
      ctaButtonText
      displayOptions {
        darkLightToggle
        textAlignment
        textPosition
      }
      promoLabel
      promotedContent {
        __typename
      }
      title
      uid
    }
  }
  all_module_newsletter_promo(where: {uidIn: $moduleIds}) {
    __typename
    entries {
      ctaButton {
        ctaButtonText
        ctaButtonUrl {
          href
          title
        }
      }
      ctaMessage
      title
      uid
    }
  }
  all_module_link_list(where: {uidIn: $moduleIds}) {
    __typename
    entries {
      items {
        __typename
        ... on Article {
          ...ArticleTopicItem
        }
        ... on Document {
          ...DocumentTopicItem
        }
        ... on Video {
          ...VideoTopicItem
        }
        ... on Slideshow {
          ...SlideshowTopicItem
        }
        ... on Webinar {
          ...WebinarTopicItem
        }
        ... on Podcast {
          ...PodcastTopicItem
        }
        ... on Event {
          ...EventTopicItem
        }
        ... on ExternalLink {
          ...ExternalLinkTopicItem
        }
        ... on Magazine {
          ...MagazineTopicItem
        }
      }
      meta {
        entry {
          contentListOption
          contentTypeUid
          moduleLabel
          title
        }
      }
    }
  }
}
    ${ArticleTopicItemFragmentDoc}
${DocumentTopicItemFragmentDoc}
${VideoTopicItemFragmentDoc}
${SlideshowTopicItemFragmentDoc}
${WebinarTopicItemFragmentDoc}
${PodcastTopicItemFragmentDoc}
${EventTopicItemFragmentDoc}
${ExternalLinkTopicItemFragmentDoc}
${MagazineTopicItemFragmentDoc}`;
export const GetSingleEventListDocument = gql`
    query getSingleEventList($url: String!) {
  all_event(where: {url: $url}) {
    items {
      title
      uid
      eventDescription
      url
      publishDetails {
        locale
        time
      }
      seo {
        ...SeoItem
      }
      eventDetails {
        endDate
        eventLogo {
          eventLogoAlt
          logoFile {
            url
          }
        }
        buttons {
          buttonLink
          buttonName
        }
        eventType
        eventUrl
        location
        startDate
      }
      locale
      relatedInlineContent {
        relatedItem {
          ...ArticleTopicItem
          ...DocumentTopicItem
          ...VideoTopicItem
          ...SlideshowTopicItem
          ...WebinarTopicItem
          ...PodcastTopicItem
          ...MagazineTopicItem
        }
      }
    }
    meta {
      total
    }
  }
}
    ${SeoItemFragmentDoc}
${ArticleTopicItemFragmentDoc}
${DocumentTopicItemFragmentDoc}
${VideoTopicItemFragmentDoc}
${SlideshowTopicItemFragmentDoc}
${WebinarTopicItemFragmentDoc}
${PodcastTopicItemFragmentDoc}
${MagazineTopicItemFragmentDoc}`;
export const GetSlideshowListDocument = gql`
    query getSlideshowList($page: Int!) {
  page_slideshows(limit: 35, page: $page) {
    items {
      ... on Slideshow {
        ...SlideshowTopicItem
      }
    }
    meta {
      pagination {
        limit
        page
        total
        totalPage
      }
    }
  }
}
    ${SlideshowTopicItemFragmentDoc}`;
export const GetTopicListDocument = gql`
    query getTopicList($url: String!, $page: Int!) {
  page_topic(limit: 35, page: $page, where: {url: $url}) {
    items {
      ...ArticleTopicItem
      ...DocumentTopicItem
      ...VideoTopicItem
      ...SlideshowTopicItem
      ...PodcastTopicItem
      ...WebinarTopicItem
    }
    meta {
      __typename
      pagination {
        limit
        page
        total
        totalPage
      }
      breadCrumb {
        title
        url
      }
      entry {
        __typename
        ...TopicPrimaryTemplate
        ...TopicSecondaryTemplate
        ...TopicTertiaryTemplate
      }
    }
  }
}
    ${ArticleTopicItemFragmentDoc}
${DocumentTopicItemFragmentDoc}
${VideoTopicItemFragmentDoc}
${SlideshowTopicItemFragmentDoc}
${PodcastTopicItemFragmentDoc}
${WebinarTopicItemFragmentDoc}
${TopicPrimaryTemplateFragmentDoc}
${TopicSecondaryTemplateFragmentDoc}
${TopicTertiaryTemplateFragmentDoc}`;
export const GetVideoListDocument = gql`
    query getVideoList($page: Int!) {
  page_videos(limit: 35, page: $page) {
    items {
      ... on Video {
        ...VideoTopicItem
      }
    }
    meta {
      pagination {
        limit
        page
        total
        totalPage
      }
    }
  }
}
    ${VideoTopicItemFragmentDoc}`;
export const GetWebinarListDocument = gql`
    query getWebinarList($page: Int!) {
  page_webinars(limit: 35, page: $page) {
    items {
      ... on Webinar {
        ...WebinarTopicItem
      }
    }
    meta {
      pagination {
        limit
        page
        total
        totalPage
      }
    }
  }
}
    ${WebinarTopicItemFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getBasicPage(variables: GetBasicPageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetBasicPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetBasicPageQuery>(GetBasicPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getBasicPage');
    },
    getContentFormatList(variables: GetContentFormatListQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetContentFormatListQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetContentFormatListQuery>(GetContentFormatListDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getContentFormatList');
    },
    getContributor(variables: GetContributorQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetContributorQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetContributorQuery>(GetContributorDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getContributor');
    },
    getDocumentList(variables: GetDocumentListQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetDocumentListQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetDocumentListQuery>(GetDocumentListDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getDocumentList');
    },
    getEventList(variables: GetEventListQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetEventListQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetEventListQuery>(GetEventListDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getEventList');
    },
    getGoogleNewsPage(variables?: GetGoogleNewsPageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetGoogleNewsPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetGoogleNewsPageQuery>(GetGoogleNewsPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getGoogleNewsPage');
    },
    getHomepageModuleIds(variables?: GetHomepageModuleIdsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetHomepageModuleIdsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetHomepageModuleIdsQuery>(GetHomepageModuleIdsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getHomepageModuleIds');
    },
    getKeywordList(variables: GetKeywordListQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetKeywordListQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetKeywordListQuery>(GetKeywordListDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getKeywordList');
    },
    getLayout(variables?: GetLayoutQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetLayoutQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetLayoutQuery>(GetLayoutDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getLayout');
    },
    getModuleByIds1(variables?: GetModuleByIds1QueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetModuleByIds1Query> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetModuleByIds1Query>(GetModuleByIds1Document, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getModuleByIds1');
    },
    getModuleByIds2(variables?: GetModuleByIds2QueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetModuleByIds2Query> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetModuleByIds2Query>(GetModuleByIds2Document, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getModuleByIds2');
    },
    getModuleByIds3(variables?: GetModuleByIds3QueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetModuleByIds3Query> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetModuleByIds3Query>(GetModuleByIds3Document, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getModuleByIds3');
    },
    getModuleByIds4(variables?: GetModuleByIds4QueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetModuleByIds4Query> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetModuleByIds4Query>(GetModuleByIds4Document, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getModuleByIds4');
    },
    getPageContent(variables: GetPageContentQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetPageContentQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetPageContentQuery>(GetPageContentDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getPageContent');
    },
    getPodcastList(variables: GetPodcastListQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetPodcastListQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetPodcastListQuery>(GetPodcastListDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getPodcastList');
    },
    getRssPage(variables?: GetRssPageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetRssPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetRssPageQuery>(GetRssPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getRssPage');
    },
    getSearchFilterOptions(variables?: GetSearchFilterOptionsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetSearchFilterOptionsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetSearchFilterOptionsQuery>(GetSearchFilterOptionsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getSearchFilterOptions');
    },
    getSearchResult(variables: GetSearchResultQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetSearchResultQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetSearchResultQuery>(GetSearchResultDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getSearchResult');
    },
    getSidebarModuleIds(variables?: GetSidebarModuleIdsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetSidebarModuleIdsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetSidebarModuleIdsQuery>(GetSidebarModuleIdsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getSidebarModuleIds');
    },
    getSidebarModules(variables?: GetSidebarModulesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetSidebarModulesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetSidebarModulesQuery>(GetSidebarModulesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getSidebarModules');
    },
    getSingleEventList(variables: GetSingleEventListQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetSingleEventListQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetSingleEventListQuery>(GetSingleEventListDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getSingleEventList');
    },
    getSlideshowList(variables: GetSlideshowListQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetSlideshowListQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetSlideshowListQuery>(GetSlideshowListDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getSlideshowList');
    },
    getTopicList(variables: GetTopicListQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetTopicListQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetTopicListQuery>(GetTopicListDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getTopicList');
    },
    getVideoList(variables: GetVideoListQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetVideoListQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetVideoListQuery>(GetVideoListDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getVideoList');
    },
    getWebinarList(variables: GetWebinarListQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetWebinarListQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetWebinarListQuery>(GetWebinarListDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getWebinarList');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;