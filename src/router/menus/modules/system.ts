import type { MenuModule } from '/@/router/types';
import { t } from '/@/hooks/web/useI18n';

const menu: MenuModule = {
  orderNo: 2000,
  menu: {
    name: t('routes.demo.system.moduleName'),
    path: '/system',
    children: [
      {
        path: 'account',
        name: t('routes.demo.system.account'),
      },
      {
        path: 'changePassword',
        name: t('routes.demo.system.password'),
      },
    ],
  },
};
export default menu;
