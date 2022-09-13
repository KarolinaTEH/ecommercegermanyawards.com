import {
  connect,
  WidgetVideoWithEventInfo,
  reduxWrapper,
  configure,
  WidgetPhotostream,
  Wrapper,

  EmbedSection
} from 'eventjuicer-site-components';


import {Timeline, Categories} from '../src/icons' 
import AllPartners from '../src/AllPartners'
import Jurors from '../src/Jurors'
import RegForm from '../src/RegForm'

import {Winners2022} from '../src/Winners'
import settings from '../settings';

const PageIndex = (props) => (

<div>

  <WidgetVideoWithEventInfo  />



  <Categories first dense={false} typography={undefined} secondaryTypography={undefined} wrapperProps={{label: "awards.voting.cta"}}/>

 <Wrapper label="awards.hello.title"><Timeline /></Wrapper>

  <RegForm />

  <Jurors limit={8} />

  <Winners2022 />

  <Wrapper label="awards.ceremony.title">
    <EmbedSection data="https://www.youtube.com/watch?v=RNK3s3IquCQ" playerProps={{light: true}}/>
  </Wrapper>

  <WidgetPhotostream setting="awardsphotostream" />
  <AllPartners />

</div>

)
 
 
export const getStaticProps = reduxWrapper.getStaticProps(async ({ store }) => {

  await configure(store, {
    settings: settings,
    preload: []
  })

  return {
    props: {},
    revalidate: 1
  }
  
})



export default connect()(PageIndex);