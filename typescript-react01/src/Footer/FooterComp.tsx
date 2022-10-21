import { Footer } from 'flowbite-react';

const FooterComp = () => {
  return (
    <Footer container={true}>
      <Footer.Copyright
        href="#"
        by="InTouch - Corches Theodor"
        year={2022}
      />
    </Footer>
  );  
}

export default FooterComp;