import {
  connect,
  reduxWrapper,
  configure,
  WidgetFaq
} from 'eventjuicer-site-components';


import {Categories} from '../src/icons' 
import AllPartners from '../src/AllPartners'
import Intro from '../src/Intro'
import settings from '../settings';

const PageCategories = (props) => (

<div>

  <Categories first dense={false} typography={undefined} secondaryTypography={undefined} />

  <Intro />

  <WidgetFaq setting="contestant.faq" />

  <AllPartners />

</div>

)
 
 
export const getStaticProps = reduxWrapper.getStaticProps(async ({ store }) => {

  await configure(store, {
    settings: settings,
    preload: ['contestant_companies_all']
  })

  return {
    props: {},
    revalidate: 1
  }
  
})



export default connect()(PageCategories);



