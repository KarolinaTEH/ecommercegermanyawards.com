import dynamic from 'next/dynamic';

import {
  connect,
  MyHead as Head,
  MyLink as Link,
  WidgetSalesMap,
  WidgetExhibitorBenefits,
  //WidgetVideoWithReviews,
  WidgetAllExhibitorsAvatarlist,
  //DatasourceExhibitors,
  WidgetVips,
  DatasourcePhotos,
  Wrapper,
  Gallery,
  Faq,
  // Avatarlist,
  // Typography,
  // WidthAwareInfo,
  // People,
  // GridBenefits
  LayoutMain as Layout,
} from 'eventjuicer-site-components';

const settings = require('../settings').default;

class PageExhibit extends React.Component {
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

        <Wrapper>
          {[
            {
              image:
                'https://res.cloudinary.com/ecommerceberlin/image/upload/v1566475962/about/visitors-growth.svg',
            },
            {
              image:
                'https://res.cloudinary.com/ecommerceberlin/image/upload/v1566475962/about/visitors-profile.svg',
            },
            {
              image:
                'https://res.cloudinary.com/ecommerceberlin/image/upload/v1566476431/about/visitors-branches.svg',
            },
            {
              image:
                'https://res.cloudinary.com/ecommerceberlin/image/upload/v1566475962/about/visitors-position.svg',
            },
            {
              image:
                'https://res.cloudinary.com/ecommerceberlin/image/upload/v1566476005/about/visitors-nationality.svg',
            },

            {
              image:
                'https://res.cloudinary.com/ecommerceberlin/image/upload/v1566476431/about/exhibitors-nationality.svg',
            },
            {
              image:
                'https://res.cloudinary.com/ecommerceberlin/image/upload/v1566475964/about/exhibitors-growth.svg',
            },
            {
              image:
                'https://res.cloudinary.com/ecommerceberlin/image/upload/v1566476431/about/event-promotion.svg',
            },
          ].map(item => (
            <img
              src={item.image}
              style={{
                width: '100%',
                maxWidth: 1200,
                margin: '0 auto',
              }}
            />
          ))}
        </Wrapper>

        <WidgetSalesMap
          label="exhibitors.map.title"
          secondaryLabel="exhibitors.map.opensales"
        />

        <WidgetVips limit={12} mobile={4} />

        <WidgetExhibitorBenefits first label="exhibitors.benefits.title" />

        {/* <WidgetVideoWithReviews /> */}

        <Wrapper label="exhibitors.faq.name">
          <Faq
            url={url}
            baseLabel="exhibitors.faq.become"
            items={[
              {
                label: 'included_services',
                important: true,
                buttons: [],
              },
              {
                baseLabel: 'exhibitors.faq.before_event',
                label: 'additional_paid_services',
              },
              { label: 'payment' },
              { label: 'onboarding' },
              { label: 'resignation' },
              { label: 'promo_benefits' },
              {
                baseLabel: 'exhibitors.faq.before_event',
                label: 'public_profile',
              },
            ]}
          />
        </Wrapper>

        <WidgetAllExhibitorsAvatarlist label="exhibitors.list_full" />

        <DatasourcePhotos>
          {(photos, size) => (
            <Gallery data={photos} size={size} label="event.gallery" />
          )}
        </DatasourcePhotos>
      </Layout>
    );
  }
}

export default connect()(PageExhibit);
