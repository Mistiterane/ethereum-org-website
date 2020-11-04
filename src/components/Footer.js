import React from "react"
import styled from "styled-components"
import { useIntl } from "gatsby-plugin-intl"
import { StaticQuery, graphql } from "gatsby"

import { getLangContentVersion } from "../utils/translations"
import { getLocaleTimestamp } from "../utils/time"
import Translation from "./Translation"
import Link from "./Link"
import Icon from "./Icon"
import { Mixins } from "../theme"

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 3rem;
  padding-bottom: 4rem;
  padding: 1rem 2rem;
`

const FooterTop = styled.div`
  ${Mixins.textLevel8}
  margin: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`

const LastUpdated = styled.div`
  color: ${(props) => props.theme.colors.text200};
`

const LinkGrid = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: auto;
  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    grid-template-columns: repeat(6, auto);
  }
  grid-row-gap: 1rem;
  justify-content: space-between;
`

const LinkSection = styled.div`
  grid-row: span ${(props) => props.spanHeight};
  min-width: 300px;
  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    min-width: initial;
  }
`

const SectionHeader = styled.h3`
  ${Mixins.textLevel8}
  font-weight: bold;
`

const List = styled.ul`
  ${Mixins.textLevel8}
  margin: 0;
  list-style-type: none;
  list-style-image: none;
`

const ListItem = styled.li`
  margin-bottom: 1rem;
`

const FooterLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.text200};
  &:after {
    color: ${(props) => props.theme.colors.text200};
  }
  &:hover {
    color: ${(props) => props.theme.colors.primary};
    &:after {
      color: ${(props) => props.theme.colors.primary};
    }
  }
`

const SocialIcons = styled.div`
  margin: 1rem 0;
`
const SocialIcon = styled(Icon)`
  margin-left: 0.5rem;

  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    margin-left: 0;
    margin-right: 0.5rem;
  }
`

const socialLinks = [
  {
    icon: "github",
    to: "https://github.com/ethereum",
  },
  {
    icon: "twitter",
    to: "https://twitter.com/ethereum",
  },
  {
    icon: "youtube",
    to: "https://youtube.com/channel/UCNOfzGXD_C9YMYmnefmPH0g",
  },
]

const Footer = () => {
  const intl = useIntl()

  const contentVersion = getLangContentVersion(intl.locale)

  const linkSections = [
    {
      title: "page-home-section-individuals-item-two",
      shouldDisplay: true,
      links: [
        {
          to: `/what-is-ethereum/`,
          text:
            contentVersion > 1
              ? "page-home-section-individuals-item-one"
              : "page-home-section-beginners-item-two",
          shouldDisplay: true,
        },
        {
          to: `/use/`,
          text: "page-use",
          shouldDisplay: contentVersion < 1.1,
        },
        {
          to: `/eth/`,
          text: "page-home-section-individuals-item-four",
          shouldDisplay: contentVersion >= 1.1,
        },
        {
          to: `/get-eth/`,
          text: "page-home-section-individuals-item-six",
          shouldDisplay: contentVersion > 1.1,
        },
        {
          to: `/dapps/`,
          text: "page-home-section-individuals-item-two",
          shouldDisplay: contentVersion >= 1.1,
        },
        {
          to: `/wallets/`,
          text: "page-home-section-individuals-item-five",
          shouldDisplay: contentVersion >= 1.1,
        },
      ],
    },
    {
      title: "page-home-section-learn-title",
      shouldDisplay: true,
      links: [
        {
          to: "/whitepaper/",
          text: "footer-ethereum-whitepaper",
          shouldDisplay: contentVersion > 1.1,
        },
        {
          to: "/eips/",
          text: "footer-eips",
          shouldDisplay: contentVersion > 1.1,
        },
        {
          to: `/learn/`,
          text:
            contentVersion > 1
              ? "page-home-section-individuals-item-three"
              : "page-learn",
          shouldDisplay: true,
        },
        {
          text: "page-eth2",
          to: "/eth2/",
          shouldDisplay: contentVersion > 1.1,
        },
        {
          to: `/glossary/`,
          text: "page-glossary",
          shouldDisplay: contentVersion > 1.1,
        },
      ],
    },
    {
      title: "page-developers",
      shouldDisplay: true,
      links: [
        {
          to: `/developers/`,
          text: "edn-home-title",
          shouldDisplay: contentVersion >= 1.2,
          isPartiallyActive: false,
        },
        {
          to: `/developers/docs/`,
          text: "edn-docs-title",
          shouldDisplay: contentVersion >= 1.2,
        },
        {
          to: `/developers/tutorials/`,
          text: "edn-tutorials",
          shouldDisplay: contentVersion >= 1.2,
        },
        {
          to: `/developers/learning-tools/`,
          text: "edn-learning-tools",
          shouldDisplay: contentVersion >= 1.2,
        },
        {
          to: `/developers/local-environment/`,
          text: "edn-local-env",
          shouldDisplay: contentVersion >= 1.2,
        },
        {
          to: `/build/`,
          text: "get-started",
          shouldDisplay: contentVersion < 1.2 && contentVersion >= 1.1,
        },
        {
          to: "https://studio.ethereum.org/",
          text: "ethereum-studio",
          shouldDisplay: contentVersion < 1.2,
        },
        {
          to: `/developers/`,
          text: contentVersion > 1 ? "developer-resources" : "page-developers",
          shouldDisplay: contentVersion > 1.2,
        },
      ],
    },
    {
      title: "footer-ecosystem",
      shouldDisplay: true,
      links: [
        {
          to: "/foundation/",
          text: "ethereum-foundation",
          shouldDisplay: contentVersion > 1.1,
        },
        {
          to: "https://blog.ethereum.org/",
          text: "footer-blog",
          shouldDisplay: true,
        },
        {
          to: "https://esp.ethereum.foundation",
          text: "footer-esp",
          shouldDisplay: true,
        },
        {
          to: "/assets/",
          text: "ethereum-brand-assets",
          shouldDisplay: contentVersion > 1.1,
        },
        {
          to: "https://devcon.org/",
          text: "devcon",
          shouldDisplay: true,
        },
      ],
    },
    {
      title: "footer-about",
      shouldDisplay: true,
      links: [
        {
          to: "/en/about/",
          text: "footer-about-us",
          shouldDisplay: true,
        },
        {
          to: "/en/contributing/",
          text: "contributing",
          shouldDisplay: contentVersion > 1.1,
        },
        {
          to: "/en/languages/",
          text: "language-support",
          shouldDisplay: true,
        },
        {
          to: "/en/privacy-policy/",
          text: "privacy-policy",
          shouldDisplay: true,
        },
        {
          to: "/en/terms-of-use/",
          text: "terms-of-use",
          shouldDisplay: true,
        },
        {
          to: "/en/cookie-policy/",
          text: "cookie-policy",
          shouldDisplay: true,
        },
        {
          to: "mailto:press@ethereum.org",
          text: "contact",
          shouldDisplay: true,
        },
      ],
    },
    {
      title: "page-community",
      shouldDisplay: contentVersion > 1.1,
      links: [
        {
          to: `/community/`,
          text: "page-community",
          shouldDisplay: contentVersion > 1.1,
        },
      ],
    },
    {
      title: "page-enterprise",
      shouldDisplay: contentVersion > 1,
      links: [
        {
          to: "/enterprise/",
          text: "page-enterprise",
          shouldDisplay: contentVersion > 1,
        },
      ],
    },
  ]

  return (
    <StaticQuery
      query={graphql`
        query FooterQuery {
          allSiteBuildMetadata {
            edges {
              node {
                buildTime
              }
            }
          }
        }
      `}
      render={(data) => (
        <StyledFooter>
          <FooterTop>
            <LastUpdated>
              <Translation id="website-last-updated" />:{" "}
              {getLocaleTimestamp(
                intl.locale,
                data.allSiteBuildMetadata.edges[0].node.buildTime
              )}
            </LastUpdated>
            <SocialIcons>
              {socialLinks.map((link, idx) => {
                return (
                  <Link to={link.to} hideArrow={true} key={idx}>
                    <SocialIcon name={link.icon} size="36" />
                  </Link>
                )
              })}
            </SocialIcons>
          </FooterTop>
          <LinkGrid>
            {linkSections.map((section, idx) => {
              return (
                section.shouldDisplay && (
                  <LinkSection spanHeight={section.links.length + 1} key={idx}>
                    <SectionHeader>
                      <Translation id={section.title} />
                    </SectionHeader>
                    <List>
                      {section.links
                        .filter((link) => link.shouldDisplay)
                        .map((link, linkIdx) => {
                          return (
                            <ListItem key={linkIdx}>
                              <FooterLink
                                to={link.to}
                                isPartiallyActive={link.isPartiallyActive}
                              >
                                <Translation id={link.text} />
                              </FooterLink>
                            </ListItem>
                          )
                        })}
                    </List>
                  </LinkSection>
                )
              )
            })}
          </LinkGrid>
        </StyledFooter>
      )}
    />
  )
}

export default Footer
