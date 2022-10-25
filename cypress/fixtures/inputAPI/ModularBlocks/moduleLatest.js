import {latestUid1} from "./moduleUid"
export const moduleLatestQuery =
 `
    query ModuleLatest{
        all_module_latest_content(
          where:{
            uidIn:[ "`+ latestUid1 + `"]
          }
        ) {
          entries{
            meta{
              entry{
                title
              __typename
              }
            }
            items{
              itemsLatestSection1{
                __typename
                ... on Article{
                title
                summary
                url
                readTime
                featuredImageGroup{
                  featuredImage{url}
                }
                 topicSelector{
                  mainTopic{
                    ... on TopicPrimary{
                      title
                      url
                    }
                    ... on TopicSecondary{
                      title
                      url
                    }
                    ... on TopicTertiary{
                      title
                      url
                    }
                  }
                }
              }
                 ... on Document{
                title
                summary
                url
                readTime
                featuredImageGroup{
                  featuredImage{url}
                }
                 topicSelector{
                  mainTopic{
                    ... on TopicPrimary{
                      title
                      url
                    }
                    ... on TopicSecondary{
                      title
                      url
                    }
                    ... on TopicTertiary{
                      title
                      url
                    }
                  }
                }
              }
               ... on Event{
                title
                eventDescription
                url
                eventDetails{
                  endDate
                  startDate
                  eventUrl
                  eventLogo{ 
                      logoFile{url}
                      eventLogoAlt
                  }
                  eventType
                  buttons{
                    buttonLink
                    buttonName
                  }
                }
              }
              ... on ExternalLink{
                title
                summary
                url
                topicSelector{
                  mainTopic{
                    ... on TopicPrimary{
                      title
                      url
                    }
                    ... on TopicSecondary{
                      title
                      url
                    }
                    ... on TopicTertiary{
                      title
                      url
                    }
                  }
                }
              }
                ... on Magazine{
                title
                summary
                url
                readTime
                featuredImageGroup{
                  featuredImage{url}
                }
                 topicSelector{
                  mainTopic{
                    ... on TopicPrimary{
                      title
                      url
                    }
                    ... on TopicSecondary{
                      title
                      url
                    }
                    ... on TopicTertiary{
                      title
                      url
                    }
                  }
                }
              }
                 ... on Podcast{
                title
                summary
                url
                readTime
                featuredImageGroup{
                  featuredImage{url}
                }
                 topicSelector{
                  mainTopic{
                    ... on TopicPrimary{
                      title
                      url
                    }
                    ... on TopicSecondary{
                      title
                      url
                    }
                    ... on TopicTertiary{
                      title
                      url
                    }
                  }
                }
              }
                 ... on Slideshow{
                title
                summary
                url
                readTime
                featuredImageGroup{
                  featuredImage{url}
                }
                 topicSelector{
                  mainTopic{
                    ... on TopicPrimary{
                      title
                      url
                    }
                    ... on TopicSecondary{
                      title
                      url
                    }
                    ... on TopicTertiary{
                      title
                      url
                    }
                  }
                }
              }
                 ... on Video{
                title
                summary
                url
                readTime
                featuredImageGroup{
                  featuredImage{url}
                }
                 topicSelector{
                  mainTopic{
                    ... on TopicPrimary{
                      title
                      url
                    }
                    ... on TopicSecondary{
                      title
                      url
                    }
                    ... on TopicTertiary{
                      title
                      url
                    }
                  }
                }
              }
                 ... on Webinar{
                title
                summary
                url
                readTime
                featuredImageGroup{
                  featuredImage{url}
                }
                 topicSelector{
                  mainTopic{
                    ... on TopicPrimary{
                      title
                      url
                    }
                    ... on TopicSecondary{
                      title
                      url
                    }
                    ... on TopicTertiary{
                      title
                      url
                    }
                  }
                }
              }
              }
              itemsLatestSection2{
                __typename
                ... on Article{
                  title
                  url
                }
                ... on Document{
                  title
                  url
                }
                ... on Event{
                  title
                  url
                }
                ... on ExternalLink{
                  title
                  url
                }
                ... on Magazine{
                  title
                  url
                }
                ... on Podcast{
                  title
                  uid
                }
                ... on Slideshow{
                  title
                  uid
                }
                ... on Video{
                  title
                  url
                }
                ... on Webinar{
                  title
                  url
                }
              }
            }
          }
        }
      }
  `
