export interface IProjectProps {
  image: StaticImageData;
  name: string;
  id: number;
  showDetail: (value: number) => void;
  hide: boolean;
}
