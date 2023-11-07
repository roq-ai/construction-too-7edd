interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Individual Customer'],
  tenantRoles: ['Business Owner', 'Outlet Manager', 'Sales Associate', 'Customer Service Representative'],
  tenantName: 'Company',
  applicationName: 'Construction tool rental',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Read tool information', 'Book a tool', 'Read rental information', 'Edit personal information'],
  ownerAbilities: ['Manage users', 'Manage company', 'Manage outlets', 'Manage tools'],
  getQuoteUrl: 'https://app.roq.ai/proposal/7bf1609d-9da7-4397-8585-087ac77a9014',
};
