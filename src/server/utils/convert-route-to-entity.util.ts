const mapping: Record<string, string> = {
  companies: 'company',
  'team-members': 'team_member',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
