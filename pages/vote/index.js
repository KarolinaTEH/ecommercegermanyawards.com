import {
  connect,
  MyHead as Head,
  VoteWithLinkedIn,
  WidgetContestantCompanies,
  WidgetContestantCompany,
  WidgetVoteStatus,
  WidgetFaq,
  LayoutMain as Layout,
  MyTypography as Typography,
  Markdown,
  WidgetVideoWithEventInfo,
  reduxWrapper,
  configure,
  Wrapper,
  Box,
  MyButton,
} from 'eventjuicer-site-components';

/*
  'err',
  'req',
  'res',
  'pathname',
  'query',
  'asPath',
  'AppTree',
  'store',
  'isServer'
*/

import settings from '../../settings'

import {Categories} from '../../src/icons' 

import {Winners2025} from '../../src/Winners'
import IntroRegformTimeline from '../../src/IntroRegformTimeline';

const PageVote = (props) => (

  <div style={{ backgroundColor: "white" }}>

      <Wrapper label="awards.contestants.categories.title" secondaryLabel="awards.contestants.list.description">

      {/* <WidgetVoteStatus  max_votes={25} /> */}
      <Typography template="benefitsText">
      <Markdown label="awards.contestants.voting-rules.description" />
      </Typography>

      </Wrapper>

  
       <Categories  dense={false} typography={undefined} secondaryTypography={undefined} />
       <WidgetFaq setting="contestant.faq" />

       <Wrapper first label="awards.ebeinfo.title">
        <Markdown label="awards.ebeinfo.description" />
    
      <Box textAlign="center" mt={2}>
        <MyButton
          href="https://ecommerceberlin.com/visit?utm_source=ega&utm_medium=banner&utm_campaign=ega_banner_partner"
          label="ebeinfo.button"
          variant="outlined"
          style={{ width: "300px", height: "50px" }}
        />
      </Box>
      </Wrapper>
      <IntroRegformTimeline />
      <Winners2025 />
      <WidgetVideoWithEventInfo />


  
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


export default connect()(PageVote);
