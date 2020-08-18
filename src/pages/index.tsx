import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import HeroBanner from 'components/HeroBanner';
import Services from 'components/Services';
import Testimonials from 'components/Testimonials';
import Skills from 'components/Skills';
import Coding from 'components/Coding';
import Certs from 'components/Certs';
import OS from 'components/OS';


const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="About Me" />
      <HeroBanner />
      <Certs />
      <Services />
      <Skills />
      <hr />
      <Testimonials />
      <OS />
      <Coding />
    </Layout>
  );
};

export default IndexPage;
