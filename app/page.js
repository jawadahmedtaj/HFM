import Header from '@/components/header';
import ContactForm from '@/components/contactform';
import MobileAd from '@/components/mobileAd';
import Prizes from '@/components/prizes';
import Gains from '@/components/gains';
import Faqs from '@/components/faqs';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <>
      <Header />
      <ContactForm />
      <MobileAd />
      <Prizes />
      <Gains />
      <Faqs />
      <Footer />
    </>
  );
}
