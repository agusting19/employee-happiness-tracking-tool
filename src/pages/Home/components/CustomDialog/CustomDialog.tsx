import { SubjectManager } from '@/models';
import Dialog from '@mui/material/Dialog';
import { useEffect, useState } from 'react';
import { Subscription } from 'rxjs';

interface Props {
  children: React.ReactNode;
}

export const dialogOpenSubject$ = new SubjectManager<Boolean>();
export const dialogCloseSubject$ = new SubjectManager<Boolean>();

export const CustomDialog = ({ children }: Props) => {
  const [open, setOpen] = useState(false);
  let openSubject$ = new Subscription();
  let closeSubject$ = new Subscription();

  useEffect(() => {
    openSubject$ = dialogOpenSubject$.getSubject.subscribe(() => {});
    closeSubject$ = dialogCloseSubject$.getSubject.subscribe(() => {});

    return () => {
      openSubject$.unsubscribe();
      closeSubject$.unsubscribe();
    };
  }, []);

  const handleClickOpen = () => setOpen(true);
  const handleClickClose = () => setOpen(false);

  const handleExit = () => (dialogCloseSubject$.setSubject = false);

  return (
    <div>
      <Dialog
        open={open}
        onClose={() => handleExit()}
        aria-labelleadby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
      >
        {children}
      </Dialog>
    </div>
  );
};
