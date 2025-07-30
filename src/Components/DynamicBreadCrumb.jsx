import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const DynamicBreadcrumb = () => {
  const { pathname } = useLocation();
  const segments = pathname.split('/').filter(Boolean);


  const LABELS = {
    'AboutUs': 'About Us',
    'ContactUs': 'Contact Us',
    'AllProducts': 'All Products',
  }

  // 1. build the full crumbs
  const crumbs = [
    { label: 'Home', path: '/' },
    ...segments.map((seg, idx) => ({
      label: LABELS[seg] || seg.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
      path: '/' + segments.slice(0, idx + 1).join('/'),
    }))
  ];

  // 2. remove any crumb whose label is "Blog"
  const filtered = crumbs.filter(c => c.label !== 'Blog');

  return (
    <nav aria-label="breadcrumb" style={{ padding: '.5rem 1rem' }}>
      {filtered.map((c, i) => {
        const isLast = i === filtered.length - 1;
        return (
          <span key={c.path}>
            {isLast
              ? <span aria-current="page">{c.label}</span>
              : <Link to={c.path} style={{ color: '#0070f3', textDecoration: 'none' }}>
                  {c.label}
                </Link>
            }
            {!isLast && <span style={{ margin: '0 8px' }}>›</span>}
          </span>
        );
      })}
    </nav>
  );
};

export default DynamicBreadcrumb;