import {
  connect,
  WidgetVideoWithEventInfo,
  reduxWrapper,
  configure,
  WidgetPhotostream,
  Wrapper,
  Markdown,
  EmbedSection,
  WidgetFaq,
  Box, 
  MyButton,
  WidgetPremiumTickets,
} from 'eventjuicer-site-components';


// import {Timeline, Categories} from '../src/icons' 
import AllPartners from '../src/AllPartners'
import Jurors from '../src/Jurors'
import RegForm from '../src/RegForm'
import IntroRegformTimeline from '../src/IntroRegformTimeline'
import {Winners2024} from '../src/Winners'
import settings from '../settings';
import {Categories} from '../src/icons' 

const PageIndex = (props) => (

<div style={{ backgroundColor: "white" }}>

  <WidgetVideoWithEventInfo  />

  {/* <Wrapper first label="awards.intro.title">
  <Markdown label="awards.intro.description" />
  </Wrapper> */}
  <Categories dense={false} typography={undefined} secondaryTypography={undefined} wrapperProps={{label: "awards.voting.cta"}}/>
  {/* <RegForm /> */}
  {/* <IntroRegformTimeline /> */}
  <Jurors limit={8} />
  <Box textAlign="center" mt={2} >
    <MyButton
      href="/jurors"
      label="all.jurors.button"
      variant="outlined"
      style={{ width: "300px", height: "50px" }}
    />
  </Box>
  <WidgetPhotostream setting="awardsphotostream" />
  <Wrapper label="awards.ceremony.title">
    <EmbedSection data="https://youtu.be/NF0LRYdqt6o?si=gMTzhQ-Q75eHk9v3" playerProps={{light: true}}/>
  </Wrapper>
  {/* <WidgetPremiumTickets label="resources.awards.premium.title"  /> */}
  {/* <Winners2024 /> */}

  <WidgetFaq setting="contestant.faq" />
  <AllPartners />

  <Wrapper label="awards.infovideo.title">
    <EmbedSection data="https://youtu.be/ZJKWjBRlcHo" playerProps={{light: true}}/>
  </Wrapper>

</div>

)
 
 
export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

  return await configure(props, {
    settings: settings,
    preload: []
  })

  
  
})



export default connect()(PageIndex);