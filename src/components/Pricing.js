import React, { useState } from 'react';
import './Pricing.css';

const plans = [
  {
    name: 'Beginner',
    price: { monthly: 29, yearly: 299 },
    desc: 'Perfect for those starting their fitness journey.',
    features: [
      'Access to gym floor',
      '2 Group classes/week',
      'Basic fitness assessment',
      'Locker room access',
      'App workout tracking',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Pro',
    price: { monthly: 59, yearly: 599 },
    desc: 'Our most popular plan for serious fitness enthusiasts.',
    features: [
      'Unlimited gym access',
      'Unlimited group classes',
      'Monthly 1-on-1 session',
      'Nutrition consultation',
      'Priority booking',
      'Progress tracking',
      'Guest pass (2/month)',
    ],
    cta: 'Start Today',
    popular: true,
  },
  {
    name: 'Gold Elite',
    price: { monthly: 99, yearly: 999 },
    desc: 'The ultimate package for elite performance.',
    features: [
      'Everything in Pro',
      'Unlimited PT sessions',
      'Custom meal plan',
      'Sports massage (2/month)',
      'Premium merch included',
      'VIP recovery zone',
      'Priority 24/7 support',
    ],
    cta: 'Go Elite',
    popular: false,
  },
];

const Pricing = () => {
  const [billing, setBilling] = useState('monthly');

  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <div className="pricing-header">
          <span className="section-tag reveal">Membership</span>
          <h2 className="pricing-title reveal">
            All Training<br /><span className="text-yellow">Plans</span>
          </h2>
          <div className="billing-toggle reveal">
            <button
              className={billing === 'monthly' ? 'active' : ''}
              onClick={() => setBilling('monthly')}
            >Monthly</button>
            <button
              className={billing === 'yearly' ? 'active' : ''}
              onClick={() => setBilling('yearly')}
            >
              Yearly
              <span className="save-badge">Save 15%</span>
            </button>
          </div>
        </div>

        <div className="pricing-grid">
          {plans.map((p, i) => (
            <div
              className={`pricing-card reveal-scale ${p.popular ? 'popular' : ''}`}
              key={i}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              {p.popular && <div className="popular-badge">Most Popular</div>}

              <div className="plan-header">
                <h3 className="plan-name">{p.name}</h3>
                <p className="plan-desc">{p.desc}</p>
              </div>

              <div className="plan-price">
                <span className="price-currency">$</span>
                <span className="price-num">{p.price[billing]}</span>
                <span className="price-period">/{billing === 'monthly' ? 'mo' : 'yr'}</span>
              </div>

              <ul className="plan-features">
                {p.features.map((f, j) => (
                  <li key={j}>
                    <span className="feature-check">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className={p.popular ? 'btn-primary plan-cta' : 'btn-outline plan-cta'}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span>{p.cta}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
