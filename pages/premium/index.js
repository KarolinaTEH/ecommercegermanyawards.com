import {
  connect,
  reduxWrapper,
  configure,
  WidgetPremiumTickets
} from 'eventjuicer-site-components';

import settings from '../../settings';

const PagePremium = () => (
  
    <WidgetPremiumTickets />
)

export const getStaticProps = reduxWrapper.getStaticProps(async ({ store, params }) => {

  await configure(store, {
    settings : settings,
    preload: ['tickets', 'ticketgroups'],
  })

  return {
    props : {
       
    },
    revalidate: 1
  }

})

export default connect()(PagePremium);
