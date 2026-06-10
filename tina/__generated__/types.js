export function gql(strings, ...args) {
  let str = "";
  strings.forEach((string, i) => {
    str += string + (args[i] || "");
  });
  return str;
}
export const PagesPartsFragmentDoc = gql`
    fragment PagesParts on Pages {
  __typename
  title
  seoTitle
  seoDescription
  heroTitle
  heroSubtitle
  heroImage
  heroImageAlt
  ctaLabel
  ctaUrl
  ctaSecondaryLabel
  ctaSecondaryUrl
  sections {
    __typename
    _template
    heading
    body
    linkUrl
  }
}
    `;
export const ActualitesPartsFragmentDoc = gql`
    fragment ActualitesParts on Actualites {
  __typename
  title
  slug
  date
  excerpt
  coverImage
  coverImageAlt
  category
  author
  featured
  seoTitle
  seoDescription
  body
}
    `;
export const EvenementsPartsFragmentDoc = gql`
    fragment EvenementsParts on Evenements {
  __typename
  title
  slug
  startDate
  endDate
  location
  address
  excerpt
  coverImage
  coverImageAlt
  registrationUrl
  isPastEvent
  seoTitle
  seoDescription
  body
}
    `;
export const TemoignagesPartsFragmentDoc = gql`
    fragment TemoignagesParts on Temoignages {
  __typename
  name
  role
  quote
  image
  published
  order
}
    `;
export const PartenairesPartsFragmentDoc = gql`
    fragment PartenairesParts on Partenaires {
  __typename
  name
  logo
  websiteUrl
  order
  published
}
    `;
export const SettingsPartsFragmentDoc = gql`
    fragment SettingsParts on Settings {
  __typename
  siteName
  siteDescription
  logo
  email
  phone
  address
  facebookUrl
  instagramUrl
  youtubeUrl
  linkedinUrl
  helloAssoUrl
}
    `;
export const PagesDocument = gql`
    query pages($relativePath: String!) {
  pages(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PagesParts
  }
}
    ${PagesPartsFragmentDoc}`;
export const PagesConnectionDocument = gql`
    query pagesConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PagesFilter) {
  pagesConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PagesParts
      }
    }
  }
}
    ${PagesPartsFragmentDoc}`;
export const ActualitesDocument = gql`
    query actualites($relativePath: String!) {
  actualites(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...ActualitesParts
  }
}
    ${ActualitesPartsFragmentDoc}`;
export const ActualitesConnectionDocument = gql`
    query actualitesConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: ActualitesFilter) {
  actualitesConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...ActualitesParts
      }
    }
  }
}
    ${ActualitesPartsFragmentDoc}`;
export const EvenementsDocument = gql`
    query evenements($relativePath: String!) {
  evenements(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...EvenementsParts
  }
}
    ${EvenementsPartsFragmentDoc}`;
export const EvenementsConnectionDocument = gql`
    query evenementsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: EvenementsFilter) {
  evenementsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...EvenementsParts
      }
    }
  }
}
    ${EvenementsPartsFragmentDoc}`;
export const TemoignagesDocument = gql`
    query temoignages($relativePath: String!) {
  temoignages(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...TemoignagesParts
  }
}
    ${TemoignagesPartsFragmentDoc}`;
export const TemoignagesConnectionDocument = gql`
    query temoignagesConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: TemoignagesFilter) {
  temoignagesConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...TemoignagesParts
      }
    }
  }
}
    ${TemoignagesPartsFragmentDoc}`;
export const PartenairesDocument = gql`
    query partenaires($relativePath: String!) {
  partenaires(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PartenairesParts
  }
}
    ${PartenairesPartsFragmentDoc}`;
export const PartenairesConnectionDocument = gql`
    query partenairesConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PartenairesFilter) {
  partenairesConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PartenairesParts
      }
    }
  }
}
    ${PartenairesPartsFragmentDoc}`;
export const SettingsDocument = gql`
    query settings($relativePath: String!) {
  settings(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...SettingsParts
  }
}
    ${SettingsPartsFragmentDoc}`;
export const SettingsConnectionDocument = gql`
    query settingsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: SettingsFilter) {
  settingsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...SettingsParts
      }
    }
  }
}
    ${SettingsPartsFragmentDoc}`;
export function getSdk(requester) {
  return {
    pages(variables, options) {
      return requester(PagesDocument, variables, options);
    },
    pagesConnection(variables, options) {
      return requester(PagesConnectionDocument, variables, options);
    },
    actualites(variables, options) {
      return requester(ActualitesDocument, variables, options);
    },
    actualitesConnection(variables, options) {
      return requester(ActualitesConnectionDocument, variables, options);
    },
    evenements(variables, options) {
      return requester(EvenementsDocument, variables, options);
    },
    evenementsConnection(variables, options) {
      return requester(EvenementsConnectionDocument, variables, options);
    },
    temoignages(variables, options) {
      return requester(TemoignagesDocument, variables, options);
    },
    temoignagesConnection(variables, options) {
      return requester(TemoignagesConnectionDocument, variables, options);
    },
    partenaires(variables, options) {
      return requester(PartenairesDocument, variables, options);
    },
    partenairesConnection(variables, options) {
      return requester(PartenairesConnectionDocument, variables, options);
    },
    settings(variables, options) {
      return requester(SettingsDocument, variables, options);
    },
    settingsConnection(variables, options) {
      return requester(SettingsConnectionDocument, variables, options);
    }
  };
}
import { createClient } from "tinacms/dist/client";
const generateRequester = (client) => {
  const requester = async (doc, vars, options) => {
    let url = client.apiUrl;
    if (options?.branch) {
      const index = client.apiUrl.lastIndexOf("/");
      url = client.apiUrl.substring(0, index + 1) + options.branch;
    }
    const data = await client.request({
      query: doc,
      variables: vars,
      url
    }, options);
    return { data: data?.data, errors: data?.errors, query: doc, variables: vars || {} };
  };
  return requester;
};
export const ExperimentalGetTinaClient = () => getSdk(
  generateRequester(
    createClient({
      url: "http://localhost:4001/graphql",
      queries
    })
  )
);
export const queries = (client) => {
  const requester = generateRequester(client);
  return getSdk(requester);
};
