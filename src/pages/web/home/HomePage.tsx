import { SectionCarouselHero } from 'src/sections';
import MasterSearch from 'src/sections/search/MasterSearch';

const HomePage = () => (
  <>
    <SectionCarouselHero />
    <div className='container'>
      <MasterSearch />
    </div>
  </>
);

export default HomePage;
