import WikiHomePage from "@/app/w/page";
export { metadata } from "@/app/w/page";

export default function HomePage() {
  return <>
    <WikiHomePage />
    <section id="support" aria-labelledby="support-title" className="mx-auto w-full max-w-6xl px-5 py-16">
        <h2 id="support-title" className="text-3xl font-bold">Support Mihai’s work</h2>
        <p className="mt-3">If you found this site useful, you can leave Mihai a tip.</p>
        <a className="mt-4 inline-flex min-h-11 items-center underline" href="https://ko-fi.com/ro_mihaiu">Support ro_mihaiu on Ko-fi</a>
      </section>
  </>;
}
