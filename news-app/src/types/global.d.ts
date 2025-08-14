interface NytMedia {
  url: string;
}

interface News {
uri: string;
section: string;
byline: string;
published_date: string;
title: string;
multimedia: NytMedia[];
abstract: string;
}

interface Headline {
  main: string;
}
interface Thumbnail {
  default: {url: string};
}
interface NewsSearch {
  headline: Headline;
  multimedia: Thumbnail;
}