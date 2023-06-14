export interface BooksData {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  saleInfo: SaleInfo;
  volumeInfo: VolumeInfo;
}

interface SaleInfo {
  country: string;
  isEbook: boolean;
  saleability: string;
}

export interface VolumeInfo {
  allowAnonLogging: boolean;
  authors: string[];
  canonicalVolumeLink: string;
  categories: string[];
  contentVersion: string;
  description: string;
  imageLinks: ImageLinks;
  industryIdentifiers: string[];
  infoLink: string;
  language: string;
  maturityRating: string;
  pageCount: number;
  panelizationSummary: PanelizationSummary;
  previewLink: string;
  printType: string;
  publishedDate: string;
  readingModes: ReadingModes;
  title: string;
}

interface PanelizationSummary {
  containsEpubBubbles: boolean;
  containsImageBubbles: boolean;
}

interface ReadingModes {
  image: boolean;
  text: boolean;
}

export interface TableDataProps {
  booksData: BooksData[];
  setAuthor: React.Dispatch<React.SetStateAction<string[]>>;
}

interface ImageLinks {
  smallThumbnail: string;
  thumbnail: string;
}

export interface TableRowsNames {
  rowName: string;
}

export interface TableRowsProps {
  tableRowsNames: TableRowsNames[];
}

export interface AuthorsProps {
  authors: string[];
  setAuthor: any;
}


