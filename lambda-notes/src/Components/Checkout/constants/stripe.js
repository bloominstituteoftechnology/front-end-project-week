const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? 'pk_live_MY_PUBLISHABLE_KEY'
  : 'pk_test_vpJZ7OT67atKUohQIOAPZyxT';

export default STRIPE_PUBLISHABLE;