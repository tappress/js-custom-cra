import styles from './styles.module.scss';
import ZeroSvgImg from '@/assets/svg/09.svg'
interface SymbolSvgProps {
  animate?: boolean;
}
const NineSvg: React.FC<SymbolSvgProps> = ({ animate }) => {
  // eslint-disable-next-line jsx-a11y/alt-text
  return <img src={ZeroSvgImg} className={animate ? styles.icon : ''} />
};

export { NineSvg };
