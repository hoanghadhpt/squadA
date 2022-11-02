const pageContentQuery = `
query {
    page_content(url: "` + pageContentUrl
    +`") {
      content {
        ... on Article {
          title
          url
          #uid
          publishedDate
          summary
          subbrand {
            title
            uid
            url
            subbrandLogoGroup {
              subbrandImage {
                url
              }
              subbrandImageAltText
            }
          }
          body
          bodyJson
          topicSelector {
            mainTopic {
             __typename
            }
            additionalTopics {
              __typename
            }
          }
          seriesTaxonomy {
            title
            url
          }
          keywords {
            title
            uid
            contentTypeUid
            url
          }
          featuredImageGroup {
            featuredImage {
              url
            }
            featuredImageCredit
            featuredImageCaption
          }
          seo {
            metaTitle
            metaDescription
            canonicalUrl
            noIndex
          }
        }
        ... on Webinar {
          title
          url
          uid
          publishedDate
          summary
          subbrand {
            title
            uid
            url
            subbrandLogoGroup {
              subbrandImage {
                url
              }
              subbrandImageAltText
            }
          }
          body
          bodyJson
          topicSelector {
            mainTopic {
             __typename
            }
            additionalTopics {
              __typename
            }
          }
          seriesTaxonomy {
            title
            url
          }
          keywords {
            title
            uid
            contentTypeUid
            url
          }
          featuredImageGroup {
            featuredImage {
              url
            }
            featuredImageCredit
            featuredImageCaption
          }
          seo {
            metaTitle
            metaDescription
            canonicalUrl
            noIndex
          }
          webinarGroup {
            duration {
              duration
            }
            webinarId
            webinarUrl
            webinarService
            webinarTimezone
            webinarStartDateAndTime
          }
        }
        ... on Document {
          title
          url
          uid
          publishedDate
          summary
          subbrand {
            title
            uid
            url
            subbrandLogoGroup {
              subbrandImage {
                url
              }
              subbrandImageAltText
            }
          }
          body
          bodyJson
          topicSelector {
            mainTopic {
             __typename
            }
            additionalTopics {
              __typename
            }
          }
          seriesTaxonomy {
            title
            url
          }
          keywords {
            title
            uid
            contentTypeUid
            url
          }
          featuredImageGroup {
            featuredImage {
              url
            }
            featuredImageCredit
            featuredImageCaption
          }
          seo {
            metaTitle
            metaDescription
            canonicalUrl
            noIndex
          }
          document {
            materialTitle
            materialUrl
            materialResource {
              url
            }
          }
        }
        ... on Podcast {
          title
          url
          uid
          publishedDate
          summary
          subbrand {
            title
            uid
            url
            subbrandLogoGroup {
              subbrandImage {
                url
              }
              subbrandImageAltText
            }
          }
          body
          bodyJson
          #topic
          seriesTaxonomy {
            title
            url
          }
          keywords {
            title
            uid
            contentTypeUid
            url
          }
          featuredImageGroup {
            featuredImage {
              url
            }
            featuredImageCredit
            featuredImageCaption
          }
          seo {
            metaTitle
            metaDescription
            canonicalUrl
            noIndex
          }
          podcast {
            podcastId
            podcastLink
            podcastService
            duration {
              duration
            }
          }
        }
        ... on Slideshow {
          title
          url
          uid
          publishedDate
          summary
          subbrand {
            title
            uid
            url
            subbrandLogoGroup {
              subbrandImage {
                url
              }
              subbrandImageAltText
            }
          }
          body
          bodyJson
          topicSelector {
            mainTopic {
             __typename
            }
            additionalTopics {
              __typename
            }
          }
          seriesTaxonomy {
            title
            url
          }
          keywords {
            title
            uid
            contentTypeUid
            url
          }
          featuredImageGroup {
            featuredImage {
              url
            }
            featuredImageCredit
            featuredImageCaption
          }
          seo {
            metaTitle
            metaDescription
            canonicalUrl
            noIndex
          }
          slideshow {
            slideTitle
            slideImage {
              url
            }
            slideImageCredit
            slideImageAltText
            slideImageCaption
            slideImageDescription
          }
        }
        ... on Video {
          title
          url
          uid
          publishedDate
          summary
          subbrand {
            title
            uid
            url
            subbrandLogoGroup {
              subbrandImage {
                url
              }
              subbrandImageAltText
            }
          }
          body
          bodyJson
          topicSelector {
            mainTopic {
             __typename
            }
            additionalTopics {
              __typename
            }
          }
          seriesTaxonomy {
            title
            url
          }
          keywords {
            title
            uid
            contentTypeUid
            url
          }
          featuredImageGroup {
            featuredImage {
              url
            }
            featuredImageCredit
            featuredImageCaption
          }
          seo {
            metaTitle
            metaDescription
            canonicalUrl
            noIndex
          }
          video {
            duration {
              duration
            }
            videoUrl
            videoCredit
          }
        }
      }
    }
  }
  
`