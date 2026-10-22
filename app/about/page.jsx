import { personName, siteDescription, siteUrl } from "../site";

export const metadata = {
  title: "About " + personName,
  description: siteDescription,
  alternates: siteUrl ? { canonical: "/about" } : undefined,
  openGraph: {
    title: "About " + personName,
    description: siteDescription,
    url: siteUrl ? "/about" : undefined,
  },
};

export default function AboutPage() {
  return (
    <main className="about-page">
      <header className="about-page__header">
        <a className="brand" href="/">FEBIVERSE<span>.</span></a>
        <a className="about-page__back" href="/">BACK TO HOME</a>
      </header>
      <article className="about-page__content">
        <p className="section-label"><span>[ 01 ]</span>ABOUT FEBIN SEBASTIAN</p>
        <h1>{personName} is a <em>creative technologist.</em></h1>
        <div className="about-page__body">
          <p>{siteDescription}</p>
          <p>I&apos;m a BCA student at Christ College, Mysuru, building websites and exploring software development alongside my studies. My work combines technical curiosity with an interest in design, video editing, and digital storytelling.</p>
          <p>My approach is to make digital work that feels intentional, works smoothly, and serves a real purpose.</p>
        </div>
      </article>
    </main>
  );
}
