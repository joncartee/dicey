import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Experience from 'components/Experience';
import Education from 'components/Education';
import Skills from 'components/Skills';
import Coding from 'components/Coding';
import Certs from 'components/Certs';
import OS from 'components/OS';
import Misc from 'components/Misc';

const ResumePage: React.FC = () => (
  <Layout>
    <SEO title="Resume" />
    <Experience />
    <hr />
    <Education />
    <hr />
    <Certs />
    <Skills />
    <OS />
    <Coding />
    <Misc />
  </Layout>
);

export default ResumePage;
