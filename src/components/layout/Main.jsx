import Banner from '../sections/Banner';
import Cards from '../sections/Cards';
import Description from '../sections/Description';
import { HIDDEN_DESCRIPTION, MAIN_DESCRIPTION } from '../../const/const';
function Main() {
  return (
      <main className='main'>
        <Banner/>
        <Cards/>
        <Description mainText={MAIN_DESCRIPTION} secondText={HIDDEN_DESCRIPTION}/>
      </main>
  );
}

export default Main;
