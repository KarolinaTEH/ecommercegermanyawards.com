import {
  connect,
  WidgetVideoWithEventInfo,
  reduxWrapper,
  configure,
  WidgetPhotostream,
  WidgetFaq
} from 'eventjuicer-site-components';


import {Categories} from '../src/icons' 
import AllPartners from '../src/AllPartners'
import RegForm from '../src/RegForm'
import Intro from '../src/Intro'
import Jurors from '../src/Jurors'
import settings from '../settings';
import {Winners2025} from '../src/Winners'

const PageIndex = (props) => (

<div>

  <RegForm first />
  <Intro />
  <Categories />
  {/* <WidgetVideoWithEventInfo /> */}
  <WidgetFaq setting="contestant.faq" />
  <Jurors />
  <Winners2025 />
  <WidgetPhotostream setting="awardsphotostream" />
  <AllPartners />

</div>

)
 
 
export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

  return await configure(props, {
    settings: settings,
    preload: ['contestant_companies_all']
  })


  
})



export default connect()(PageIndex);