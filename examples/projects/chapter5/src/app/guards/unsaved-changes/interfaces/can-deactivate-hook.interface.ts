import { Observable } from 'rxjs';

export interface CanDeactivateHook {
    canDeactivate(): boolean | Observable<boolean>;
}
