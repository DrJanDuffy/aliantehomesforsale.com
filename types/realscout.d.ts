import type { HTMLAttributes } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'realscout-office-listings': HTMLAttributes<HTMLElement> & {
        'agent-encoded-id': string;
        'sort-order'?: string;
        'listing-status'?: string;
        'property-types'?: string;
        'price-min'?: string;
        'price-max'?: string;
      };
      'realscout-advanced-search': HTMLAttributes<HTMLElement> & {
        'agent-encoded-id': string;
      };
      'realscout-simple-search': HTMLAttributes<HTMLElement> & {
        'agent-encoded-id': string;
      };
      'realscout-home-value': HTMLAttributes<HTMLElement> & {
        'agent-encoded-id': string;
      };
    }
  }
}
