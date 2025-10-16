import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-6 py-12">
      <h1 className="text-3xl font-bold">About</h1>
      <p className="text-gray-600 dark:text-gray-300">
        This is a sample About page to verify routing and component setup.
      </p>
      <div className="flex gap-3">
        <Link href="/">
          <Button variant="secondary">Home</Button>
        </Link>
        <a href="https://nextjs.org/docs" target="_blank" rel="noreferrer">
          <Button>Docs</Button>
        </a>
      </div>
    </div>
  );
}
