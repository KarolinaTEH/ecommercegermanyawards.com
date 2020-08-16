import {
  MyHead as Head,
  connect,
  WidgetVisitor,
  WidgetPresenters,
  WidgetSchedule,
  WidgetVideoWithEventInfo,
  // Typography,
  // Wrapper,
  LayoutMain as Layout,
} from 'eventjuicer-site-components';

const settings = require('../settings').default;

class PageSchedule extends React.Component {
  static async getInitialProps({ query, asPath, isServer, store }) {
    return {
      preload: [],
      settings: settings,
    };
  }

  render() {
    const { url } = this.props;

    return (
      <Layout>
        <Head />

        {/* <WidgetSchedule first /> */}

        <WidgetVisitor label="visitors.register_alt" />

        <WidgetVideoWithEventInfo />

        <WidgetPresenters
          filter={function(item) {
            return item.bio.length > 10;
          }}
        />

        <WidgetVisitor label="visitors.register" />

        {/* 
        <Wrapper label="visitors.attendees">
          <WhoIsGonnaBeThere />
         </Wrapper> 
        */}
      </Layout>
    );
  }
}

export default connect()(PageSchedule);
