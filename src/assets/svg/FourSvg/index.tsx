import styles from './styles.module.scss';
import ZeroSvgImg from '@/assets/svg/04.svg'
interface SymbolSvgProps {
  animate?: boolean;
}
const FourSvg: React.FC<SymbolSvgProps> = ({ animate }) => {
  // eslint-disable-next-line jsx-a11y/alt-text
  return <img src={ZeroSvgImg} className={animate ? styles.icon : ''} />
};

export { FourSvg };
