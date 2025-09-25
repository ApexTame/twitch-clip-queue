import { useAppSelector } from '../../../app/hooks';
import { selectLayout } from '../clipQueueSlice';
import ClassicLayout from './layouts/ClassicLayout';
import FullscreenWithPopupLayout from './layouts/FullscreenWithPopupLayout';
import SpotlightLayout from './layouts/SpotlightLayout';

function QueuePage() {
  const layout = useAppSelector(selectLayout);

  let Layout = ClassicLayout;
  switch (layout) {
    case 'classic':
      Layout = ClassicLayout;
      break;
    case 'spotlight':
      Layout = SpotlightLayout;
      break;
    case 'fullscreen':
      Layout = FullscreenWithPopupLayout;
      break;
  }

  return (
    <>

      <Layout />
    </>
  );
}

export default QueuePage;
