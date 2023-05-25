/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ErrorDetail } from './ErrorDetail';
import type { ProgressDetail } from './ProgressDetail';

export type CreateImageInfo = {
    id?: string;
    error?: string;
    errorDetail?: ErrorDetail;
    status?: string;
    progress?: string;
    progressDetail?: ProgressDetail;
};
