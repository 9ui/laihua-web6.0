import type { PropType } from 'vue';

import { propTypes } from '/@/utils/propTypes';

export const footerProps = {
  confirmLoading: propTypes.bool,
  /**
   * @description: Show close button
   */
  showCancelBtn: propTypes.bool.def(true),
  cancelButtonProps: Object as PropType<any>,
  cancelText: propTypes.string.def('取消'),
  /**
   * @description: Show confirmation button
   */
  showOkBtn: propTypes.bool.def(true),
  okButtonProps: propTypes.any,
  okText: propTypes.string.def('确定'),
  okType: propTypes.string.def('primary'),
  showFooter: propTypes.bool,
  footerHeight: {
    type: [String, Number] as PropType<string | number>,
    default: 60,
  },
};
export const basicProps = {
  isDetail: propTypes.bool,
  title: propTypes.string.def(''),
  showDetailBack: propTypes.bool.def(true),
  visible: propTypes.bool,
  loading: propTypes.bool,
  maskClosable: propTypes.bool.def(true),
  getContainer: {
    type: [Object, String] as PropType<any>,
  },
  scrollOptions: {
    type: Object as PropType<any>,
    default: null,
  },
  closeFunc: {
    type: [Function, Object] as PropType<any>,
    default: null,
  },
  triggerWindowResize: propTypes.bool,
  destroyOnClose: propTypes.bool,
  ...footerProps,
};
