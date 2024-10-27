import styles from './styles.module.scss';
import ZeroSvgImg from '@/assets/svg/07.svg'
interface SymbolSvgProps {
  animate?: boolean;
}
const SevenSvg: React.FC<SymbolSvgProps> = ({ animate }) => {
  // eslint-disable-next-line jsx-a11y/alt-text
  return <img src={ZeroSvgImg} className={animate ? styles.icon : ''} />
};

export { SevenSvg };
