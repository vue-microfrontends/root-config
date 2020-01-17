export function navbar(location) {
  // The navbar is always active
  return true;
}

export function dogsDashboard(location) {
  return location.pathname.startsWith("/view-doggos");
}
