import React from 'react';

import Container from 'components/ui/Container';

import * as Styled from './styles';

const Footer = () => (
  <Styled.Footer>
    <Container>
      <Styled.Links>
        <Styled.Link href="mailto:jcartee@bitstobytes.org" rel="noreferrer noopener" target="_blank">
          Email
        </Styled.Link>
        <Styled.Link
          href="https://www.facebook.com/b2bredding/"
          rel="noreferrer noopener"
          target="_blank"
        >
          Facebook
        </Styled.Link>
        <Styled.Link href="https://www.github.com/joncartee" rel="noreferrer noopener" target="_blank">
          github
        </Styled.Link>
        <Styled.Link href="https://www.linkedin.com/in/jcartee" rel="noreferrer noopener" target="_blank">
          linkedin
        </Styled.Link>
        <Styled.Link href="https://stackoverflow.com/u/12407766" rel="noreferrer noopener" target="_blank">
          stackoverflow
        </Styled.Link>
        <Styled.Link href="https://www.hackerrank.com/jcartee" rel="noreferrer noopener" target="_blank">
          hackerrank
        </Styled.Link>
        <Styled.Link href="https://www.freecodecamp.org/jcartee" rel="noreferrer noopener" target="_blank">
          freecodecamp
        </Styled.Link>
        <Styled.Link href="https://twitter.com/J7C52" rel="noreferrer noopener" target="_blank">
          twitter
        </Styled.Link>
      </Styled.Links>
    </Container>
  </Styled.Footer>
);

export default Footer;
