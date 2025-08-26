declare global {
  namespace JSX {
    interface IntrinsicElements {
      'realscout-office-listings': {
        'agent-encoded-id'?: string;
        'sort-order'?: string;
        'listing-status'?: string;
        'property-types'?: string;
        'price-min'?: string;
        'price-max'?: string;
        [key: string]: any;
      };
      'realscout-property-search': {
        [key: string]: any;
      };
      'realscout-property-details': {
        [key: string]: any;
      };
      'realscout-similar-properties': {
        [key: string]: any;
      };
    }
  }
}

export {};
