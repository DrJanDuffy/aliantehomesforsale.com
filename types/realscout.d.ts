declare namespace JSX {
  interface IntrinsicElements {
    'realscout-office-listings': {
      'agent-encoded-id': string;
      'sort-order'?: string;
      'listing-status'?: string;
      'property-types'?: string;
      'price-min'?: string;
      'price-max'?: string;
      [key: string]: any;
    };
    'realscout-advanced-search': {
      'agent-encoded-id': string;
      [key: string]: any;
    };
    'realscout-simple-search': {
      'agent-encoded-id': string;
      [key: string]: any;
    };
    'realscout-home-value': {
      'agent-encoded-id': string;
      [key: string]: any;
    };
  }
} 
