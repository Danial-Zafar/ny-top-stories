export interface AticalModel {
  title: string;
  abstract: string;
  uri: string;
  multimedia: MultimediaModel[];
}

interface MultimediaModel {
  url: string;
}
