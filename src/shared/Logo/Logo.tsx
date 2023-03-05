import { Link } from 'react-router-dom';
import PandaImage from 'src/images/panda.png';

type Props = {
  img?: string;
  className?: string;
};

const Logo = ({ img = PandaImage, className = 'w-16' }: Props) => (
  <Link to='/' className={`inline-block focus:outline-none ${className}`}>
    <img src={img} alt='logo' />
  </Link>
);

export default Logo;
