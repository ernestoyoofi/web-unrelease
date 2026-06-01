import Link from "next/link";

export const metadata = {
  title: "Not Found?"
}

export default function NotFoundPage() {
  return <div className="w-full h-dvh flex flex-col items-center justify-center px-6">
    <img
      width={120}
      src="https://raw.githubusercontent.com/ernestoyoofi/ernestoyoofi/refs/heads/main/image/purana-icon.webp"
    />
    <h2 className="w-full block max-w-sm text-2xl font-semibold text-center my-4">Eh? Not found, then?</h2>
    <p className="w-full block max-w-sm text-base text-center">You'd better go back to the home page, perhaps there's another issue, or you clicked the wrong link, or were redirected to a shortened link? It seems the link is incorrect or no longer active.</p>
    <Link href="/" className="mt-4 px-5 py-2 bg-purana-2 text-white rounded-full">Back To Home!</Link>
  </div>
}