import {
  connect,
  WidgetVideoWithEventInfo,
  reduxWrapper,
  configure,
  MyTypography,
  Markdown,
  WidgetPhotostream,
  WidgetRegForm,
  // YouTube
} from 'eventjuicer-site-components';
 
import AllPartners from '../src/AllPartners'
import settings from '../settings';
import {Winners2025} from '../src/Winners'

const PageJury = (props) => (<div>
 
{/* <WidgetRegForm  
  setting="awards.attend_a_party"
  right={
    <div style={{marginTop: 30, marginLeft: 10}}>
    <MyTypography template="subtitle1" label="party.register.title" /> 
    <Markdown label="party.register.description" />
    </div>
  }
  summary={<div>asd</div>}
/> */}

<WidgetPhotostream first setting="awardsphotostream" />

{/* <YouTube url='https://www.youtube.com/watch?v=pLfnx7B3BBA' /> */}
<Winners2025 />
<AllPartners />
<WidgetVideoWithEventInfo />
</div>)
 
export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

  return await configure(props, {
    settings: settings,
    preload: []
  })


  
})

export default connect()(PageJury);