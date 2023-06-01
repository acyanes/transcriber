import { Nav } from '../../components/nav';

export default function Home() {
  return (
    <main className='flex flex-col'>
      <Nav />
      <p>
        hello world, this app will allow you to upload an audio file and let you
        translate it into words so in reality this should show what the site is
        about
      </p>
      <section id='features'>this is the features section</section>
      <section id='pricing'>this is the pricing section</section>
      <section id='about'>this is the about section</section>
    </main>
  );
}
