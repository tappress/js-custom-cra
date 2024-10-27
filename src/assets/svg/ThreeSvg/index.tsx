import styles from './styles.module.scss';
import ZeroSvgImg from '@/assets/svg/03.svg'
interface SymbolSvgProps {
  animate?: boolean;
}
const ThreeSvg: React.FC<SymbolSvgProps> = ({ animate }) => {
  // eslint-disable-next-line jsx-a11y/alt-text
  return <img src={ZeroSvgImg} className={animate ? styles.icon : ''} />
};

export { ThreeSvg };
