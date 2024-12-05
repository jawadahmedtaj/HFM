import Image from 'next/image';
import Header from './components/header';
import ContactForm from './components/contactform';

export default function Home() {
  return (
    <>
      <Header />
      <ContactForm />
    </>
  );
}
