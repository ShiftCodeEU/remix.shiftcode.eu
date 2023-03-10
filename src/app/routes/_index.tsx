import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="primary"
            // data-testid={`delete-post-${post.title}`}
          >
            Delete
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Welcome to Remix.ShiftCode</DialogTitle>
            <DialogClose />
          </DialogHeader>
          <DialogDescription>
            Are you sure you want to be awesome?
          </DialogDescription>

          <DialogFooter>
            <DialogClose asChild>
              <Button
                variant="primary"
                // disabled={!session}
                // onClick={() => deletePost.mutate({ id: post.id })}
              >
                Delete
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
