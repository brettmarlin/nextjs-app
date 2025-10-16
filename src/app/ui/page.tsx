import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { Dialog, DialogTrigger, DialogContent } from '@/components/ui/dialog';

export default function UIDemoPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-8 py-12">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">UI Demo</h1>
        <Link href="/">
          <Button variant="secondary">Home</Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Form Elements</CardTitle>
          <CardDescription>Inputs and actions</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Input placeholder="Your name" />
          <div className="flex gap-3">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="ghost">Ghost</Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Menu</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Action 1</DropdownMenuItem>
                <DropdownMenuItem>Action 2</DropdownMenuItem>
                <DropdownMenuItem>Action 3</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardContent>
        <CardFooter>
          <Dialog>
            <DialogTrigger asChild>
              <Button>Open Dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <div className="space-y-2">
                <h2 className="text-xl font-semibold">Hello</h2>
                <p className="text-muted-foreground text-sm">This is a dialog from shadcn/ui.</p>
              </div>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
    </div>
  );
}
