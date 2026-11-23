import { QueryClient } from '@tanstack/react-query';
import { matchRoutes } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { createAppRoutes } from './index';

describe('feature routes', () => {
  const routes = createAppRoutes({ queryClient: new QueryClient() });

  it.each([
    ['/admin/payments/console', 'admin/payments/console'],
    ['/admin/users', 'admin/users'],
    ['/patient/results', 'patient/results'],
    ['/patient/results/result-1', 'patient/results/:resultId'],
  ])('matches %s to its feature route', (pathname, expectedRoute) => {
    const matches = matchRoutes(routes, pathname);
    expect(matches?.at(-1)?.route.path).toBe(expectedRoute);
  });
});
