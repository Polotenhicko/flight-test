import { useCallback, useEffect, useState } from 'react';
import { ISubject } from '../services/observer.service';

// custom hook to subscribe component
export function useObserverService(service: ISubject): void {
  const [, forceUpdate] = useState<object>({});

  useEffect(() => {
    service.subscribe(() => forceUpdate({}));

    return () => {
      service.unsubscribe(() => forceUpdate({}));
    };
  }, [forceUpdate, service]);
}
